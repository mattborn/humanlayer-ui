import { ClerkProvider, UserButton } from '@clerk/nextjs'

import type { Metadata } from 'next'

import { DM_Sans } from 'next/font/google'
import './globals.css'

import React from 'react'
import Navigation from '@/components/nav'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HumanLayer',
  description: `HumanLayer helps you quickly add human approval to your AI Agent tool calls.`,
  robots: {
    follow: false,
    index: false,
    nocache: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={dmSans.className}>
          <Navigation />
          <div id="page">
            <header>
              <svg id="hmark" viewBox="0 0 40 38" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.3208 20.468C36.3208 20.468 36.1069 22.1365 35.3796 22.1365C35.3796 21.7087 34.2672 21.1525 31.8715 20.6392C29.3473 26.4147 27.1654 32.3614 27.1654 35.955C26.3526 36.7679 23.529 34.5005 23.529 32.0619C23.529 29.5806 25.2403 24.9173 27.4649 19.9974C25.0691 19.7835 22.0744 19.6124 18.4807 19.5696C15.2721 26.2436 12.4057 33.3026 12.4057 37.1957C11.5929 38.0086 8.81204 35.7411 8.81204 33.3026C8.81204 30.6929 10.9511 25.3879 13.6892 19.7835C5.17558 20.6392 4.61941 24.19 4.61941 24.19C4.61941 24.19 1.15409 16.4465 15.6143 15.8904C17.6679 11.9972 19.7642 8.18964 21.4327 5.36603C16.5555 8.10407 9.79602 11.655 5.64618 11.655C-0.172152 11.655 -0.300497 6.17889 0.170103 3.99702C0.212885 3.74032 0.55514 3.65476 0.726267 3.91145C1.41078 4.85265 3.07927 6.56393 6.33069 6.56393C14.7587 6.56393 23.529 0.660034 24.5558 0.660034C25.6681 0.660034 26.3526 1.38732 26.7376 2.07183C26.9943 2.37131 27.1227 2.67078 27.1654 3.05582V3.0986C27.1654 3.26973 23.8285 9.00249 20.3204 15.8904C23.914 16.0187 26.7376 16.4465 28.9195 16.9171C32.5987 9.25918 36.9197 1.90071 37.3903 1.90071C37.3903 1.90071 40 2.75634 40 4.29649C40 4.46762 36.3635 10.8849 32.9838 18.2006C35.6363 19.3557 36.3208 20.468 36.3208 20.468Z" />
              </svg>
              <UserButton />
            </header>
            <main>{children}</main>
            <footer></footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
