import Link from "next/link";
import Image from "next/image";
import css from "./Footer.module.css";
const resourceLinks = [
  { label: "About Us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
  { label: "FAQ", href: "#" },
];

const legalLinks = [
  { label: "Disclaimer", href: "#" },
  { label: "Financing", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer>
      <div className={css.footerContainer}>
        <ul className={css.footerList}>
          {/* Logo + Social */}
          <li className={css.footerItem}>
            <Link className={css.footerLogo} href="/">
              <Image src="/images/logo.png" alt="logo" width={40} height={36} />
              Product
            </Link>
            <div className={css.socialList}>
              {["instagram", "facebook", "twitter"].map((icon) => (
                <div key={icon} className={css.socialBox}>
                  <svg className={css.socialIcons} width="24" height="24">
                    <use href={`/images/icons.svg#icon-${icon}`} />
                  </svg>
                </div>
              ))}
            </div>
          </li>

          {/* Resources */}
          <li className={css.footerItem}>
            <ul className={css.resource}>
              <p className={css.footerTextMainPages}>Resource</p>
              {resourceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link className={css.footerTextPages} href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Legal */}
          <li className={css.footerItem}>
            <ul className={css.legal}>
              <p className={css.footerTextMainPages}>Legal Stuff</p>
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link className={css.footerTextPages} href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Newsletter */}
          <li className={css.footerItem}>
            <p className={css.footerTextMainPages}>
              knowing you&apos;re always on the best energy deal.
            </p>
            <div className={css.footerForm}>
              <label htmlFor="phone-footer">
                <div className={css.inputPhoneFooter}>
                  <input
                    className={css.footerInput}
                    type="tel"
                    placeholder="Enter your phone number"
                    id="phone-footer"
                  />
                  <svg className={css.telephone} width="18" height="28">
                    <use href="/images/icons.svg#icon-mobile-screen" />
                  </svg>
                </div>
              </label>
            </div>
            <button className={css.footerBtn} type="button">
              Sign up Now
            </button>
          </li>
        </ul>
      </div>

      <p className={css.footerLastText}>
        Made With Love By Figmaland All Right Reserved
      </p>
    </footer>
  );
}