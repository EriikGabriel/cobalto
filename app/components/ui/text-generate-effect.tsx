"use client"
import { cn } from "@lib/utils"
import { motion, stagger, useAnimate } from "framer-motion"
import { useEffect } from "react"

export const TextGenerateEffect = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  const [scope, animate] = useAnimate()
  let wordsArray = children.split(" ")
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    )
  }, [animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn("opacity-0", className)}
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn(className)}>
      <div className="mt-4">
        <div className={cn(className)}>{renderWords()}</div>
      </div>
    </div>
  )
}
