import css from "./Whychoose.module.css";

const reasons = [
  {
    icon: { id: "icon-cursor", width: 16, height: 18 },
    title: "Special Business",
    text: "Product helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
  {
    icon: { id: "icon-zigzag", width: 18, height: 18 },
    title: "Instant Result",
    text: "Product helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
  {
    icon: { id: "icon-heart", width: 16, height: 18 },
    title: "Fastest way to organize",
    text: "Product helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className={css.ourProductChoseSection}>
      <div className="container">
        <h2 className={css.chooseProduct}>Why Choose Product?</h2>
        <ul className={css.ourProductsPlus}>
          {reasons.map(({ icon, title, text }) => (
            <li key={title}>
              <div className={css.choose}>
                <div className={css.chooseIcon}>
                  <svg className={css.iconChoose} width={icon.width} height={icon.height}>
                    <use href={`/images/icons.svg#${icon.id}`} />
                  </svg>
                </div>
                <h3 className={css.chooseOne}>{title}</h3>
                <p className={css.chooseText}>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}