"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { DropDownTree, dropDownTreeProps } from "@/components/dropdown-comp"
import { LoadingComp } from "@/components/loading-comp"

interface dropDownProps extends dropDownTreeProps {
  label: string
}

function NavDropDown({ label, items, ...props }: dropDownProps) {
  return (
    <div {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center rounded-full p-1 cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <LoadingComp />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="font-TheJamsil5Bold w-56">
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropDownTree items={items} className="font-TheJamsil5Bold" />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export { NavDropDown }
