import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div style={{ fontWeight: 700, letterSpacing: "4px", color: "#d4af37" }}>
        STRIP
      </div>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/technology">Technology</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </nav>

      <div>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
}