import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Joyel | AI Creator & Web Developer',
  description: 'AI Video Prompt Engineer & Web Developer from Kerala — I create, build, and explore with AI every single day.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
