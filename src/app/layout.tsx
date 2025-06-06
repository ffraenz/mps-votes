import type { Metadata } from 'next'
import { Darker_Grotesque } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const darkerGrotesque = Darker_Grotesque({
  variable: '--font-darker-grotesque',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Votes des députés',
  description: 'Votes des députés de la Chambre des Députés du Grand-Duché de Luxembourg',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${darkerGrotesque.variable} antialiased`}>
        <header className='py-8 bg-accent text-white'>
          <div className='max-w-5xl px-4 md:px-8 mx-auto'>
            <h1 className='pb-2 text-3xl font-bold'>
              <Link href='/'>
                Votes des députés
              </Link>
            </h1>
            <p>Chambre des Députés du Grand-Duché de Luxembourg</p>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className='py-8 border-t-2 border-stroke text-accent'>
          <div className='max-w-5xl px-4 md:px-8 mx-auto'>
            <h2 className='font-bold'>
              Votes des députés
            </h2>
            <p>
              Open Data x Democracy in action Hackathon<br />
              6 juin 2025
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
