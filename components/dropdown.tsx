"use client"

import { useState } from "react"

import Link from "next/link"

import { TriangleDownIcon } from "@radix-ui/react-icons"

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import { dropDownItem } from "@/types/dropdown"

interface dropDownProps {
  items?: dropDownItem
}

export function NavDropDown({ items }: dropDownProps) {
  const [isLogin, changeLoginState] = useState(true)

  library.add(fas, far, fab)

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
                <TriangleDownIcon className="m-2 block size-6" />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 font-TheJamsil5Bold">
            <DropdownMenuLabel>{items?.label}</DropdownMenuLabel>
            {items?.content.length ? (
              <>
                {items.content.map((item, index) => (
                  <div key={index}>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      {item.length ? (
                        <>
                          {item.map((itemInItem, itemInItemIndex) => (
                            <div key={itemInItemIndex}>
                              {itemInItem.semiDropDown ? (
                                <DropdownMenuSub>
                                  <DropdownMenuSubTrigger>
                                    <div>
                                      {itemInItem.icon ? (
                                        <FontAwesomeIcon icon={itemInItem.icon} className="mr-2 size-4" />
                                      ) : null}
                                      <span>{itemInItem.title}</span>
                                    </div>
                                  </DropdownMenuSubTrigger>
                                  <DropdownMenuPortal>
                                    <DropdownMenuSubContent className="font-TheJamsil5Bold">
                                      {itemInItem.semiDropDown.map((semiDropDownItem, semiDropDownIndex) => (
                                        <div key={semiDropDownIndex}>
                                          <DropdownMenuSeparator
                                            className={semiDropDownIndex == 0 ? "hidden" : ""}
                                          />
                                          {semiDropDownItem.map(
                                            (semiDropDownItemInItem, semiDropDownItemInItemIndex) => (
                                              <DropdownMenuItem key={semiDropDownItemInItemIndex}>
                                                <Link href={`${semiDropDownItemInItem.href ?? null}`}>
                                                  {semiDropDownItemInItem.icon ? (
                                                    <FontAwesomeIcon
                                                      icon={semiDropDownItemInItem.icon}
                                                      className="mr-2 size-4"
                                                    />
                                                  ) : null}
                                                  <span>{semiDropDownItemInItem.title}</span>
                                                  {semiDropDownItemInItem.shortcut ? (
                                                    <DropdownMenuShortcut>
                                                      {semiDropDownItemInItem.shortcut}
                                                    </DropdownMenuShortcut>
                                                  ) : null}
                                                </Link>
                                              </DropdownMenuItem>
                                            )
                                          )}
                                        </div>
                                      ))}
                                    </DropdownMenuSubContent>
                                  </DropdownMenuPortal>
                                </DropdownMenuSub>
                              ) : (
                                <DropdownMenuItem>
                                  <Link href={`${itemInItem.href ?? null}`}>
                                    {itemInItem.icon ? (
                                      <FontAwesomeIcon icon={itemInItem.icon} className="mr-2 size-4" />
                                    ) : null}
                                    <span>{itemInItem.title}</span>
                                    {itemInItem.shortcut ? (
                                      <DropdownMenuShortcut>{itemInItem.shortcut}</DropdownMenuShortcut>
                                    ) : null}
                                  </Link>
                                </DropdownMenuItem>
                              )}
                            </div>
                          ))}
                        </>
                      ) : null}
                    </DropdownMenuGroup>
                  </div>
                ))}
              </>
            ) : null}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button asChild variant="ghost" size="icon">
          <Link href="/auth/login">
            <FontAwesomeIcon icon={["fas", "right-to-bracket"]} className="size-5" />
          </Link>
        </Button>
      )}
    </>
  )
}
