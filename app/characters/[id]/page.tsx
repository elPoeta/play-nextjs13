import React from 'react'
import { getCharacter } from '../../../services/fetchingAPI';
import { Character } from '../../../types/character';


const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  //console.log(id); //{ params: { id: '34'}, searchParams: {  } }
  const character: Character = await getCharacter({ id: parseInt(id) });
  return (
    <div>Character ID {id}
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  )
}


export default CharacterPage;