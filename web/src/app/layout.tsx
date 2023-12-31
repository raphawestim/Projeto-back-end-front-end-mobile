/* eslint-disable prettier/prettier */
import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: "700", variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Capsula do tempo da NLW',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        {children}
        </body>
    </html>
  )
}
