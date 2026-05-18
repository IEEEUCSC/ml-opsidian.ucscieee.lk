"use client"

import { useEffect, useMemo, useState } from "react"

import { Button } from "@/components/ui/button"

type SubmissionCtaProps = {
  openDate: Date | number | string
  closeDate: Date | number | string
}

function getSubmissionPhase(
  now: number,
  openTimestamp: number,
  closeTimestamp: number
) {
  if (now < openTimestamp) {
    return "locked"
  }

  if (now >= closeTimestamp) {
    return "closed"
  }

  return "open"
}

export function SubmissionCta({ openDate, closeDate }: SubmissionCtaProps) {
  const openTimestamp = useMemo(() => new Date(openDate).getTime(), [openDate])
  const closeTimestamp = useMemo(
    () => new Date(closeDate).getTime(),
    [closeDate]
  )
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(Date.now())
    }, 30000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  const phase = getSubmissionPhase(now, openTimestamp, closeTimestamp)

  const buttonLabel =
    phase === "locked"
      ? "Submissions Locked"
      : phase === "closed"
        ? "Submissions Closed"
        : "Submit Project"

  const statusLabel =
    phase === "locked"
      ? "Opens June 9, 10:00 AM"
      : phase === "closed"
        ? "Closed June 16, 10:00 AM"
        : "Open until June 16, 10:00 AM"

  return (
    <div className="flex flex-col gap-2">
      <Button
        type="button"
        disabled={phase !== "open"}
        aria-disabled={phase !== "open"}
        className="h-11 rounded-[10px] border border-[color:rgb(0_229_255_/_0.55)] bg-[var(--opsidian-primary)] px-5 [font-family:var(--font-mono)] text-[0.78rem] tracking-[0.2em] text-[var(--opsidian-background)] uppercase shadow-[0_0_26px_rgb(0_229_255_/_0.18)] hover:bg-[color:rgb(0_229_255_/_0.88)] focus-visible:border-[var(--opsidian-primary)] focus-visible:ring-[color:rgb(0_229_255_/_0.28)] disabled:border-[color:rgb(28_77_80_/_0.72)] disabled:bg-[color:rgb(13_23_26_/_0.88)] disabled:text-[var(--opsidian-text-muted)] disabled:opacity-100 disabled:shadow-none"
      >
        {buttonLabel}
      </Button>

      <p className="[font-family:var(--font-mono)] text-[0.62rem] tracking-[0.18em] text-[var(--opsidian-text-muted)] uppercase">
        {statusLabel}
      </p>
    </div>
  )
}
