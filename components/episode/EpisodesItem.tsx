import Link from "next/link";
import React from "react";
import { Episode } from "../../types/episode";
import styles from "./episodesItem.module.css";

export const EpisodesItem = ({ episode }: { episode: Episode }) => {
  return (
    <Link href={`/episodes/${episode.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h2 className={styles.h2}>
            <span className={styles.enclosed}>{episode.name}</span>
            {episode.air_date}
          </h2>
          <p>{episode.episode}</p>
        </div>
      </div>
    </Link>
  );
};
