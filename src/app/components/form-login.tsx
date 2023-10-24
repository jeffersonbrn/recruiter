'use client'

import { ControlledTextField } from '@/presentation/components'
import { Button } from '@/presentation/components/ui/button'
import { useFormContext } from 'react-hook-form'
import z from 'zod'

type Props = {
	formSchema: any
}

const FormLogin = ({ formSchema }: Props) => {
	function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
	const { handleSubmit } = useFormContext()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			 <ControlledTextField name='username' />
			 <ControlledTextField name='test' />
			 <br />
			 <Button type="submit">Submit</Button>
		</form>
	)
}

export default FormLogin