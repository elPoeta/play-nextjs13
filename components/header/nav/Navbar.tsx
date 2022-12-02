import Link from "next/link";
import React from "react";
import styles from './Navbar.module.css';

const links = [
  { id: "link-0", title: "Home", url: `/` },
  { id: "link-1", title: "Characters", url: `/character` },
  { id: "link-2", title: "Locations", url: `/location` },
  { id: "link-3", title: "Episodes", url: `/episode` },
  { id: "link-4", title: "About", url: `/about` },
];

export const Navbar = () => {
  const navLinks = () =>
    links.map((link) => (
      <li key={link.id} className={styles.links}>
        <Link href={`${link.url}`}>{link.title}</Link>
      </li>
    ));
  return (
    <nav>
      <ul className={styles.navLinks}>{navLinks()}</ul>
    </nav>
  );
};
