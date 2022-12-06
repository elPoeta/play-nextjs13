import React from 'react'
import { BASE_API_URL } from '../../utils/constants';

const fetchCharacters = async ({page}:{page:string}) => {
  const response = await fetch(`${BASE_API_URL}/character/?page=${page}`);
  const characters = await response.json();
  return characters;
} 

const CharactersPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const { page = '1'} = searchParams;
  console.log(page) 
  const characters:unknown = await fetchCharacters({page});

  return (
    <div>
      Characters page {page}
       <pre>{JSON.stringify(characters, null, 2)}</pre>
    </div>
  )
}

export default CharactersPage;