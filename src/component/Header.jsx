import Image from "next/image";
import css from "../styles/Header.module.css";
import Logo from "../../assets/Logo.png";

import { BiShoppingBag } from "react-icons/bi";

function Header() {
  return (
    <>
      <div className={css.header}>
        {/* Logo */}
        <div className={css.logo}>
          <span>Foodizone</span>
        </div>
        {/* Nav */}
        <ul className={css.nav}>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
        {/* right */}
        <div className={css.rightSide}>
          <div className={css.cart}>
            <BiShoppingBag size={35} color="#2e2e2e" />
            <div className={css.badge}>1</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
