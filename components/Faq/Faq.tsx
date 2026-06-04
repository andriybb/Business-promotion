import css from "./Faq.module.css";
export default function Faqsection() {
  return (
    <section className={css.container}>
      <h2 className={css.priceMainPageFourth}>Frequently asked question</h2>
      <p className={css.priceTextPageFourth}>Something is not clear? You need help? Check our FAQ section</p>
      <ul className={css.plusBoxTextList}>
        <li className={css.plusBoxText}>
          <div className={css.plus}>
            <svg className={css.iconPlus} width="24" height="24">
              <use href="/images/icons.svg#icon-plus"></use>
            </svg>
          </div>
          What are my payment option?
        </li>
        <li className={css.plusBoxText}>
          <div className={css.plus}>
            <svg className={css.iconPlus} width="24" height="24">
              <use href="/images/icons.svg#icon-plus"></use>
            </svg>
          </div>
          How can I invite collaborator to platform?
        </li>
        <li className={css.plusBoxText}>
          <div className={css.plus}>
            <svg className={css.iconPlus} width="24" height="24">
              <use href="/images/icons.svg#icon-plus"></use>
            </svg>
          </div>
          Can I upgrade my plan?
        </li>
        <li className={css.plusBoxText}>
          <div className={css.plus}>
            <svg className={css.iconPlus} width="24" height="24">
              <use href="/images/icons.svg#icon-plus"></use>
            </svg>
          </div>
          Can I cancel my plan at anytime?
        </li>
      </ul>
    </section>
  );
}