import Link from "next/link";
import "../../public/css/nav.css";

const Navbar = () => {
  return (
    <nav id="primary_nav_wrap">
      <ul>
        <li className="current-menu-item">
          <Link className="" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="#">Menu 1</Link>
          <ul>
            <li>
              <Link href="#">Sub Menu 1</Link>
            </li>
            <li>
              <Link href="#">Sub Menu 2</Link>
            </li>
            <li>
              <Link href="#">Sub Menu 3</Link>
            </li>
            <li>
              <Link href="#">Sub Menu 4</Link>
              <ul>
                <li>
                  <Link href="#">Deep Menu 1</Link>
                  <ul>
                    <li>
                      <a href="#">Sub Deep 1</a>
                    </li>
                    <li>
                      <a href="#">Sub Deep 2</a>
                    </li>
                    <li>
                      <a href="#">Sub Deep 3</a>
                    </li>
                    <li>
                      <a href="#">Sub Deep 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Deep Menu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Sub Menu 5</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Menu 2</a>
          <ul>
            <li>
              <a href="#">Sub Menu 1</a>
            </li>
            <li>
              <a href="#">Sub Menu 2</a>
            </li>
            <li>
              <a href="#">Sub Menu 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Menu 5</a>
        </li>
        <li>
          <a href="#">Menu 6</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
