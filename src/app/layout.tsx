import React from 'react';
import type { Metadata } from 'next';
import '@/styles/global.scss';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'JUDIT',
  description: 'Desafio de Front-end para a empresa JUDIT',
  authors: [{name: 'Talles Siqueira Ceolin', url: 'https://github.com/TallesSC'}],
  openGraph: {
    locale: 'pt_BR',
    type: 'website',
    siteName: 'JUDIT',
    images: '/images/logo-judit.svg'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        <Navbar/>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
