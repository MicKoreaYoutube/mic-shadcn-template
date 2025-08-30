import { Metadata } from "next"

import { LoadingComp } from "@/components/loading-comp"

export const metadata: Metadata = {
  title: {
    absolute: "Loading..."
  },
}

export default function Loading() {
  return (
    <>
      <div className="container mx-auto h-[80vh] content-center">
        <div className="flex flex-col gap-2 text-center">
          <div role="status">
            <LoadingComp size={96} />
            <span className="sr-only">Loading...</span>
          </div>
          <h1 className="font-KBODiaGothic_bold text-6xl font-extrabold">loading...</h1>
        </div>
      </div>
    </>
  )
}