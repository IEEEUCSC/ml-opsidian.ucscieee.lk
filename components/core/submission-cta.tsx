"use client"

import { Button } from "@/components/ui/button"

export function SubmissionCta() {
  return (
    <div className="flex flex-col gap-2">
      <Button
        type="button"
        disabled
        aria-disabled="true"
        className="opsidian-button-motion h-11 rounded-[10px] border border-[color:rgb(0_229_255_/_0.55)] bg-[var(--opsidian-primary)] px-5 [font-family:var(--font-mono)] text-[0.78rem] tracking-[0.2em] text-[var(--opsidian-background)] uppercase shadow-[0_0_26px_rgb(0_229_255_/_0.18)] hover:bg-[color:rgb(0_229_255_/_0.88)] focus-visible:border-[var(--opsidian-primary)] focus-visible:ring-[color:rgb(0_229_255_/_0.28)] disabled:border-[color:rgb(28_77_80_/_0.72)] disabled:bg-[color:rgb(13_23_26_/_0.88)] disabled:text-[var(--opsidian-text-muted)] disabled:opacity-100 disabled:shadow-none"
      >
        Announcing Soon
      </Button>

      <p className="[font-family:var(--font-mono)] text-[0.62rem] tracking-[0.18em] text-[var(--opsidian-text-muted)] uppercase">
        Final round dates will be announced soon
      </p>
    </div>
  )
}
