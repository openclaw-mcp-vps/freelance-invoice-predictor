import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Freelance Invoice Predictor — Know When You\'ll Get Paid',
  description: 'Predict when clients will pay invoices. Analyze payment history, score client risk, and forecast your cash flow. Built for freelancers and consultants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bc9b8bd2-b656-421a-9087-7d99b9b53b05"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
