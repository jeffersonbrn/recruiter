'use client'

import {
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from '@/presentation/components/ui/form'
import { Input } from '@/presentation/components/ui/input'
import { Control, useForm } from 'react-hook-form'
import { ValidationErrorType } from '../../common'
import { memo, useState } from 'react'

type Props = {
	name: string
	control?: Control<any>
	disabled?: boolean
	label: string
	required?: boolean
	password?: boolean
	placeholder?: string
}

const ControlledTextField = ({
	label,
	name,
	required,
	password = false,
	control,
	disabled,
	placeholder
}: Props) => {
	return (
		<FormField
			defaultValue=''
			control={control}
			name={name}
			render={({ field, fieldState: { invalid, error } }) => {
				const errorState = error as unknown as ValidationErrorType
				const errorMessage = errorState?.name ?? errorState?.message ?? ''
				const errorOption = errorState?.option

				return (
					<FormItem className='mb-2'>
						<FormControl>
							<Input
								password={password}
								required={required}
								label={label}
								error={invalid}
								disabled={disabled}
								placeholder={placeholder}
								{...field}
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

export default memo(ControlledTextField)