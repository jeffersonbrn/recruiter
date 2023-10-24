'use client'

import { useEffect } from 'react'
import {
  useForm as useFormRHF,
  FieldValues,
  DefaultValues
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

export type UseFormParams<T> = {
  validationSchema?: any
  mode?: 'all' | 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched'
  defaultValues?: DefaultValues<T>
}

export const useForm = <T extends FieldValues>({
  defaultValues,
  mode,
  validationSchema
}: UseFormParams<T> = {}) => {
  const resolver = zodResolver(validationSchema)
  const methods = useFormRHF<z.infer<typeof validationSchema>>({
    resolver,
    mode
  })

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues)
    }
  }, [defaultValues])

  return methods
}
