import { Button } from "@ui/button"
import { MacbookScroll } from "@ui/macbook-scroll"
import { TextGenerateEffect } from "@ui/text-generate-effect"
import Image from "next/image"
import Link from "next/link"
import { StickyScroll } from "./components/ui/sticky-scroll"

export default function Home() {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ]

  return (
    <main className="max-w-dvw h-dvh flex flex-col items-center gap-20">
      <header className="flex justify-center items-center gap-5 w-full py-5">
        <Image
          src="/logo.svg"
          alt="Cobalto logo"
          width={80}
          height={80}
          className="w-20 h-20"
        />
        <h1 className="text-5xl uppercase text-slate-400 font-pathway">
          Cobalto
        </h1>
      </header>
      <div className="flex flex-col items-center gap-5 text-center w-2/5">
        <h1 className="text-6xl tracking-[-5px] font-bold leading-tight">
          Quickly build the repository
          <span className="bg-gradient-to-r from-primary-900 via-primary-300 to-primary-900 inline-block text-transparent bg-clip-text">
            README on GitHub.
          </span>
        </h1>
        <TextGenerateEffect className="text-center text-lg text-slate-400">
          An Open-Source README generator for Github projects. Customizable.
          Practical. Efficient.
        </TextGenerateEffect>
      </div>
      <div className="flex flex-col gap-3">
        <Button
          className="bg-slate-50 hover:bg-slate-50/80  text-lg font-bold px-20 py-8"
          size="lg"
        >
          Get Started
        </Button>
        <p className="flex gap-1 justify-center">
          or
          <Link href="/docs" className="text-primary-400 hover:underline">
            read the docs.
          </Link>
        </p>
      </div>
      <div className="w-full pb-[200vh]">
        <MacbookScroll
          title={
            <p>
              Learn more about <br />
              <span className="text-slate-400 tracking-wide font-normal text-5xl font-pathway uppercase">
                Cobalto
              </span>
            </p>
          }
          src={`/demo.svg`}
          showGradient={false}
        />
        <StickyScroll content={content} />
      </div>
    </main>
  )
}
