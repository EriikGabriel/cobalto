"use client"

import { DoubleArrowDownIcon, DoubleArrowUpIcon } from "@radix-ui/react-icons"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import React, { useRef } from "react"

interface StickyScrollProps {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
    icon?: React.ReactNode
  }[]
  contentClassName?: string
}

export const StickyScroll = ({
  content,
  contentClassName,
}: StickyScrollProps) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })

  const { scrollY } = useScroll()

  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  scrollY.on("change", (latest) => {
    console.log(latest)
    const container = ref.current as HTMLDivElement

    if (latest >= 2079) {
      container.style.display = "flex"
    } else {
      container.style.display = "none"
    }
  })

  return (
    <motion.div
      className="h-[40rem] scrollbar-hide overflow-y-auto flex transition-all justify-end absolute bottom-[5.5%] w-full space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="mb-20 flex flex-col justify-center h-[65rem]"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="flex items-center text-2xl font-bold text-slate-100"
              >
                {item.icon} {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div className="sticky h-full flex flex-col justify-center items-center gap-10 top-0 left-[15%]">
        <DoubleArrowUpIcon className="w-10 h-10 text-slate-100" />
        <DoubleArrowDownIcon className="w-10 h-10 text-slate-100" />
      </div>
    </motion.div>
  )
}
