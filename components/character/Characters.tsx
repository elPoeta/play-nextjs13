import React from 'react'
import { Character } from '../../types/character'
import { CharactersItem } from './CharactersItem'

export const Characters = ({ characters }:{ characters: Character[] }) => {
  return (
    <div>
      {characters.map(character => 
        <div key={character.id}>
          <CharactersItem character={character}/>
        </div>
      )}
   </div>
  )
}
