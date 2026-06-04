import css from "./Product.module.css";
const productItems = [
    {
      icon: { id: "icon-cursor", width: 16, height: 18 },
      title: "First click tests",
      text: "While most people enjoy casino gambling,",
    },
    {
      icon: { id: "icon-zigzag", width: 18, height: 18 },
      title: "Design surveys",
      text: "Sports betting, lottery and bingo playing for the fun",
    },
    {
      icon: { id: "icon-heart", width: 16, height: 18 },
      title: "Preference tests",
      text: "The Myspace page defines the individual.",
    },
    {
      icon: { id: "icon-time", width: 14, height: 18 },
      title: "Five second tests",
      text: "Personal choices and the overall personality of the person.",
    },
  ];
  
  export default function ProductSection() {
    return (
      <section >
        <div className={css.productContainer}>
          <h2 className={css.product}>Product was Built Specifically for You</h2>
          <ul className={css.productList}>
            {productItems.map(({ icon, title, text }) => (
              <li key={title} className={css.productItem}>
                <div className={css.productIconBox}>
                  <svg
                    className={css.iconProduct}
                    width={icon.width}
                    height={icon.height}
                  >
                    <use href={`/images/icons.svg#${icon.id}`} />
                  </svg>
                </div>
                <h3 className={css.productListItem}>{title}</h3>
                <p className={css.productText}>{text}</p>
              </li>
            ))}
          </ul>
          <button className={css.productBtn} type="button">
            SIGN UP NOW
          </button>
        </div>
      </section>
    );
  }