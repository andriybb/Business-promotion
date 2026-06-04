import css from "./Pricing.module.css";
const plans = [
    {
      name: "Free",
      description: "Brief price description",
      price: 0,
      features: ["Only 2 Operators", "Notifications", "Landing Pages"],
      premium: false,
    },
    {
      name: "Standard",
      description: "Brief price description",
      price: 5,
      features: ["5+ Operators", "Notifications", "Landing Pages"],
      premium: false,
    },
    {
      name: "Premium",
      description: "Brief price description",
      price: 10,
      features: ["10+ Operators", "Notifications", "Landing Pages"],
      premium: true,
    },
  ];
  
  export default function PricingSection() {
    return (
      <section>
        <h2 className={css.priceMain}>Price Table</h2>
        <p className={css.priceText}>We offer competitive price</p>
        <div className={css.priceTable}>
          {plans.map(({ name, description, price, features, premium }) => (
            <div key={name} className={css.priceBox}>
              <h3 className={css.priceTextMain}>{name}</h3>
              <p className={css.priceTextAdded}>{description}</p>
              <div className={`price${premium ? " premium" : ""}`}>
                <p className={css.money}>{price}</p>
                <div className={css.valueBox}>
                  <ul>
                    <li className={css.money + " " + css.value}>$</li>
                    <li className={css.perMonth}>Per/month</li>
                  </ul>
                </div>
              </div>
              {features.map((f) => (
                <p key={f} className={css.priceTextCircs}>
                  {f}
                </p>
              ))}
              <button type="button" className={css.orderBtn}>
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }