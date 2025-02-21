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
  Hash,
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

import { docsItem } from "@/types/sidebar"

import Fuse, { FuseResult } from "fuse.js"

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

  function fillterDoc(docs: docsItem[]) {
    const result: docsItem[] = []

    docs.forEach((doc) => {
      if (doc.isDoc) {
        result.push(doc)
      }

      if (doc.subDocList) {
        doc.subDocList.forEach((subDoc) => {
          result.push(subDoc)
        })
      }
    })

    return result
  }

  const fillteredDoc = fillterDoc(docsContent)

  const [query, queryChanger] = useState("")

  const fuseOptions = {
    // isCaseSensitive: false,
    // includeScore: false,
    // ignoreDiacritics: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: ["title"],
  }

  const fuse = new Fuse(fillteredDoc, fuseOptions)

  useEffect(() => {
    if (!open) {
      queryChanger("")
    }
  }, [open])

  return (
    <>
      <Button
        className="shadow-xs flex w-52 justify-between bg-transparent"
        variant="outline"
        onClick={() => {
          setOpen(true)
        }}>
        <span>Search anything</span>
        <span className="border-input bg-background rounded-lg border px-2 py-1">⌘K</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle />
        <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
          <Search className="size-4 shrink-0 opacity-50" />
          <Input
            className="outline-hidden placeholder:text-muted-foreground flex h-11 w-full rounded-md border-0 bg-transparent py-3 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search anything..."
            onChange={(e) => {
              queryChanger(e.target.value)
            }}
          />
        </div>
        <ScrollArea className="max-h-[60vh]">
          <CommandList>
            {fuse.search(query)?.length && query ? (
              <CommandGroup heading="Docs">
                {fuse.search(query).map((item, index) => (
                  <Link
                    href={
                      item.item.isDoc
                        ? `/docs/${item.item.id ?? item.item.title}`
                        : `/docs/${docsContent.find((doc) => doc.subDocList?.includes(item.item))?.id ?? docsContent.find((doc) => doc.subDocList?.includes(item.item))?.title}/${item.item.id ?? item.item.title}`
                    }
                    key={index}
                    onClick={() => {
                      setOpen(false)
                    }}>
                    <CommandItem className="cursor-pointer">
                      <File className="mr-2 size-6" />
                      <div className="flex flex-col">
                        <span className="font-TheJamsil5Bold text-md">{item.item.title}</span>
                        <span className="font-SUITE-Regular text-sm">{item.item.description?.slice(0, 20)}...</span>
                      </div>
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ) : (
              <div className="mx-12 my-24">
                <h3 className="font-TheJamsil5Bold text-center text-xl">검색 결과가 없습니다</h3>
              </div>
            )}
          </CommandList>
        </ScrollArea>
      </CommandDialog>
    </>
  )
}
