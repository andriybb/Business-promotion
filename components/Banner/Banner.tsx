import Image from "next/image";
import css from "./Banner.module.css";
export default function BannerSection() {
  return (
    <section>
      <div className={css.bannerBoxJoin}>
        <ul className={css.bannerList}>
          <li className={css.bannerItem}>
            <p className={css.joinText}>
              Join 100 Companies who boost their business with Product
            </p>
            <button className={css.joinBtn} type="button">
              Get This
            </button>
          </li>
          <li className={css.bannerItem}>
            <Image src="/images/screen.png" alt="screen" width={500} height={400} />
          </li>
        </ul>
      </div>
    </section>
  );
}