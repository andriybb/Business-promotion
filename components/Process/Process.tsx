import Image from "next/image";
import css from "./Process.module.css";
const customers = [
  { src: "/images/first-customer.png", alt: "customer-1", text: "I can take care of your pitch", imgFirst: true },
  { src: "/images/second-customer.png", alt: "customer-2", text: "I can take care of your pitch", imgFirst: false },
  { src: "/images/third-customer.png", alt: "customer-3", text: "I can prototype your app", imgFirst: false },
  { src: "/images/fourth-customer.png", alt: "customer-4", text: "I can help marketing strategy", imgFirst: true },
];

export default function ProcessSection() {
  return (
    <section>
      <h2 className={css.process}>Quick &amp; Easy Process</h2>
      <p className={css.processText}>
        Do you require some help for your project: Conception workshop,
        prototyping, marketing strategy, landing page, Ux/UI?
      </p>

      <ul className={css.customerBoxes}>
        {[0, 2].map((startIdx) => (
          <li key={startIdx}>
            {customers.slice(startIdx, startIdx + 2).map(({ src, alt, text, imgFirst }) => (
              <div key={alt} className={css.customerBox}>
                {imgFirst && (
                  <Image src={src} alt={alt} width={200} height={200} />
                )}
                <div className={css.customerTextBox}>
                  <p className={css.customerText}>{text}</p>
                </div>
                {!imgFirst && (
                  <Image src={src} alt={alt} width={200} height={200} />
                )}
              </div>
            ))}
          </li>
        ))}
      </ul>

      <button type="button" className={css.processBtn}>
        Contact our expert
      </button>
    </section>
  );
}