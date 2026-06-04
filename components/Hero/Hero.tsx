import Image from "next/image";
import css from "./Hero.module.css";
export default function HeroSection() {
  return (
    <section className={css.hero}>
      <div>
        <div>
          <h1 className={css.heroMainText}>Work at the speed of thought</h1>
          <p className={css.heroText}>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <ul className={css.headerBtnList}>
            <li className={css.headerBtnItem}>
              <button className={css.headerBtn + " " + css.start} type="button">
                Get started
              </button>
            </li>
            <li className={css.headerBtnItem}>
              <div className={css.watchBox}>
                <button className={css.headerBtnWatch} type="button">
                  <svg width="20" height="18" className={css.iconTriangle}>
                    <use href="/images/icons.svg#icon-Triangle" />
                  </svg>
                  <p>Watch the Video</p>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <Image
          src="/images/hero-img.svg"
          alt="hero-img"
          width={610}
          height={555}
        />
      </div>
    </section>
  );
}