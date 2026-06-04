import Image from "next/image";
import css from "./Testimonials.module.css";

function StarRating({ count = 5, filled = 4 }: { count?: number; filled?: number }) {
  return (
    <div className={css.starsBox}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className={`star${i >= filled ? " not-star" : ""}`}
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <use href="/images/icons.svg#icon-star" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  { img: "/images/clients/women-1.png", alt: "women", name: "Wahid Ari", role: "Designer" },
  { img: "/images/clients/men.png", alt: "men", name: "Wahid Ari", role: "Designer" },
  { img: "/images/clients/men-2.png", alt: "men", name: "Wahid Ari", role: "Designer" },
];

const feedbackText =
  "Product helps you see how many more days you need to work to reach your financial goal.";

export default function TestimonialsSection() {
  return (
    <section className={css.container}>
      <h2 className={css.clientsMain}>What Clients Say</h2>
      <p className={css.clientsText}>
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
      <ul className={css.clientsList}>
        {testimonials.map(({ img, alt, name, role }, i) => (
          <li key={i} className={css.clientsListItem}>
            <div className={css.clientsFeedback}>
              <StarRating filled={4} />
              <p className={css.feedbackText}>{feedbackText}</p>
              <ul className={css.clientNameBox}>
                <li>
                  <Image src={img} alt={alt} width={50} height={50} />
                </li>
                <li>
                  <p className={css.clientName}>{name}</p>
                  {role}
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}