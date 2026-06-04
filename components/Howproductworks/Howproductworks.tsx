import Image from "next/image";
import css from "./Howproductworks.module.css";

const steps = [
  {
    step: "STEP 1",
    title: "Apply for a product",
    text: "Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology.",
    img: { src: "/images/mac1.png", alt: "mac1" },
    imgFirst: true,
  },
  {
    step: "STEP 2",
    title: "Pay fully refundable",
    text: "Product will contactting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be fully refunded.",
    img: { src: "/images/mac2.png", alt: "mac2" },
    imgFirst: false,
  },
  {
    step: "STEP 3",
    title: "Completion",
    text: "Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement.",
    img: { src: "/images/mac3.png", alt: "mac3" },
    imgFirst: true,
  },
];

export default function HowProductWorksSection() {
  return (
    <section className={`container ${css.howProductWork}`}>
      <h2 className={css.productWork}>How Product Work?</h2>
      <div className={css.workProduct}>
        {steps.map(({ step, title, text, img, imgFirst }) => (
          <div key={step} className={css.workStep}>
            <ul className={css.instructionMac}>
              {imgFirst ? (
                <>
                  <li>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={500}
                      height={350}
                      className={css.imageMacbook}
                    />
                  </li>
                  <li>
                    <div className={css.instruction}>
                      <p className={css.steps}>{step}</p>
                      <h3 className={css.instructionTitle}>{title}</h3>
                      <p className={css.instructionText}>{text}</p>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <div className={css.instruction}>
                      <p className={css.steps}>{step}</p>
                      <h3 className={css.instructionTitle}>{title}</h3>
                      <p className={css.instructionText}>{text}</p>
                    </div>
                  </li>
                  <li>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={500}
                      height={350}
                      className={css.imageMacbook}
                    />
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
      <button className={css.getInBtn} type="button">
        Get in touch with us
      </button>
    </section>
  );
}