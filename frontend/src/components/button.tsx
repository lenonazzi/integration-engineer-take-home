import type { ButtonHTMLAttributes } from "react"
import { cn } from "../utils/cn"

function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "bg-button py-2 px-3 cursor-pointer border border-input hover:border-primary-500 rounded-lg transition-all flex flex-row justify-center items-center text-secondary-500 font-semibold disabled:bg-button/70",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
