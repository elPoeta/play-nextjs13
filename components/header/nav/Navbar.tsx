import Link from "next/link";
import React from "react";
import styles from './Navbar.module.css';

const links = [
  { id: "link-0", label: "Home", route: `/` },
  { id: "link-1", label: "Characters", route: `/characters` },
  { id: "link-2", label: "Locations", route: `/locations` },
  { id: "link-3", label: "Episodes", route: `/episodes` },
  { id: "link-4", label: "About", route: `/about` },
];

export const Navbar = () => {
  const navLinks = () =>
    links.map((link) => (
      <li key={link.id} className={styles.links}>
        <Link href={`${link.route}`}>{link.label}</Link>
      </li>
    ));
  return (
    <nav>
      <ul className={styles.navLinks}>{navLinks()}</ul>
    </nav>
  );
};
