import Image from "next/image"

import { Countdown } from "@/components/core/countdown"
import { SubmissionCta } from "@/components/core/submission-cta"
import ieeeSbLogo from "@/IEEE SB Logo.svg"

const SUBMISSION_OPEN = "2026-06-09T10:00:00+05:30"
const SUBMISSION_DEADLINE = "2026-06-16T10:00:00+05:30"
const DELEGATE_BOOKLET = "/ML_Opsidian_%20Genesis%20_DelegateBooklet.pdf"
const REGISTRATION_LINK = "https://forms.gle/LEAivdsGwpxq4ATK6"

export default function Page() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[var(--opsidian-background)] text-[var(--opsidian-text)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full scale-[1.06] object-cover object-[62%_center] motion-reduce:hidden"
        >
          <source src="/2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(5_11_13_/_0.72)_0%,rgb(5_11_13_/_0.46)_26%,rgb(5_11_13_/_0.18)_56%,rgb(5_11_13_/_0.32)_100%),radial-gradient(circle_at_18%_18%,rgb(0_229_255_/_0.15),transparent_24%),radial-gradient(circle_at_72%_22%,rgb(0_229_255_/_0.12),transparent_20%),linear-gradient(135deg,rgb(13_23_26_/_0.42),rgb(5_11_13_/_0.52))]" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgb(28_77_80_/_0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgb(28_77_80_/_0.16)_1px,transparent_1px)] [background-size:72px_72px] opacity-8" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_bottom,transparent,rgb(0_229_255_/_0.14),transparent)] [background-size:100%_3px] opacity-6" />

      <div className="pointer-events-none absolute top-6 left-6 h-16 w-16 border-t border-l border-[color:rgb(0_229_255_/_0.8)] md:top-10 md:left-10" />
      <div className="pointer-events-none absolute top-6 right-6 h-16 w-16 border-t border-r border-[color:rgb(0_229_255_/_0.8)] md:top-10 md:right-10" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 border-b border-l border-[color:rgb(0_229_255_/_0.8)] md:bottom-10 md:left-10" />
      <div className="pointer-events-none absolute right-6 bottom-6 h-16 w-16 border-r border-b border-[color:rgb(0_229_255_/_0.8)] md:right-10 md:bottom-10" />
      {/*<div className="pointer-events-none absolute top-26 left-[11%] hidden h-[46vh] w-px bg-[var(--opsidian-primary)]/55 shadow-[0_0_18px_rgb(0_229_255_/_0.55)] lg:block" />*/}
      <div className="pointer-events-none absolute right-[11%] bottom-28 hidden h-[24vh] w-px bg-[var(--opsidian-primary)]/45 shadow-[0_0_18px_rgb(0_229_255_/_0.45)] xl:block" />

      <div className="relative mx-auto flex min-h-svh w-full max-w-[94rem] items-center px-6 py-16 md:px-10 lg:px-14">
        <div className="flex w-full flex-col gap-10 lg:gap-14">
          <header className="flex flex-col gap-5 border-b border-[color:rgb(28_77_80_/_0.46)] pb-6 lg:flex-row lg:items-end lg:justify-between">
            <Image
              src={ieeeSbLogo}
              alt="IEEE UCSC Student Branch logo"
              className="h-auto w-[14rem] opacity-90 sm:w-[16rem]"
              priority
            />

            <div className="flex flex-col gap-3 lg:items-end">
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-[var(--opsidian-primary)]/75 to-transparent" />
                <p className="[font-family:var(--font-mono)] text-[0.68rem] tracking-[0.34em] text-[var(--opsidian-text-muted)] uppercase">
                  First-Ever MLOps Hackathon
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <a
                  href={DELEGATE_BOOKLET}
                  download="ML_Opsidian_Genesis_DelegateBooklet.pdf"
                  className="inline-flex h-9 items-center justify-center rounded-[10px] border border-[var(--opsidian-border)] bg-[color:rgb(13_23_26_/_0.82)] px-4 [font-family:var(--font-mono)] text-[0.68rem] tracking-[0.22em] text-[var(--opsidian-text)] uppercase transition-colors hover:border-[color:rgb(0_229_255_/_0.42)] hover:bg-[color:rgb(19_33_38_/_0.96)] focus-visible:ring-2 focus-visible:ring-[color:rgb(0_229_255_/_0.28)] focus-visible:outline-none"
                >
                  Download Booklet
                </a>
                <a
                  href={REGISTRATION_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-[10px] border border-[color:rgb(0_229_255_/_0.55)] bg-[var(--opsidian-primary)] px-4 [font-family:var(--font-mono)] text-[0.68rem] tracking-[0.22em] text-[var(--opsidian-background)] uppercase shadow-[0_0_20px_rgb(0_229_255_/_0.16)] transition-colors hover:bg-[color:rgb(0_229_255_/_0.88)] focus-visible:ring-2 focus-visible:ring-[color:rgb(0_229_255_/_0.28)] focus-visible:outline-none"
                >
                  Register Now
                </a>
              </div>
            </div>
          </header>

          <section className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-end xl:gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="[font-family:var(--font-mono)] text-[0.78rem] tracking-[0.48em] text-[var(--opsidian-primary)] uppercase">
                  Genesis
                </p>
                <h1 className="[font-family:var(--font-sans)] text-[clamp(3.8rem,10.5vw,7.8rem)] leading-[0.84] font-semibold tracking-[0.1em] text-[var(--opsidian-text)] uppercase">
                  <span className="block">ML</span>
                  <span className="block">Opsidian</span>
                </h1>
              </div>

              <div className="max-w-2xl space-y-4">
                <div className="h-px w-24 bg-gradient-to-r from-[var(--opsidian-primary)]/75 to-transparent" />
                <p className="[font-family:var(--font-mono)] text-[0.76rem] leading-7 tracking-[0.18em] text-[var(--opsidian-text-muted)] uppercase">
                  Exclusively for University of Colombo students, built to
                  bridge academic machine learning and production-grade AI
                  systems.
                </p>
                <p className="text-[1rem] leading-8 text-[var(--opsidian-text-soft)]">
                  Participants build, deploy, monitor, and maintain end-to-end
                  ML pipelines while tackling real MLOps challenges such as data
                  drift, scalability, automation, and continuous deployment.
                </p>

                <div className="flex flex-wrap items-end gap-4 pt-2">
                  <SubmissionCta
                    openDate={SUBMISSION_OPEN}
                    closeDate={SUBMISSION_DEADLINE}
                  />
                </div>

                <p className="[font-family:var(--font-mono)] text-[0.68rem] tracking-[0.2em] text-[var(--opsidian-text-muted)] uppercase">
                  Production-ready AI engineering
                </p>
              </div>
            </div>

            <Countdown
              targetDate={SUBMISSION_DEADLINE}
              className="relative lg:ml-auto lg:w-full lg:max-w-[42rem]"
            />
          </section>
        </div>
      </div>
    </main>
  )
}
