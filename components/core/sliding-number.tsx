"use client"

import { useMemo } from "react"

import { cn } from "@/lib/utils"

type SlidingNumberProps = {
  value: number
  padStart?: boolean
  digits?: number
  className?: string
  digitClassName?: string
}

function SlidingDigit({
  digit,
  className,
}: {
  digit: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "relative inline-flex h-[1em] w-[0.68em] overflow-hidden",
        className
      )}
    >
      <span
        key={digit}
        aria-hidden="true"
        className="inline-flex h-full w-full animate-in items-center justify-center duration-300 ease-out fade-in slide-in-from-bottom-3 motion-reduce:animate-none"
      >
        {digit}
      </span>
    </span>
  )
}

export function SlidingNumber({
  value,
  padStart = false,
  digits,
  className,
  digitClassName,
}: SlidingNumberProps) {
  const formattedValue = useMemo(() => {
    const normalizedValue = Math.max(0, Math.floor(value))

    if (!padStart && !digits) {
      return String(normalizedValue)
    }

    const length = digits ?? 2
    return String(normalizedValue).padStart(length, "0")
  }, [digits, padStart, value])

  return (
    <span
      className={cn(
        "inline-flex items-center gap-[0.04em] tabular-nums",
        className
      )}
    >
      {formattedValue.split("").map((digit, index) => (
        <SlidingDigit
          key={`${index}-${digit}`}
          digit={digit}
          className={digitClassName}
        />
      ))}
    </span>
  )
}
