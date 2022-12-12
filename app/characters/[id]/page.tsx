import React from 'react'
import { getData } from '../../../services/fetchingAPI';
import { Character } from '../../../types/character';


const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const character: Character = await getData({ id, path: 'character' }) as Character;
  return (
    <div>Character ID {id}
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  )
}


export default CharacterPage;