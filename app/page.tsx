import { AnimatedShinyText } from "@ui/animated-shiny-text";
import { BentoGrid, BentoGridItem } from "@ui/bento-grid";
import BlurFade from "@ui/blur-fade";
import { BorderBeam } from "@ui/border-beam";
import { Particles } from "@ui/particles";
import { RainbowButton } from "@ui/rainbow-button";
import { ShimmerButton } from "@ui/shimmer-button";

import { cn } from "@lib/utils";

import {
  ArrowRightIcon,
  BoxIcon,
  CodeIcon,
  Github,
  RocketIcon,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Open-source project",
    description:
      "The project is completely open-source, which means you can contribute! To do this, you can report bugs, suggest improvements, submit code or publicize the project.",
    className: "md:col-span-2",
    icon: <CodeIcon className="h-4 w-4 text-primary-400" />,
  },
  {
    title: "Sync with Github",
    description:
      "This project lets you access and publish your README to GitHub repositories.",
    className: "md:col-span-1",
    icon: <Github className="h-4 w-4 text-primary-400" />,
  },
  {
    title: "AI integration",
    description:
      "This project uses AI to suggest README updates and sections for your repository.",
    className: "md:col-span-1",
    icon: <RocketIcon className="h-4 w-4 text-primary-400" />,
  },
  {
    title: "Modularization",
    description:
      "This project lets you build your README with modular sections and components, making it easy to organize and update your documentation.",
    className: "md:col-span-2",
    icon: <BoxIcon className="h-4 w-4 text-primary-400" />,
  },
];

export default function Home() {
  return (
    <div>
      <main className="max-w-dvw mb-32 flex min-h-dvh flex-col items-center gap-2 px-60">
        <header className="z-10 mb-10 flex min-h-20 w-full animate-fade-in items-center justify-center gap-3 opacity-0">
          <div className="flex w-full items-center justify-between">
            <h1 className="font-pathway text-4xl uppercase text-slate-400">
              Cobalto
            </h1>
            <Image
              src="/logo-white.svg"
              alt="Cobalto logo"
              width={45}
              height={45}
              className="h-fit"
            />
            <Link href="https://github.com/EriikGabriel/cobalto">
              <ShimmerButton className="h-10 rounded-full font-bold">
                View Github
              </ShimmerButton>
            </Link>
          </div>
        </header>
        <section className="flex w-full flex-col items-center gap-5 text-center font-roboto">
          <button className="backdrop-filter-[12px] group inline-flex h-7 -translate-y-4 animate-fade-in items-center justify-between gap-1 rounded-full border border-slate-400/5 bg-slate-400/10 px-3 text-xs text-black opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-slate-500/20">
            <AnimatedShinyText className="inline-flex items-center justify-center">
              <span>✨ Introducing Cobalto</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </button>
          <h1 className="animate-fade-in text-7xl font-bold leading-tight opacity-0">
            Quickly build the repository
            <br />
            <span className="inline-block bg-gradient-to-r from-primary-800 via-primary-300 to-primary-800 bg-clip-text text-transparent">
              README on GitHub.
            </span>
          </h1>

          <p className="-translate-y-4 animate-fade-in text-xl font-medium text-slate-400 opacity-0 [--animation-delay:400ms]">
            An Open-Source README generator for Github projects.
            <br />
            Customizable. Practical. Efficient.
          </p>

          <div className="flex animate-fade-in flex-col gap-3 pt-10 opacity-0 ease-in-out [--animation-delay:600ms]">
            <Link href="/auth">
              <RainbowButton className="px-10 py-5 text-lg">
                Get Started
              </RainbowButton>
            </Link>
            <p className="flex justify-center gap-1">
              or
              <Link href="/docs" className="text-primary-400 hover:underline">
                read the docs.
              </Link>
            </p>
          </div>

          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            refresh
          />
        </section>

        <div className="relative mt-10 animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
          <div className="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:animate-image-glow before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)]">
            <BorderBeam
              size={200}
              duration={12}
              delay={0}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <Image
              src="/demo.svg"
              width={1200}
              height={600}
              alt="HeroDarkImage"
              className="relative block size-full object-contain"
            />
          </div>
        </div>

        <BlurFade delay={0.25} inView>
          <BentoGrid className="max-w -8xl mx-auto -translate-y-20 md:auto-rows-[10rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                className={cn(item.className, "bg-slate-900")}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </BlurFade>
      </main>
      <footer className="flex min-h-64 w-full items-center gap-40 bg-[#0A1023] p-5 px-20">
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
    </div>
  );
}
