import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/">STRIP</Link>
      </div>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/technology">Technology</Link>
        <Link href="/products">Products</Link>
        <Link href="/providers">Providers</Link>
        <Link href="/about">About</Link>
      </nav>

      <div className="actions">
        <Link href="/login">Login</Link>
        <Link href="/cart" className="shopButton">
          Shop
        </Link>
      </div>
    </header>
  );
}