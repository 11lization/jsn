import { footerText } from "@/constants";
import "../../public/css/footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <Link href="#">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link href="#">
            <i className="fa fa-instagram"></i>
          </Link>
          <Link href="#">
            <i className="fa fa-youtube"></i>
          </Link>
          <Link href="#">
            <i className="fa fa-twitter"></i>
          </Link>
        </div>
        <div className="row">
          <ul>
            <li>
              <Link href="#">Contact us</Link>
            </li>
            <li>
              <Link href="#">Our Services</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Career</Link>
            </li>
          </ul>
        </div>

        <div className="row">
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By:
          Mahesh
        </div>
      </div>
    </footer>
  );
}
