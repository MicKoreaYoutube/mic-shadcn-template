"use client"

import React, { useState } from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { ChevronDown, LogIn } from "lucide-react"

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

interface dropDownProps extends dropDownTreeProps {
  label: string
}

export function DropDown({ label, items }: dropDownProps) {
  const [isLogin, changeLoginState] = useState(true)

  return (
    <>
      {isLogin ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <div className="flex">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>
                    <LoadingComp />
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="m-2 block size-6" />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 font-TheJamsil5Bold">
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
    </>
  )
}

function DropDownTree({ items }: dropDownTreeProps) {
  const router = useRouter()

  return (
    <div className="font-TheJamsil5Bold">
      {items?.length
        ? items.map((group, index) => (
            <React.Fragment key={index}>
              {index != 0 ? <DropdownMenuSeparator /> : null}
              <DropdownMenuGroup>
                {group.map((item, subIndex) => (
                  <React.Fragment key={subIndex}>
                    {item.subDropDown ? (
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger onClick={() => router.push(item.href ?? "#")} disabled={item.disable} className={item.disable ? "cursor-not-allowed" : undefined}>
                          {item.icon ? <item.icon /> : null}
                          {item.title}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropDownTree items={item.subDropDown} />
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    ) : (
                      <DropdownMenuItem onClick={() => router.push(item.href ?? "#")} disabled={item.disable} className={item.disable ? "cursor-not-allowed" : undefined}>
                        {item.icon ? <item.icon /> : null}
                        {item.title}
                        <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenuGroup>
            </React.Fragment>
          ))
        : null}
    </div>
  )
}
