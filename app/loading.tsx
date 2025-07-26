import { LoadingComp } from "@/components/loading-comp"

export default function Loading() {
  return (
    <>
      <div className="flex h-[80vh] items-center justify-center bg-background">
        <section className="container flex flex-col space-y-4">
          <div role="status">
            <LoadingComp size={96} />
            <span className="sr-only">Loading...</span>
          </div>
          <h1 className="text-center font-KBODiaGothic_bold text-6xl font-extrabold">loading...</h1>
        </section>
      </div>
    </>
  )
}
