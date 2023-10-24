"use client"

import { Button } from '@/presentation/components/ui/button'
import { Building2, User } from 'lucide-react'
import * as z from 'zod'
import FormProvider from '@/presentation/providers/form-provider'
import FormLogin from './components/form-login'

export default function Home() {
  const formSchema = z.object({
    email: z.string().email({
      message: 'email must be a valid email address'
    }),
    password: z.string().min(8, {
      message: 'the password must be at least 8 characters'
    }),
    country: z.string({
      description: 'The country must be selected'
    })
  })

  return (
    <main className='relative isolate  min-h-screen pt-14 bg-background'>
      <div className='flex flex-col items-center p-12'>
        <div className='grid gap-4 w-full max-w-[640px] mt-20'>
          <div className='flex lg:flex-1 justify-center'>
          </div>
          <div className='flex items-center flex-col text-white gap-3'>
            <h1 className='text-black text-3xl font-semibold'>Discovery Dealer</h1>
            <h3 className='text-black text-sm font-sm'>Especialista em Recrutamento de vendas para concessionarias</h3>
          </div>
          <div className='w-full bg-background rounded-md px-3 py-4 grid gap-10'>
            <div className='grid gap-4'>
              {/* <Button className='w-full h-20 justify-start'>
                <Building2 className='mr-2 h-8 w-8' /> Quero encontrar o perfil ideal
              </Button>
              <Button variant='secondary' className='w-full h-20 justify-start'>
                <User className='mr-2 h-8 w-8' /> Sou canditato
              </Button> */}
              
              <div className='grid mb'>
                {/* <div className='grid grid-cols-1'>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <ControlledTextField name='username' />
                      <Button type='submit'>Submit</Button>
                    </form>
                  </Form>
                </div> */}
                <div className='grid grid-cols-1'>
                  <FormProvider
                    validationSchema={formSchema}
                    mode='onSubmit'
                  >
                    <FormLogin {...{ formSchema }} />
                  </FormProvider>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <span>@ 2023 @discoverybrsales</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
