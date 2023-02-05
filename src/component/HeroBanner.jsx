import css from "../styles/HeroBanner.module.css";
import Image from "next/image";
import cherry from "../../assets/Cherry.png";
import HeroImage from "../../assets/HeroImage.png";
import Pizzal from "../../assets/p1.jpg";
import { BsTelephone } from "react-icons/bs";

function HeroBanner() {
  return (
    <div className={css.container}>
      {/* left */}
      <div className={css.left}>
        <div className={css.cherry}>
          <span>More then Faster</span>
          <Image src={cherry} width={40} height={25} alt="" />
        </div>

        <div className={css.heroText}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>

          <span>
            Your{" "}
            <span
              style={{
                color: "var(--themeRed )",
              }}
            >
              Pizza
            </span>
          </span>
        </div>

        <span className={css.smallText}>
          Our Mission is to filling your tummy with delicious food and with fast
          and free delivery
        </span>

        <button className={`btn ${css.btn}`}>Get Started</button>
      </div>
      {/* right */}
      <div className={css.right}>
        <div className={css.heroImage}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>

        <div className={css.contactUs}>
          <span>Contact us</span>
          <div>
            <BsTelephone style={{ color: "#ffffff" }} />
          </div>
        </div>

        <div className={css.pizza}>
          <div>
            <Image src={Pizzal} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span> 6.49
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
