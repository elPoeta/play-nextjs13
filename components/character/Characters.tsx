import React from 'react'
import { Character } from '../../types/character'
import { CharactersItem } from './CharactersItem'
import styles from './characters.module.css';

export const Characters = ({ characters }:{ characters: Character[] }) => {
  return (
    <div className={styles.wrapper}>
      {characters.map(character => 
        <div key={character.id} >
           {/* @ts-expect-error Server Component */}
          <CharactersItem character={character}/>
        </div>
      )}
   </div>
  )
}
