import { CodeIcon, GitHubLogoIcon, RocketIcon } from "@radix-ui/react-icons"
import { Button } from "@ui/button"
import { MacbookScroll } from "@ui/macbook-scroll"
import { TextGenerateEffect } from "@ui/text-generate-effect"
import Image from "next/image"
import Link from "next/link"
import { StickyScroll } from "./components/ui/sticky-scroll"

export default function Home() {
  const content = [
    {
      title: "Open-source project",
      description:
        "The project is completely open-source, which means you can contribute! To do this, you can report bugs, suggest improvements, submit code or publicize the project.",
      icon: <CodeIcon className="mr-3 h-6 w-6 text-primary-500" />,
    },
    {
      title: "Sync with Github",
      description:
        "This project connects to your Github account, allowing you to access and publish your README directly to your repositories",
      icon: <GitHubLogoIcon className="mr-3 h-6 w-6 text-primary-500" />,
    },
    {
      title: "AI integration",
      description:
        "This project has integration with AI, which helps with possible changes to the README and suggests sessions related to the active repository.",
      icon: <RocketIcon className="mr-3 h-6 w-6 text-primary-500" />,
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
      <div className="relative w-full pb-[80vh] mb-20">
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
      <footer className="flex min-h-64 items-center gap-40 w-full p-5 px-20 bg-[#0A1023]">
        <Image src="/logo.svg" alt="Cobalto logo" width={80} height={80} />
        <section className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Community</h1>
          <div className="flex flex-col gap-2">
            <Link href="#" className="text-primary-50 hover:underline">
              Github
            </Link>
            <Link href="#" className="text-primary-50 hover:underline">
              Discord
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Getting Started</h1>
          <div className="flex flex-col gap-2">
            <Link href="#" className="text-primary-50 hover:underline">
              Usage
            </Link>
            <Link href="#" className="text-primary-50 hover:underline">
              Cobalto&apos;s examples
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Built with 🩵 by</h1>
          <div className="flex flex-col gap-2">
            <Link href="#" className="text-primary-50 hover:underline">
              @EriikGabriel
            </Link>
            <Link href="#" className="text-primary-50 hover:underline">
              @matpitas
            </Link>
          </div>
        </section>
      </footer>
    </main>
  )
}
