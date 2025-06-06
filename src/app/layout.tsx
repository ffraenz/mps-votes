import type { Metadata } from 'next'
import { Darker_Grotesque } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { siteDescription, siteName } from '@/consts'

const darkerGrotesque = Darker_Grotesque({
  variable: '--font-darker-grotesque',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  openGraph: {
    type: 'website',
    title: siteName,
    description: siteDescription,
  },
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
                {siteName}
              </Link>
            </h1>
            <p>Chambre des Députés du Grand-Duché de Luxembourg</p>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className='py-12 border-t-2 border-stroke'>
          <div className='max-w-5xl px-4 md:px-8 mx-auto'>
            <h2 className='pb-4 font-bold text-accent'>
              {siteName}
            </h2>
            <p className='text-gray-500'>
              {siteDescription} Using <a href='https://data.public.lu/en/reuses/explore-parliament-work-through-mps-votes/' className='underline' target='_blank' rel='noopener'>official open data</a> (Oct 2021–Jul 2024) and seat plans from additional sources (chamber website, Wikipedia), it provides a different perspective on parliamentary activity, grouped by party and session. Built by <a href='https://fraenz.frieder.es' className='underline' target='_blank' rel='noopener'>Fränz Friederes</a> as part of the hackathon <a href='https://data.public.lu/en/posts/hackathon-open-data-x-democracy-in-action/' className='underline' target='_blank' rel='noopener noreferrer'>Open Data x Democracy in Action</a>. <a href='https://github.com/ffraenz/mps-votes' className='underline' target='_blank' rel='noopener noreferrer'>Source code</a> licensed under <a href='https://github.com/ffraenz/mps-votes/blob/main/LICENSE.txt' className='underline' target='_blank' rel='noopener noreferrer'>MIT</a>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
