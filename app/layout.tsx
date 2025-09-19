import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Montserrat, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Font configurations for Vietnamese typography
const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-be-vietnam-pro',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Quá độ lên Chủ Nghĩa Xã Hội tại Việt Nam - MLN131',
  description: 'Hành trình lịch sử vĩ đại từ xã hội phong kiến thực dân đến xã hội xã hội chủ nghĩa dưới sự lãnh đạo của Đảng Cộng sản Việt Nam',
  generator: 'v0.app',
  keywords: ['Chủ nghĩa xã hội', 'Việt Nam', 'MLN131', 'Hồ Chí Minh', 'Đảng Cộng sản'],
  authors: [{ name: 'Nhóm 7 - MLN131' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-body ${montserrat.variable} ${beVietnamPro.variable} ${roboto.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
