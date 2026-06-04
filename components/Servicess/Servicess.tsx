import Image from "next/image";
import css from "./Servicess.module.css";
const checkItems = [
  "Never worry about overpaying for your energy again.",
  "We will only switch you to energy companies that we trust and will treat you right.",
  "We track the markets daily and know where the savings are.",
];

export default function ServicesSection() {
  return (
    <section >
      <h2 className={css.visuallyHidden}>Services</h2>
      <div className={css.servicesContainer}>
        <ul>
          {/* Section 1 — Management */}
          <li className={css.services}>
            <div className={css.sectionContain}>
              <div className={css.servicesTextMain}>
                <p className={css.pretext}>Effortless Validation for</p>
                <h3 className={css.episode}>Management</h3>
                <p className={css.servicesTextMyspace}>
                  The Myspace page defines the individual, his or her
                  characteristics, traits, personal choices and the overall
                  personality of the person.
                </p>
                <div>
                  <h4 className={css.episodeJ}>Accessory makers</h4>
                  <p className={css.servicesTextUnique}>
                    While most people enjoy casino gambling, sports betting,
                    lottery and bingo playing for the fun
                  </p>
                </div>
                <div>
                  <h4 className={css.episodeJ}>Alterationists</h4>
                  <p className={css.servicesText}>
                    If you are looking for a new way to promote your business
                    that won&apos;t cost you more money,
                  </p>
                </div>
              </div>
              <div className={css.servicesImg}>
                <Image
                  src="/images/management-img.svg"
                  alt="management-img"
                  width={540}
                  height={500}
                />
              </div>
            </div>
          </li>

          {/* Section 2 — Customer Support */}
          <li className={css.services}>
            <div className={css.sectionContain}>
              <div className={css.servicesImg}>
                <Image
                  src="/images/support-img.svg"
                  alt="support-img"
                  width={540}
                  height={500}
                />
              </div>
              <div>
                <p className={css.pretext}>Easier decision making for</p>
                <h3 className={css.episode}>Customer Support</h3>
                <p className={css.servicesTextMyspace}>
                  The Myspace page defines the individual, his or her
                  characteristics, traits, personal choices and the overall
                  personality of the person.
                </p>
                <ul className={css.supportList}>
                  {checkItems.map((item) => (
                    <li key={item} className={css.supportCheck}>
                      <div className={css.customerIconBox}>
                        <svg className={css.iconTick} width="16" height="12">
                          <use href="/images/icons.svg#icon-tick" />
                        </svg>
                      </div>
                      <p className={css.textSupportCheck}>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {/* Section 3 — Collaborative */}
          <li className={css.services}>
            <div className={css.sectionContain}>
              <div>
                <p className={css.pretext}>Optimisation for</p>
                <h3 className={css.episode}>Collaborative</h3>
                <p className={css.servicesText}>
                  Few would argue that, despite the advancements of feminism
                  over the past three decades, women still face a double
                  standard when it comes to their behavior.
                </p>
                <div>
                  <h4 className={css.episodeJ}>Accessory makers</h4>
                  <p className={css.servicesTextUnique}>
                    While most people enjoy casino gambling, sports betting,
                    lottery and bingo playing for the fun
                  </p>
                </div>
                <div>
                  <h4 className={css.episodeJ}>Alterationists</h4>
                  <p className={css.servicesText}>
                    If you are looking for a new way to promote your business
                    that won&apos;t cost you more money,
                  </p>
                </div>
              </div>
              <div className={css.servicesImg}>
                <Image
                  src="/images/collaboration-img.svg"
                  alt="collaboration-img"
                  width={540}
                  height={500}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}