"use client"

import { z } from "zod"

import Link from "next/link"

import { useState, useEffect, useRef, RefObject } from "react"

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Calculator,
  Calendar,
  Smile,
  Menu,
  Search,
  File,
  Hash
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { docsContent } from "@/config/site"

import fuseAPI, { FuseResult } from "fuse.js"

export function SearchDialog() {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])



  return (
    <>
      <Button className="w-52 bg-transparent shadow-xs flex justify-between"
        variant="outline"
        onClick={() => {
          setOpen(true)
        }}>
        <span>Search anything</span><span className="border border-input rounded-lg bg-background px-2 py-1">⌘K</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle />
        <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
          <Search className="h-4 w-4 shrink-0 opacity-50" />
          <Input
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search anything..."
          // onChange={(e) => {
          //   queryChanger(e.target.value)
          // }}
          />
        </div>
        <ScrollArea>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Docs">
              <div className="flex flex-col gap-2">
                {docsContent.map((item, index) => (
                  <div key={index}>
                    <Link href={`${item.isDoc ? `/docs/${item.id ?? item.title}` : "#"}`} onClick={() => {
                      if (item.isDoc) {
                        setOpen(false)
                      }
                    }}>
                      <CommandItem className="cursor-pointer">
                        {item.isDoc ? <File className="mr-2 h-4 w-4" /> : <Hash className="mr-2 h-4 w-4" />}
                        <span>{item.title}</span>
                      </CommandItem>
                    </Link>
                    <div className="ml-3">
                      {item.subDocList?.length ? (
                        item.subDocList.map((subDocItem, subDocIndex) => (
                          <Link href={`/docs/${item.id ?? item.title}/${subDocItem.id ?? subDocItem.title}`} key={subDocIndex} onClick={() => {
                            setOpen(false)
                          }}>
                            <CommandItem className="cursor-pointer">
                              <File className="mr-2 h-4 w-4" />
                              <span>{subDocItem.title}</span>
                            </CommandItem>
                          </Link>
                        ))
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </CommandGroup>
          </CommandList>
        </ScrollArea>
      </CommandDialog>
    </>
  )
}

export function tlqkftlqkfwja() {
  return "tlqkf"
}