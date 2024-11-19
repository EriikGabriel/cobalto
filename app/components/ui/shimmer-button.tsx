import { cn } from "@/app/lib/utils"

interface ShimmerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export function ShimmerButton({ children, className }: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative grid overflow-hidden border-2 rounded-xl px-4 py-2 shadow-[0_1000px_0_0_hsl(215%_20%_65%)_inset] transition-colors duration-200",
        className
      )}
    >
      <span>
        <span className="spark mask-gradient  absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-xl [mask:linear-gradient(#94a3b8,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#94a3b8_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-[2px] rounded-full bg-slate-950 transition-colors duration-200 group-hover:bg-slate-900" />
      <span className="z-10 text-sm text-slate-400">{children}</span>
    </button>
    // <button
    //   className={cn(
    //     "relative inline-flex overflow-hidden rounded-xl p-px",
    //     className
    //   )}
    // >
    //   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bac5d4_0%,#94a3b8_50%,#6f737a)]" />
    //   <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 text-md text-slate-400 backdrop-blur-3xl">
    //     {children}
    //   </span>
    // </button>
  )
}
