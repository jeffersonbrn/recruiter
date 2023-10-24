'use client'

import { memo } from 'react'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '../../ui/select'
import { FormField } from '../../ui/form'
import { Control } from 'react-hook-form'
import { ValidationError } from '../../common'

type Props = {
	name: string
	control?: Control<any>
	disabled?: boolean
	label: string
	required?: boolean
	placeholder?: string
}

const ControlledSelectField = ({
	name,
	control,
	label,
	placeholder,
	required
}: Props) => {
	return (
		<FormField
			defaultValue=''
			control={control}
			name={name}
			render={({ field, fieldState: { invalid, error } }) => {
				const errorMessage =
					(error as unknown as ValidationError)?.message ||
					(error as unknown as ValidationError)?.name
				console.log(field.value)
				return (
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<SelectTrigger
							error={invalid}
							label={label}
							className='w-full'
							value={field.value}
							required={required}
						>
							<SelectValue placeholder={placeholder} />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>{label}</SelectLabel>
								<SelectItem value='apple'>Apple</SelectItem>
								<SelectItem value='banana'>Banana</SelectItem>
								<SelectItem value='blueberry'>Blueberry</SelectItem>
								<SelectItem value='grapes'>Grapes</SelectItem>
								<SelectItem value='pineapple'>Pineapple</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				)
			}}
		/>
	)
}

export default memo(ControlledSelectField)