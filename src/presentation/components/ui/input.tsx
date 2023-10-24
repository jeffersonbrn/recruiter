import * as React from "react"

import { cn } from "@/presentation/lib/utils"

interface Props {
  error?: boolean
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, Props {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className='group relative h-10 w-full'>
        <label
          className={cn(['absolute left-5 top-1/2 z-0 -translate-y-1/2 bg-white px-2 text-base pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:px-2 group-focus-within:text-primary group-focus-within:bg-white', props.value && 'top-0 text-xs', error && 'text-red-500 bg-red-50 group-focus-within:text-red-500'])}
          htmlFor={props.id ?? props.name}
        >
          {props.placeholder}
        </label>
        <input
          type={type}
          className={cn(
            "z-10 h-full w-full rounded-3xl border border-input bg-[#FDFDFD] focus:border-[#08B051] focus:border-2 focus:bg-[#FDFDFD] focus:outline-none px-7 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus:placeholder:text-muted-foreground disabled:text-[#A3A3A3] disabled:cursor-not-allowed disabled:opacity-50",
            className,
            {['border-red-500 bg-red-50 border-2 focus:border-red-500 focus:border-2 focus:outline-none focus:placeholder:text-red-500']: error },
            {['bg-yellow-200']: (!error && props.value) }
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
