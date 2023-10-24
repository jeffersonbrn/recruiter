'use client'

import { memo } from 'react'
import { FieldValues, FormProvider as FormProviderRHF } from 'react-hook-form'
import { UseFormParams, useForm } from '../hooks/use-form'

type Props<T> = UseFormParams<T> & {
  children: React.ReactNode
}

const FormProvider = <T extends FieldValues>({
  defaultValues,
  mode,
  validationSchema,
  children
}: Props<T>) => {
  const methods = useForm({ defaultValues, mode, validationSchema })
  return (
    <FormProviderRHF {...methods}>
        {children}
    </FormProviderRHF>
  )
}

export default memo(FormProvider)
