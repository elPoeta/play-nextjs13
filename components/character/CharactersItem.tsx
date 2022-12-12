import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { getData } from '../../services/fetchingAPI';
import { Character, Status } from '../../types/character'
import { Episode } from '../../types/episode';
import styles from './characterItems.module.css';



export const CharactersItem = async ({ character }: { character: Character }) => {
  const status = character.status === Status.ALIVE ? styles.statusIconAlive
    : character.status === Status.DEAD ? styles.statusIconDead : styles.statusIconUnknown;
  const location = character.location.url.split("/").pop();
  const firstSeenUrl = !character.episode.length ? null : character.episode[0];
  let episode: Episode | null = null;
  if (firstSeenUrl) {
    const id = firstSeenUrl.split('/').pop();
    if(id)
      episode = await getData({ id, path: 'episode' }) as Episode;
  } 
  return (
    <article className={styles.article}>
      <div>
        <Image alt={character.name} src={character.image} width={200} height={200} style={{ borderBottomLeftRadius: '10px', borderTopLeftRadius: '10px' }} />
      </div>
      <div className={styles.characterData}>
        <section className={styles.character}>
          <Link href={`/characters/${character.id}`}><span className={styles.characterLink}>{character.name}</span></Link>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={`${styles.statusIcon} ${status}`}></span>
            <span>{character.status} - {character.species}</span>
          </div>
        </section>
        <section className={styles.characterInfo}>
          <p>Last known location:</p>
          <Link href={`/locations/${location}`}>{character.location.name}</Link>
        </section>
        <section className={styles.characterInfo}>
          <p>First seen in:</p>
          {firstSeenUrl && episode ? (
            <Link href={`/episodes/${episode.id}`}>{episode.name}</Link>
          ) : (<>-</>)}
        </section>
      </div>
    </article>
  )
}
