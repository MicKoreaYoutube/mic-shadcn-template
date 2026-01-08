"use client"

import React, { useState } from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { useInView } from "react-intersection-observer"

import { ChevronDown, LogIn } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LoadingComp } from "@/components/loading-comp"

import { dropDownItem } from "@/types/dropdown"

interface dropDownTreeProps {
  items?: dropDownItem[][]
}

interface dropDownProps extends dropDownTreeProps, React.HTMLAttributes<HTMLDivElement> {
  label: string
}

export function DropDown({ label, items, ...props }: dropDownProps) {
  const [isLogin, changeLoginState] = useState(true)
  const [DropDownRef, DropDownRefInView] = useInView({
    threshold: 1,
  })

  return (
    <div {...props}>
      {isLogin ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>
                <LoadingComp />
              </AvatarFallback>
            </Avatar>
            <ChevronDown
              className={cn("m-2 block size-6 transition-transform duration-100", DropDownRefInView && "rotate-180")}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-TheJamsil5Bold w-56" ref={DropDownRef}>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropDownTree items={items} />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button asChild variant="ghost" size="icon">
          <Link href="/auth/login">
            <LogIn className="size-5" />
          </Link>
        </Button>
      )}
    </div>
  )
}

function DropDownTree({ items }: dropDownTreeProps) {
  const router = useRouter()

  return (
    <div className="font-TheJamsil5Bold">
      {items?.length &&
        items.map((group, index) => (
          <React.Fragment key={index}>
            {index != 0 && <DropdownMenuSeparator />}
            <DropdownMenuGroup>
              {group.map((item, subIndex) => (
                <React.Fragment key={subIndex}>
                  {item.subDropDown ? (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger
                        onClick={() => router.push(item.href ?? "#")}
                        disabled={item.disable}
                        className={`${item.disable && "cursor-not-allowed"}`}
                      >
                        {item.icon && <item.icon />}
                        {item.title}
                        <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropDownTree items={item.subDropDown} />
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ) : (
                    <DropdownMenuItem
                      onClick={() => router.push(item.href ?? "#")}
                      disabled={item.disable}
                      className={`${item.disable && "cursor-not-allowed"}`}
                    >
                      {item.icon && <item.icon />}
                      {item.title}
                      <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  )}
                </React.Fragment>
              ))}
            </DropdownMenuGroup>
          </React.Fragment>
        ))}
    </div>
  )
}

export { DropDownTree }
