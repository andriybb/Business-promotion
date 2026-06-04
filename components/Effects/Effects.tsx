import css from "./Effects.module.css";
import Image from 'next/image';
export default function Effectssection() {
  return (
    <section className={css.priceThirdSection}>
      <h2 className={css.priceMainPageThird}>Product is being used with great effects alongside:</h2>
      <div className={css.priceThirdSectionBox}>
        <Image src="/images/amico.png" alt="computer" width={500} height={300} />
        <ul className={css.priceThirdSectionList}>
          <li className={css.priceThirdSectionListItem}>
            <div className={css.priceThirdSectionListItemBox}>
              <div className={css.iconComputerBox}>
                <svg className={css.iconComputer} width="24" height="24">
                  <use href="/images/icons.svg#icon-01"></use>
                </svg>
              </div>
              <h3 className={css.priceMainPageThirdSmall}>Enterpreneur</h3>
            </div>
            <p className={css.textAboutPricing}>Product is a great way to help medium and samall enterprise owners achieve their goals</p>
          </li>
          <li className={css.priceThirdSectionListItem}>
            <div className={css.priceThirdSectionListItemBox}>
              <div className={css.iconComputerBox}>
                <svg className={css.iconComputer} width="24" height="24">
                  <use href="/images/icons.svg#icon-04"></use>
                </svg>
              </div>
              <h3 className={css.priceMainPageThirdSmall}>Accountants</h3>
            </div>
            <p className={css.textAboutPricing}>Whether you are working on contract with clients, or on other key accounting documents, Product is for you</p>
          </li>
          <li className={css.priceThirdSectionListItem}>
            <div className={css.priceThirdSectionListItemBox}>
              <div className={css.iconComputerBox}>
                <svg className={css.iconComputer} width="24" height="24">
                  <use href="/images/icons.svg#icon-05"></use>
                </svg>
              </div>
              <h3 className={css.priceMainPageThirdSmall}>Universities</h3>
            </div>
            <p className={css.textAboutPricing}>Organize university projects and have documents easily graded online with Product</p>
          </li>
        </ul>
      </div>
    </section>
  );
}