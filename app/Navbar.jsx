import Link from "next/link";

function Navbar() {
  return (
    <nav>
      Navbar
      <h1></h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
