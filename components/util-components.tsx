"use client"

import { useRouter } from "next/navigation"

import { Button, ButtonProps } from "@/components/ui/button"

function BackwardButton(props: ButtonProps) {
  const router = useRouter()

  return (
    <Button
      rel="noreferrer"
      onClick={() => {
        router.back()
      }}
      {...props}
    />
  )
}

export { BackwardButton }
