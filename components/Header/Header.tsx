'use client';
import Link from "next/link";
import Image from "next/image";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
const navLinks = [
    { label: "Product", href: "/Product" },
    { label: "Pricing", href: "/Pricing" },
    { label: "Customers", href: "/Customer" },
    { label: "Resources", href: "/Resourses" },
  ];

export default function Header() {
    const pathname = usePathname();
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Link className={css.headerLogo} href="/">
          <Image src="/images/logo.png" alt="logo" width={40} height={36} />
          Product
        </Link>

        <nav className={css.headerNav}>
          <ul className={css.headerNavList}>
          {navLinks.map(({ label, href }) => {
  const isActive = pathname === href;
  return (
    <li key={label} className={css.headerNavItem}>
      <Link 
        className={`${css["header-nav-link"]} ${isActive ? css.current : ""}`} 
        href={href}
      >
        {label}
      </Link>
    </li>
  );
})}
          </ul>
        </nav>

        <ul className={css.headerBtnList}>
          <li className={css.headerBtnItem}>
            <button className={css.headerBtn} type="button">
              Sign In
            </button>
          </li>
          <li className={css.headerBtnItem}>
            <button className={css.headerBtn} type="button">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}