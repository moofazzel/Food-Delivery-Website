import css from "../styles/Footer.module.css";
import { SiFacebook } from "react-icons/si";
import { BsGithub, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <BsGithub size={40} />
        <SiFacebook size={40} />
        <BsInstagram size={40} />
      </div>
      <div className={css.logo}>
        <span>Foodizone</span>
      </div>
    </div>
  );
}

export default Footer;
