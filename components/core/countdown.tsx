"use client"

import { useEffect, useMemo, useState } from "react"

import { SlidingNumber } from "@/components/core/sliding-number"
import { cn } from "@/lib/utils"

type CountdownProps = {
  targetDate: Date | number | string
  className?: string
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

function getTimeRemaining(targetTimestamp: number) {
  if (Number.isNaN(targetTimestamp)) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  const total = Math.max(0, targetTimestamp - Date.now())

  return {
    total,
    days: Math.floor(total / DAY),
    hours: Math.floor((total % DAY) / HOUR),
    minutes: Math.floor((total % HOUR) / MINUTE),
    seconds: Math.floor((total % MINUTE) / SECOND),
  }
}

export function Countdown({ targetDate, className }: CountdownProps) {
  const targetTimestamp = useMemo(
    () => new Date(targetDate).getTime(),
    [targetDate]
  )
  const [timeRemaining, setTimeRemaining] = useState(() =>
    getTimeRemaining(targetTimestamp)
  )

  useEffect(() => {
    const updateCountdown = () => {
      setTimeRemaining(getTimeRemaining(targetTimestamp))
    }

    updateCountdown()

    const interval = window.setInterval(updateCountdown, 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [targetTimestamp])

  const segments = [
    {
      label: "Days",
      value: timeRemaining.days,
      digits: Math.max(2, String(timeRemaining.days).length),
    },
    {
      label: "Hours",
      value: timeRemaining.hours,
      digits: 2,
    },
    {
      label: "Minutes",
      value: timeRemaining.minutes,
      digits: 2,
    },
    {
      label: "Seconds",
      value: timeRemaining.seconds,
      digits: 2,
    },
  ]

  const spokenTime = `${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes, and ${timeRemaining.seconds} seconds remaining`

  return (
    <section
      aria-label={`Hackathon countdown. ${spokenTime}.`}
      aria-live="polite"
      className={cn(
        "relative overflow-hidden rounded-[10px] border border-[color:rgb(28_77_80_/_0.8)] bg-[var(--opsidian-surface-strong-glass)] p-4 shadow-[var(--opsidian-shadow-plate)] backdrop-blur-sm sm:p-6",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[color:rgb(86_242_244_/_0.75)] to-transparent" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgb(28_77_80_/_0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgb(28_77_80_/_0.15)_1px,transparent_1px)] [background-size:36px_36px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_bottom,transparent,rgb(86_242_244_/_0.16),transparent)] [background-size:100%_3px] opacity-25" />
      <div className="pointer-events-none absolute top-12 right-0 hidden h-24 w-px bg-[var(--opsidian-primary)]/45 shadow-[0_0_18px_rgb(86_242_244_/_0.35)] lg:block" />

      <div className="relative">
        <div className="mb-5 flex items-center gap-3 [font-family:var(--font-mono)] text-[0.72rem] tracking-[0.28em] text-[var(--opsidian-text-muted)] uppercase">
          <span className="inline-flex size-2 rounded-full bg-[var(--opsidian-primary)] shadow-[0_0_18px_rgb(86_242_244_/_0.8)]" />
          {timeRemaining.total === 0
            ? "Launch window open"
            : "Countdown locked"}
        </div>

        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
          {segments.map((segment) => (
            <div
              key={segment.label}
              className="relative overflow-hidden rounded-[8px] border border-[var(--opsidian-border)] bg-[color:rgb(19_33_38_/_0.9)] px-4 py-4"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:rgb(86_242_244_/_0.45)] to-transparent" />
              <div className="mb-3 [font-family:var(--font-mono)] text-[0.7rem] tracking-[0.22em] text-[var(--opsidian-text-muted)] uppercase">
                {segment.label}
              </div>
              <SlidingNumber
                value={segment.value}
                padStart
                digits={segment.digits}
                className="text-[var(--opsidian-text)]"
                digitClassName="[font-family:var(--font-sans)] text-[clamp(2.8rem,7vw,4.35rem)] font-semibold leading-none tracking-[0.06em]"
              />
            </div>
          ))}
        </div>

        <p className="mt-5 max-w-[36ch] text-[0.95rem] leading-8 text-[var(--opsidian-text-soft)]">
          {timeRemaining.total === 0
            ? "The countdown has reached zero. Transition the page state to the live event experience."
            : "Track the approach of ML Opsidian: Genesis as participants prepare to build, deploy, and scale production-grade AI systems."}
        </p>
      </div>
    </section>
  )
}
