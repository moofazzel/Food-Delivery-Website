import Image from "next/image";

function HeroBanner() {
  return (
    <div className={container}>
      <div className={css.cherry}>
        <span>More then Faster</span>
        <Image src={cherry} alt="" />
      </div>
    </div>
  );
}

export default HeroBanner;
