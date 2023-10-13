import './globals.css'
import {Mulish, Space_Mono} from 'next/font/google'

export const titleFont = Mulish({
    weight: '400',
    subsets: ['latin'],
    variable: '--title-font',
});

export const textFont = Space_Mono ({
    weight: '400',
    subsets: ['latin'],
    variable: '--text-font',
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${textFont.variable} ${titleFont.variable}`}>{children}</body>
        </html>
    )
}
