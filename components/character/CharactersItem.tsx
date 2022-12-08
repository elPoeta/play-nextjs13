import Image from 'next/image'
import React from 'react'
import { Character, Status } from '../../types/character'
import styles from './characterItems.module.css';

export const CharactersItem = ({character}:{character:Character}) => {
  const status = character.status === Status.ALIVE ? styles.statusIconAlive 
    : character.status === Status.DEAD ? styles.statusIconDead : styles.statusIconUnknown;
  return (
    <article className={styles.article}>
      <div>
        <Image alt={character.name} src={character.image} width={200} height={200} style={{borderBottomLeftRadius:'10px', borderTopLeftRadius:'10px'}}/>
      </div>
      <div className={styles.characterData}>
        <h3>{character.name}</h3>
        <div style={{display:'flex', alignItems:'center'}}>
          <span className={`${styles.statusIcon} ${status}`}></span>
          <span>{character.status} - {character.species}</span>
        </div>
      </div>
    </article>
  )
}
