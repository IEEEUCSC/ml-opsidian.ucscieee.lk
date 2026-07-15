"use client"

import { useState } from "react"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"
import fontkit from '@pdf-lib/fontkit'

export default function ClaimCertificatePage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "found">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [certificates, setCertificates] = useState<{
    initialRound: { name: string, teamName?: string } | null;
    workshop: { name: string, type: "atleast_2" | "all_3" } | null;
  }>({ initialRound: null, workshop: null });
  const [downloadingCert, setDownloadingCert] = useState<string | null>(null);

  const splitCsv = (text: string) => text.split('\n').map(r => r.replace(/\r$/, '').split(','));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")
    setCertificates({ initialRound: null, workshop: null })

    try {
      const [initialRes, workshopRes] = await Promise.all([
        fetch("/initial_round_list.csv").then(r => r.text()),
        fetch("/workshop_att.csv").then(r => r.text())
      ]);

      let initialMatch = null;
      const initialRows = splitCsv(initialRes);
      for (let i = 1; i < initialRows.length; i++) {
        const row = initialRows[i];
        if (row.length >= 3) {
          const teamName = row[0]?.trim();
          const rowEmail1 = row[2]?.trim().toLowerCase();
          const rowEmail2 = row[3]?.trim().toLowerCase();
          const targetEmail = email.toLowerCase().trim();
          if (rowEmail1 === targetEmail || rowEmail2 === targetEmail) {
            initialMatch = { name: row[1]?.trim(), teamName };
            break;
          }
        }
      }

      let workshopMatch = null;
      const workshopRows = splitCsv(workshopRes);
      for (let i = 1; i < workshopRows.length; i++) {
        const row = workshopRows[i];
        if (row.length >= 2) {
          const rowEmail = row[1]?.trim().toLowerCase();
          const targetEmail = email.toLowerCase().trim();
          if (rowEmail === targetEmail) {
            const atleast2 = row.length > 3 ? row[3]?.trim().toLowerCase() === "ok" : false;
            const all3 = row.length > 4 ? row[4]?.trim().toLowerCase() === "ok" : false;

            if (all3) {
              workshopMatch = { name: row[0]?.trim(), type: "all_3" as const };
            } else if (atleast2) {
              workshopMatch = { name: row[0]?.trim(), type: "atleast_2" as const };
            }
            break;
          }
        }
      }

      if (!initialMatch && !workshopMatch) {
        setStatus("error")
        setErrorMessage("No certificates found for this email address.")
        return
      }

      setCertificates({
        initialRound: initialMatch,
        workshop: workshopMatch
      });
      setStatus("found");

    } catch (error) {
      console.error(error);
      setStatus("error")
      setErrorMessage("An error occurred while checking eligibility.")
    }
  }

  const downloadCertificate = async (pdfTemplate: string, name: string, teamName?: string) => {
    setDownloadingCert(pdfTemplate);
    setErrorMessage("");
    try {
      const pdfBytes = await fetch(pdfTemplate).then((res) => {
        if (!res.ok) throw new Error("Failed to load PDF template")
        return res.arrayBuffer()
      })
      const pdfDoc = await PDFDocument.load(pdfBytes)

      pdfDoc.registerFontkit(fontkit)

      const fontBytes = await fetch("/Orbitron-Bold.ttf").then((res) => {
        if (!res.ok) return null;
        return res.arrayBuffer();
      }).catch(() => null);

      const font = fontBytes ? await pdfDoc.embedFont(fontBytes) : await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      const pages = pdfDoc.getPages()
      const firstPage = pages[0]
      const { width } = firstPage.getSize()

      const fontSize = 28
      const letterSpacing = fontSize * 0.10

      let totalWidth = 0
      const charWidths = name.split('').map(char => {
        const w = font.widthOfTextAtSize(char, fontSize)
        totalWidth += w
        return w
      })
      totalWidth += (name.length - 1) * letterSpacing

      let nameY = 330;
      if (pdfTemplate.includes("initial")) {
        nameY = 370; // Adjusted higher between "AWARDED TO" and "OF TEAM"
      }

      let currentX = (width - totalWidth) / 2
      for (let i = 0; i < name.length; i++) {
        firstPage.drawText(name[i], {
          x: currentX,
          y: nameY,
          size: fontSize,
          font: font,
          color: rgb(1, 1, 1),
        })
        currentX += charWidths[i] + letterSpacing
      }

      if (pdfTemplate.includes("initial") && teamName) {
        const teamFontSize = 20;
        const teamLetterSpacing = teamFontSize * 0.10;
        let teamTotalWidth = 0;
        const teamCharWidths = teamName.split('').map(char => {
          const w = font.widthOfTextAtSize(char, teamFontSize)
          teamTotalWidth += w
          return w
        });
        teamTotalWidth += (teamName.length - 1) * teamLetterSpacing;

        let teamCurrentX = (width - teamTotalWidth) / 2;
        const teamY = 290; // Below "OF TEAM" text
        for (let i = 0; i < teamName.length; i++) {
          firstPage.drawText(teamName[i], {
            x: teamCurrentX,
            y: teamY,
            size: teamFontSize,
            font: font,
            color: rgb(1, 1, 1),
          })
          teamCurrentX += teamCharWidths[i] + teamLetterSpacing
        }
      }

      const pdfBytesModified = await pdfDoc.save()

      const blob = new Blob([pdfBytesModified as any], { type: "application/pdf" })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      let certNameSuffix = "Certificate";
      if (pdfTemplate.includes("initial")) certNameSuffix = "Initial_Round";
      else if (pdfTemplate.includes("all_3")) certNameSuffix = "All_3_Workshops";
      else if (pdfTemplate.includes("atleast_2")) certNameSuffix = "2_Workshops";
      link.download = `${certNameSuffix}_${name.replace(/\s+/g, "_")}.pdf`
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)

    } catch (err) {
      console.error(err)
      setErrorMessage("An error occurred while generating the certificate.")
    } finally {
      setDownloadingCert(null);
    }
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--opsidian-background)] text-[var(--opsidian-text)]">
      {/* Background patterns matching homepage */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(5_11_13_/_0.8)_0%,rgb(5_11_13_/_0.56)_24%,rgb(5_11_13_/_0.28)_55%,rgb(5_11_13_/_0.52)_100%),radial-gradient(circle_at_18%_18%,rgb(0_229_255_/_0.15),transparent_24%),radial-gradient(circle_at_72%_22%,rgb(0_229_255_/_0.12),transparent_20%),linear-gradient(180deg,rgb(5_11_13_/_0.24),rgb(5_11_13_/_0.68))]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgb(28_77_80_/_0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgb(28_77_80_/_0.16)_1px,transparent_1px)] [background-size:72px_72px] opacity-10" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_bottom,transparent,rgb(0_229_255_/_0.14),transparent)] [background-size:100%_3px] opacity-8" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(0_229_255_/_0.04),transparent_52%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="[font-family:var(--font-sans)] text-3xl font-semibold tracking-[0.06em] text-[var(--opsidian-text)] uppercase">
              Claim Your <span className="text-[var(--opsidian-primary)]">Certificate</span>
            </h1>
            <p className="mt-2 text-sm text-[var(--opsidian-text-soft)]">
              {status === "found"
                ? "Download your earned certificates below."
                : "Enter your email to generate and download your certificates."}
            </p>
          </div>

          {status === "idle" || status === "loading" || status === "error" ? (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-[14px] border border-[color:rgb(28_77_80_/_0.82)] bg-[color:rgb(13_23_26_/_0.78)] p-6 shadow-[var(--opsidian-shadow-plate)] backdrop-blur-sm">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[var(--opsidian-text-soft)]">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-[var(--opsidian-border)] bg-[color:rgb(5_11_13_/_0.6)] px-4 py-2 text-[var(--opsidian-text)] placeholder:text-[var(--opsidian-text-muted)] focus:border-[var(--opsidian-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--opsidian-primary)]"
                  placeholder="e.g. user1@example.com"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex h-10 items-center justify-center rounded-[10px] border border-[color:rgb(0_229_255_/_0.55)] bg-[var(--opsidian-primary)] px-4 [font-family:var(--font-mono)] text-[0.68rem] tracking-[0.22em] text-[var(--opsidian-background)] uppercase shadow-[0_0_20px_rgb(0_229_255_/_0.16)] hover:bg-[color:rgb(0_229_255_/_0.88)] focus-visible:ring-2 focus-visible:ring-[color:rgb(0_229_255_/_0.28)] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Checking..." : "Check Eligibility"}
              </button>
              <div className="mt-4 text-center">
                <a href="/" className="text-sm text-[var(--opsidian-primary)] hover:underline">
                  Return to Home
                </a>
              </div>
            </form>
          ) : (
            <div className="space-y-6 rounded-[14px] border border-[color:rgb(28_77_80_/_0.82)] bg-[color:rgb(13_23_26_/_0.78)] p-6 shadow-[var(--opsidian-shadow-plate)] backdrop-blur-sm text-center">
              <h2 className="text-xl font-semibold text-[var(--opsidian-text)] mb-4">Certificates Found!</h2>
              <p className="text-sm text-[var(--opsidian-text-soft)] mb-6">
                We found the following certificates for {email}.
              </p>

              <div className="space-y-4">
                {certificates.initialRound && (
                  <button
                    onClick={() => downloadCertificate("/initial_rounds.pdf", certificates.initialRound!.name, certificates.initialRound!.teamName)}
                    disabled={downloadingCert !== null}
                    className="w-full inline-flex h-10 items-center justify-center rounded-[10px] border border-[color:rgb(0_229_255_/_0.55)] bg-[var(--opsidian-primary)] px-4 [font-family:var(--font-mono)] text-[0.68rem] tracking-[0.22em] text-[var(--opsidian-background)] uppercase shadow-[0_0_20px_rgb(0_229_255_/_0.16)] hover:bg-[color:rgb(0_229_255_/_0.88)] focus-visible:ring-2 focus-visible:ring-[color:rgb(0_229_255_/_0.28)] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {downloadingCert === "/initial_rounds.pdf" ? "Generating..." : "Initial Round Certificate"}
                  </button>
                )}

                {certificates.workshop && (
                  <button
                    onClick={() => downloadCertificate(`/${certificates.workshop!.type}.pdf`, certificates.workshop!.name)}
                    disabled={downloadingCert !== null}
                    className="w-full inline-flex h-10 items-center justify-center rounded-[10px] border border-[color:rgb(0_229_255_/_0.55)] bg-[var(--opsidian-primary)] px-4 [font-family:var(--font-mono)] text-[0.68rem] tracking-[0.22em] text-[var(--opsidian-background)] uppercase shadow-[0_0_20px_rgb(0_229_255_/_0.16)] hover:bg-[color:rgb(0_229_255_/_0.88)] focus-visible:ring-2 focus-visible:ring-[color:rgb(0_229_255_/_0.28)] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {downloadingCert === `/${certificates.workshop!.type}.pdf` ? "Generating..." : (certificates.workshop!.type === "all_3" ? "All 3 Workshops Certificate" : "2 Workshops Certificate")}
                  </button>
                )}
              </div>

              {errorMessage && (
                <p className="mt-4 text-sm text-red-400">{errorMessage}</p>
              )}

              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setStatus("idle");
                    setCertificates({ initialRound: null, workshop: null });
                  }}
                  className="text-sm text-[var(--opsidian-primary)] hover:underline"
                >
                  Check another email
                </button>
                <a href="/" className="text-sm text-[var(--opsidian-text-soft)] hover:text-[var(--opsidian-primary)] transition-colors">
                  Return to Home
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

