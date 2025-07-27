import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:scale-105 glow",
        destructive:
          "bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg hover:from-red-600 hover:to-pink-700 hover:shadow-xl hover:scale-105",
        outline:
          "border border-white/20 bg-white/5 text-white shadow-lg hover:bg-white/10 hover:border-white/30 hover:shadow-xl hover:scale-105 backdrop-blur-sm",
        secondary:
          "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg hover:from-gray-700 hover:to-gray-800 hover:shadow-xl hover:scale-105",
        ghost:
          "text-white hover:bg-white/10 hover:scale-105 transition-all duration-300",
        link: "text-blue-400 underline-offset-4 hover:underline hover:text-blue-300",
        glass: "glass border border-white/20 text-white hover:border-white/40 hover:scale-105 shadow-lg",
        gradient: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 glow",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-lg px-8 has-[>svg]:px-6 text-base",
        xl: "h-14 rounded-xl px-10 has-[>svg]:px-8 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
