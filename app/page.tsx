export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict When Clients Will{' '}
          <span className="text-[#58a6ff]">Pay Your Invoices</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing your cash flow. Analyze client payment history, score risk automatically, and know your expected payment date before you even send the invoice.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting — $29/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Payment date prediction','Client risk scoring','Cash flow forecasting','Late payment alerts','Invoice history tracking'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-sm text-[#484f58] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited clients & invoices',
              'AI-powered payment predictions',
              'Client risk score dashboard',
              '90-day cash flow forecast',
              'Late payment email alerts',
              'CSV export',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the payment prediction work?',
              a: 'We analyze your historical invoice data — client payment patterns, invoice amounts, and due dates — using statistical models to estimate when each client is likely to pay.',
            },
            {
              q: 'What is a client risk score?',
              a: 'Each client receives a risk score based on their average days-to-pay, late payment frequency, and dispute history. High-risk clients are flagged so you can act before cash flow suffers.',
            },
            {
              q: 'Can I cancel my subscription?',
              a: 'Yes, cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} Freelance Invoice Predictor. All rights reserved.
      </footer>
    </main>
  )
}
