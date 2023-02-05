import Image from "next/image";
import css from "../styles/Services.module.css";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";

function Services() {
  const services = [
    {
      subTitle: "Easy to Order",
      title: "You only need a few step in food ordering",
      image: s1,
    },
    {
      subTitle: "Easy to Order",
      title: "Delivery that is always on time even faster",
      image: s2,
    },
    {
      subTitle: "Easy to Order",
      title: "Not only fast for us, quality is also number one",
      image: s3,
    },
  ];
  return (
    <>
      <div className={css.heading}>
        <span> WHAT WE SERVE</span>
        <span>Your Favorite Food</span>
        <span>Delivery Partner</span>
      </div>
      {/* services */}
      <div className={css.services}>
        {services.map((ser) => {
          return (
            <>
              <div className={css.service}>
                <div className={css.imageWrapper}>
                  <Image
                    src={ser.image}
                    alt=""
                    objectFit="cover"
                    layout="intrinsic"
                  />
                </div>
                <span>{ser.subTitle}</span>
                <span>{ser.title} </span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Services;
