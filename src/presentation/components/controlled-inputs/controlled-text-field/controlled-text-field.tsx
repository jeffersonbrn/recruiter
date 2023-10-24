'use client'

import { 
	FormControl, 
	FormField, 
	FormItem, 
	FormLabel, 
	FormMessage
} from '@/presentation/components/ui/form'
import { Input } from '@/presentation/components/ui/input'
import { Control, useForm } from 'react-hook-form'
import { ValidationErrorType } from '../../common'

type Props = {
	name: string
	control?: Control<any>
	disabled?: boolean
}

const ControlledTextField = ({ name, control, disabled }: Props) => {
	return (
		<FormField
			defaultValue=''
			control={control}
			name={name}
			render={({ field, fieldState: { invalid, error } }) => {
				const errorState = error as unknown as ValidationErrorType
        const errorMessage = errorState?.name ?? errorState?.message ?? ''
        const errorOption = errorState?.option
        const value = field.value ?? ''
        const valueCompleted = value.length > 0 && !invalid

				return (
						<FormItem>
							<FormLabel>User Name</FormLabel>
							<FormControl>
								<Input 
									error={invalid} 
									disabled={disabled} 
									placeholder='shadcn' {...field}
								/>
							</FormControl>
							<FormMessage>{errorMessage}</FormMessage>
						</FormItem>
					)
				}
			}
				
		/>
	)
}

export default ControlledTextField