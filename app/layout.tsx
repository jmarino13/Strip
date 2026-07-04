import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'STRIP | Beyond Injection',
  description: 'Medical grade peptide strips with premium sublingual delivery.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><nav className="nav"><div className="nav-inner"><Link href="/" className="brand">STRIP</Link><div className="nav-links"><Link href="/products">Products</Link><Link href="/compliance">Compliance</Link><Link href="/account">Account</Link><Link href="/admin">Admin</Link><Link href="/cart">Cart</Link></div></div></nav>{children}<footer className="footer"><b>STRIP — Beyond Injection.</b><br/>Medical grade peptide strips. All purchases require consent and provider review where applicable.</footer></body></html>
}
