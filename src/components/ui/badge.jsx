import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-lg border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-300 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg",
        secondary:
          "border-transparent bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg",
        destructive:
          "border-transparent bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg",
        outline:
          "border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm",
        success:
          "border-transparent bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg",
        warning:
          "border-transparent bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg",
        info:
          "border-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg",
        glass:
          "glass border border-white/20 text-white hover:border-white/40 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props} />
  );
}

export { Badge, badgeVariants }
