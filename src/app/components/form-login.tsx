'use client'

import { ControlledTextField } from '@/presentation/components'
import ControlledSelectField from '@/presentation/components/controlled-inputs/controlled-select-field/controlled-select-field'
import { Button } from '@/presentation/components/ui/button'
import { useFormContext } from 'react-hook-form'
import z from 'zod'

type Props = {
	formSchema: any
}

const FormLogin = ({ formSchema }: Props) => {
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}
	const { handleSubmit } = useFormContext()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ControlledTextField
				label='E-mail'
				name='email'
			/>
			<ControlledTextField
				password
				name='password'
				label='Password'
			/>
			<ControlledSelectField label='Selected' name='selected' />
			<br />
			<Button type="submit">Submit</Button>
		</form>
	)
}

export default FormLogin