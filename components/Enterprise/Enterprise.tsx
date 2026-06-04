import css from "./Enterprise.module.css";
export default function Enterprisesection() {
  return (
    <section className={css.enterpriseSection}>
      <p className={css.mainTextContainerHead}>ENTERPRISE</p>
      <h2 className={css.priceMainPageSecond}>Are you interested in a custom-tailored plan?</h2>
      <p className={css.priceTextPageSecond}>Product is a set of advanced features for really large teams with projects.</p>
      <button className={css.getInThirdBtn} type="button">Get in touch with us</button>
    </section>
  );
}