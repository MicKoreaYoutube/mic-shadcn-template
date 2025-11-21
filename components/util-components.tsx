"use client"

import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import React, { ReactElement, ReactNode } from "react"

import { InView, IntersectionObserverProps, useInView } from "react-intersection-observer"

import { Button, buttonVariants } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

interface IntersectionObserverCompProps extends Omit<IntersectionObserverProps, "children"> {
  originalClass?: string
  addedClass?: string
  children?: ReactNode
}

interface ReverseThemeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

function BackwardButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const router = useRouter()

  return <Button rel="noreferrer" onClick={() => router.back()} {...props} />
}

function IntersectionObserverComp({ originalClass, addedClass, children, ...props }: IntersectionObserverCompProps) {
  return (
    <InView {...props}>
      {({ inView, ref }) => (
        <div ref={ref} className={inView ? addedClass : originalClass}>
          {children}
        </div>
      )}
    </InView>
  )
}

function ReverseTheme({ className, children }: ReverseThemeProps) {
  const { theme } = useTheme()

  return (
    <div className={cn(theme == "dark" ? "light" : "dark", className)}>
      {children}
    </div>
  )
}

export { BackwardButton, IntersectionObserverComp, ReverseTheme }
