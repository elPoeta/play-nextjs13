import Image from 'next/image'
import React from 'react'
import { Character } from '../../types/character'
import styles from './characterItems.module.css';

export const CharactersItem = ({character}:{character:Character}) => {
  return (
    <article className={styles.article}>
      <div>
        <Image alt={character.name} src={character.image} width={200} height={200} style={{borderBottomLeftRadius:'10px', borderTopLeftRadius:'10px'}}/>
      </div>
      <div className={styles.characterData}>
        {character.name}

      </div>
    </article>
  )
}
