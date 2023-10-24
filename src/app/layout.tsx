import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import '../presentation/styles/globals.css'
import { Avatar, AvatarFallback, AvatarImage } from '@/presentation/components/ui/avatar'
import { cn } from '@/presentation/lib/utils'
import Image from 'next/image'

export const inter = Inter({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['Helvetica', 'sans-serif'],
  subsets: ['latin'],
});

const satoshi = localFont({
  variable: '--font-satoshi',
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Regular.otf',
      style: 'normal',
      weight: '400'
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Medium.otf',
      style: 'normal',
      weight: '500'
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Bold.otf',
      style: 'normal',
      weight: '600'
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Black.otf',
      style: 'normal',
      weight: '700'
    }
  ]
})

export const metadata: Metadata = {
  title: 'Recruiter',
  description: 'System of the Recruiter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body className={cn(
          "min-h-screen bg-background antialiased font-satoshi",
        )}>
      <header className="fixed inset-x-0 top-0 z-50 bg-secondary-foreground h-20">
        <nav className="flex items-center justify-between h-full px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Image
              src={'/imgs/logo.png'}
              width={50}
              height={50}
              alt='logo'
            />
          </div>

          <div className="justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </a>
          </div>
        </nav>
      </header>
        {children}
      </body>
    </html>
  )
}
