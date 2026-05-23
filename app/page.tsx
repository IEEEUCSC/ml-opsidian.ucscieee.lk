import Image from "next/image"

import { Countdown } from "@/components/core/countdown"
import { SubmissionCta } from "@/components/core/submission-cta"
import ieeeSbLogo from "@/IEEE SB Logo.svg"

const SUBMISSION_OPEN = "2026-06-09T10:00:00+05:30"
const SUBMISSION_DEADLINE = "2026-06-16T10:00:00+05:30"
const DELEGATE_BOOKLET = "/ML_Opsidian_%20Genesis%20_DelegateBooklet.pdf"
const REGISTRATION_LINK = "https://forms.gle/LEAivdsGwpxq4ATK6"
const TIMELINE_EVENTS = [
  {
    date: "17.04.2026",
    title: "Registration for Workshops",
    tag: "Registration",
  },
  {
    date: "11.05.2026",
    title: "Workshop 01 · From Data to Deployed Model",
    tag: "Workshop 01",
  },
  {
    date: "13.05.2026",
    title: "Registrations for the Hackathon",
    tag: "Hackathon",
  },
  {
    date: "18.05.2026",
    title: "Workshop 02 · MLOps in Practice",
    tag: "Workshop 02",
  },
  {
    date: "25.05.2026",
    title: "Workshop 03 · Building with AI Agents",
    tag: "Workshop 03",
  },
  {
    date: "27.05.2026",
    title: "Pre-Hackathon Awareness Session",
    tag: "Awareness",
  },
  {
    date: "30.05.2026",
    title: "Hackathon Initial Round",
    tag: "Round 01",
  },
  {
    date: "09.06.2026",
    title: "Hackathon Final Round",
    tag: "Final Round",
  },
  {
    date: "20.06.2026",
    title: "Award Ceremony",
    tag: "Ceremony",
  },
] as const

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-[var(--opsidian-background)] text-[var(--opsidian-text)]">
      <section className="relative min-h-svh overflow-hidden">
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
                    href={REGISTRATION_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-[10px] border border-[color:rgb(0_229_255_/_0.55)] bg-[var(--opsidian-primary)] px-4 [font-family:var(--font-mono)] text-[0.68rem] tracking-[0.22em] text-[var(--opsidian-background)] uppercase shadow-[0_0_20px_rgb(0_229_255_/_0.16)] transition-colors hover:bg-[color:rgb(0_229_255_/_0.88)] focus-visible:ring-2 focus-visible:ring-[color:rgb(0_229_255_/_0.28)] focus-visible:outline-none"
                  >
                    Register Now
                  </a>
                  <a
                    href={DELEGATE_BOOKLET}
                    download="ML_Opsidian_Genesis_DelegateBooklet.pdf"
                    className="inline-flex h-9 items-center justify-center rounded-[10px] border border-[var(--opsidian-border)] bg-[color:rgb(13_23_26_/_0.82)] px-4 [font-family:var(--font-mono)] text-[0.68rem] tracking-[0.22em] text-[var(--opsidian-text)] uppercase transition-colors hover:border-[color:rgb(0_229_255_/_0.42)] hover:bg-[color:rgb(19_33_38_/_0.96)] focus-visible:ring-2 focus-visible:ring-[color:rgb(0_229_255_/_0.28)] focus-visible:outline-none"
                  >
                    Download Booklet
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
                    ML pipelines while tackling real MLOps challenges such as
                    data drift, scalability, automation, and continuous
                    deployment.
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
      </section>

      <section className="relative border-t border-[color:rgb(28_77_80_/_0.42)] bg-[linear-gradient(180deg,rgb(5_11_13)_0%,rgb(7_14_16)_100%)]">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgb(28_77_80_/_0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(28_77_80_/_0.12)_1px,transparent_1px)] [background-size:72px_72px] opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:rgb(0_229_255_/_0.55)] to-transparent" />
        <div className="pointer-events-none absolute top-16 left-0 h-72 w-72 rounded-full bg-[color:rgb(0_229_255_/_0.08)] blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-12 h-80 w-80 rounded-full bg-[color:rgb(0_229_255_/_0.06)] blur-3xl" />

        <div className="relative mx-auto max-w-[94rem] px-6 py-20 md:px-10 lg:px-14 lg:py-24">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:gap-16">
            <div className="space-y-6 xl:sticky xl:top-16 xl:self-start">
              <p className="[font-family:var(--font-mono)] text-[0.76rem] tracking-[0.32em] text-[var(--opsidian-primary)] uppercase">
                Sequence Locked
              </p>
              <div className="space-y-4">
                <h2 className="[font-family:var(--font-sans)] text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.9] font-semibold tracking-[0.06em] text-[var(--opsidian-text)] uppercase">
                  Event{" "}
                  <span className="text-[var(--opsidian-primary)]">
                    Timeline
                  </span>
                </h2>
                <div className="h-px w-40 bg-gradient-to-r from-[var(--opsidian-primary)]/80 to-transparent" />
              </div>
              <p className="max-w-[30rem] text-[1rem] leading-8 text-[var(--opsidian-text-soft)]">
                A compact operational view of workshops, awareness sessions,
                hackathon rounds, and the closing ceremony, arranged as a single
                signal path beneath the launch surface.
              </p>
            </div>

            <div className="relative space-y-5 pl-8 sm:pl-10">
              <div className="pointer-events-none absolute top-4 bottom-4 left-[0.4rem] w-px bg-gradient-to-b from-[color:rgb(0_229_255_/_0.48)] via-[color:rgb(0_229_255_/_0.26)] to-transparent sm:left-[0.55rem]" />

              {TIMELINE_EVENTS.map((event, index) => (
                <article
                  key={`${event.date}-${event.title}`}
                  className="group relative"
                >
                  <div className="absolute top-5 left-0 inline-flex size-4 rounded-full border border-[color:rgb(0_229_255_/_0.85)] bg-[var(--opsidian-background)] shadow-[0_0_0_4px_rgb(0_229_255_/_0.08),0_0_20px_rgb(0_229_255_/_0.18)]" />

                  <div className="rounded-[12px] border border-[color:rgb(28_77_80_/_0.82)] bg-[color:rgb(13_23_26_/_0.78)] p-5 shadow-[var(--opsidian-shadow-plate)] backdrop-blur-sm transition-colors group-hover:border-[color:rgb(0_229_255_/_0.42)] group-hover:bg-[color:rgb(16_28_32_/_0.88)] sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex rounded-[999px] border border-[color:rgb(0_229_255_/_0.32)] bg-[color:rgb(0_229_255_/_0.08)] px-3 py-1 [font-family:var(--font-mono)] text-[0.62rem] tracking-[0.18em] text-[var(--opsidian-primary)] uppercase">
                            {event.tag}
                          </span>
                          <span className="[font-family:var(--font-mono)] text-[0.62rem] tracking-[0.22em] text-[var(--opsidian-text-muted)] uppercase">
                            Stage {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="[font-family:var(--font-sans)] text-[1.2rem] leading-7 font-medium tracking-[0.03em] text-[var(--opsidian-text)] sm:text-[1.35rem]">
                          {event.title}
                        </h3>
                      </div>

                      <div className="sm:pt-1 sm:text-right">
                        <p className="[font-family:var(--font-mono)] text-[0.95rem] tracking-[0.18em] text-[var(--opsidian-primary)] uppercase sm:text-[1rem]">
                          {event.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
