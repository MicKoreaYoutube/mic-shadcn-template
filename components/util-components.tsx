"use client"

import { useRouter } from "next/navigation"
import React, { ReactElement, ReactNode } from "react"

import { InView, IntersectionObserverProps, useInView } from "react-intersection-observer"

import { Button, ButtonProps } from "@/components/ui/button"

import { cn } from "@/lib/utils"

function BackwardButton(props: ButtonProps) {
  const router = useRouter()

  return <Button rel="noreferrer" onClick={() => router.back()} {...props} />
}

interface IntersectionObserverCompProps extends Omit<IntersectionObserverProps, "children"> {
  originalClass?: string
  addedClass?: string
  children?: ReactNode
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

export { BackwardButton, IntersectionObserverComp }
