import "../../public/css/header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      {/* <header className="header"> */}
      <Link href="" className="logo">
        NanoFilm
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <Link href="trend">Trend</Link>
        </li>
        <li>
          <Link href="products">Products</Link>
        </li>
        <li>
          <Link href="gallery">Gallery</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
