import Link from "next/link";
import React from "react";
import { Info } from "../../types/apiType";
import styles from "./pagination.module.css";

type PaginationParams = {
  info: Info;
  page: number;
  route: string;
};

export const Pagination = ({ info, page, route }: PaginationParams) => {
  const { next, prev } = info;
  let from = 0;
  if (page >= 10) from = page - 9;

  return (
    <div className={styles.container}>
      <Link href={`/${route}?page=${prev ? page - 1 : page}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={
            prev ? styles.icons : `${styles.icons} ${styles.iconsDisable}`
          }
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      {Array.from({ length: info.pages }, (_, i) => i + 1)
        .splice(from, 10)
        .map((n) => (
          <Link key={n} href={`/${route}?page=${n}`}>
            <span className={n === page ? styles.currentPage : ""}>{n}</span>
          </Link>
        ))}
      <Link href={`/${route}?page=${next ? page + 1 : page}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={
            next ? styles.icons : `${styles.icons} ${styles.iconsDisable}`
          }
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};
