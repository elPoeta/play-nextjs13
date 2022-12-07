import React from 'react'
import { Character } from '../../types/character'

export const CharactersItem = ({character}:{character:Character}) => {
  return (
    <div>{character.name}</div>
  )
}
