import Image from "next/image";
import css from "./Strategiess.module.css";
const articles = [
  {
    img: "/images/computer.png",
    alt: "computer",
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Increasing Prosperity With Positive Thinking",
    middle: false,
  },
  {
    img: "/images/people.png",
    alt: "people",
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Motivation Is The First Step To Success",
    middle: true,
  },
  {
    img: "/images/buildings.png",
    alt: "buildings",
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Success Steps For Your Personal Or Business",
    middle: false,
  },
];

export default function StrategiesSection() {
  return (
    <section >
      <h2 className={css.strategiesMain}>Contents Strategies</h2>
      <p className={css.strategiesText}>
        We focus on ergonomics and meeting you where you work. It&apos;s only a
        keystroke away.
      </p>
      <ul className={css.newsList}>
        {articles.map(({ img, alt, author, date, title, middle }) => (
          <li key={title}>
            <div className={`news-item${middle ? " middle" : ""}`}>
              <Image src={img} alt={alt} width={400} height={250} />
              <p className={css.newsAuthor}>
                By <span className={css.author}>{author}</span> | {date}
              </p>
              <h3 className={css.newsTheme}>{title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}