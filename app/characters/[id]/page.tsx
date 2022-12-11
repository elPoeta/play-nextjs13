import React from 'react'
import { Character } from '../../../types/character';
import { BASE_API_URL } from '../../../utils/constants';

const fetchCharacter = async ({ id }: { id: number }) => {
  const response = await fetch(`${BASE_API_URL}/character/${id}`);
  const json: Character = await response.json();
  return json;
}

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  //console.log(id); //{ params: { id: '34'}, searchParams: {  } }
  const character: Character = await fetchCharacter({ id: parseInt(id) });
  return (
    <div>Character ID {id}
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  )
}


export default CharacterPage;