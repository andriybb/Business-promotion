import Image from "next/image";
import css from "./Ourclients.module.css";

const clients = [
  { src: "/images/Airbnb Logo.png", alt: "Airbnb" },
  { src: "/images/Google Logo.png", alt: "Google" },
  { src: "/images/Microsoft Logo.png", alt: "Microsoft" },
  { src: "/images/FedEx Logo.png", alt: "FedEx" },
];

export default function OurClientsSection() {
  return (
    <section className={`container ${css.ourClientsSection}`}>
      <h1 className={css.clients}>Our Clients</h1>
      <ul className={css.ourClients}>
        {clients.map(({ src, alt }) => (
          <li key={alt}>
            <Image
              src={src}
              alt={alt}
              width={120}
              height={82}
              className={css.imageClientCompany}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}