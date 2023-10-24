import * as React from "react"
import { cn } from "@/presentation/lib/utils"
import { Eye, EyeOff, Star } from "lucide-react"

interface Props {
  error?: boolean
  label: string
  password?: boolean
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, Props { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, required, password, label, ...props }, ref) => {
    const [fieldType, setFieldType] = React.useState<string>(
      password ? 'password' : 'text'
    )

    const onTogglePassword = (value: 'text' | 'password') => setFieldType(value)

    return (
      <div className='group relative h-10 w-full'>
        <label
          className={cn(['absolute left-5 top-1/2 z-0 -translate-y-1/2 bg-[#F5F7F9] px-2 text-sm pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:px-2 group-focus-within:text-primary group-focus-within:bg-white', props.value && 'top-0 text-xs text-[#06B051] bg-white', error && 'text-red-500 bg-red-50 group-focus-within:text-red-500', props.value && error && 'bg-white'])}
          htmlFor={props.id ?? props.name}
        >
          {label}{required && '*'}
        </label>
        {password && (
          <span className="absolute w-auto h-auto right-5 top-2">
            <button type='button' onClick={() => onTogglePassword(
              fieldType === 'text' ? 'password' : 'text'
            )}>
              {fieldType === 'password' ? (
                <Eye />
              ) : (
                <EyeOff />
              )}
            </button>
          </span>
        )}
        <input
          type={fieldType}
          className={cn(
            "z-10 h-full w-full rounded-3xl text-[#616161] bg-[#F5F7F9] focus:border-[#A3A3A3] focus:border focus:bg-[#FDFDFD] focus:outline-none px-6 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus:placeholder:text-sm focus:placeholder:text-[#616161] focus:placeholder:text-muted-foreground disabled:text-[#A3A3A3] disabled:cursor-not-allowed disabled:opacity-50",
            className,
            { ['border-red-500 bg-red-50 border-2 text-base placeholder:text-transparent focus:border-red-500 focus:border-2 focus:outline-none focus:placeholder:text-red-500']: error },
            { ['bg-[##F6FFFA] text-[#616161] border text-base border-[#0B9F59]']: (!error && props.value) }
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
