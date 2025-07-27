import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "flex h-10 w-full min-w-0 rounded-lg border bg-white/5 border-white/20 px-4 py-2 text-base shadow-lg transition-all duration-300",
        "outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "text-white placeholder:text-gray-400",
        "focus-visible:border-blue-400 focus-visible:ring-blue-400/50 focus-visible:ring-[3px] focus-visible:bg-white/10",
        "hover:border-white/30 hover:bg-white/10",
        "aria-invalid:ring-red-400/20 dark:aria-invalid:ring-red-400/40 aria-invalid:border-red-400",
        "backdrop-blur-sm",
        className
      )}
      {...props} />
  );
}

export { Input }
