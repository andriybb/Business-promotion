import Image from "next/image";
import css from "./Joinoffers.module.css";

const offers = [
  {
    img: { src: "/images/red.png", alt: "red", circleClass: "redCircle" },
    name: "Business",
    items: ["Cash Flow", "Asset Backed", "Receivables Finance"],
  },
  {
    img: { src: "/images/blue.png", alt: "blue", circleClass: "blueCircle" },
    name: "Enterprise",
    items: ["Site Acquisition", "Bridge", "Development Financing"],
  },
];

export default function JoinOffersSection() {
  return (
    <section className={ css.joinOffers}>
      <h2 className={css.joinAgitation}>
        Join thousand of other who have already received offers
      </h2>
      <ul className={css.offersList}>
        {offers.map(({ img, name, items }) => (
          <li key={name} className={css.offersBox}>
            <div className={`${css.circleBox} ${css[img.circleClass as keyof typeof css]}`}>
              <Image src={img.src} alt={img.alt} width={80} height={80} />
            </div>
            <p className={css.nameOffers}>{name}</p>
            <p className={css.offersText}>
              {items.map((item) => (
                <span key={item}>
                  {item}
                  <br />
                </span>
              ))}
            </p>
            <p className={css.bestProduct}>Find the best business product</p>
          </li>
        ))}
      </ul>
    </section>
  );
}