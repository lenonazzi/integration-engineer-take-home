import type { InputHTMLAttributes } from "react";

function Input({ children, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="bg-transparent py-2 px-3 border border-input hover:border-primary-500 rounded-lg transition-all outline-none"
      {...props}
    >
      {children}
    </input>
  )
}

export default Input
