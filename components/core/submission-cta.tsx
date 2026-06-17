"use client"

export function SubmissionCta() {
  return (
    <div className="flex flex-col gap-2">
      <a
        href="https://forms.gle/u75CUf5ZjQMsqngv8"
        target="_blank"
        rel="noreferrer"
        className="opsidian-button-motion inline-flex h-11 items-center justify-center rounded-[10px] border border-[color:rgb(0_229_255_/_0.55)] bg-[var(--opsidian-primary)] px-5 [font-family:var(--font-mono)] text-[0.78rem] tracking-[0.2em] text-[var(--opsidian-background)] uppercase shadow-[0_0_26px_rgb(0_229_255_/_0.18)] hover:bg-[color:rgb(0_229_255_/_0.88)] focus-visible:border-[var(--opsidian-primary)] focus-visible:ring-[color:rgb(0_229_255_/_0.28)]"
      >
        Submit Project
      </a>

      <p className="[font-family:var(--font-mono)] text-[0.62rem] tracking-[0.18em] text-[var(--opsidian-text-muted)] uppercase">
        Final round submissions are now open
      </p>
    </div>
  )
}
