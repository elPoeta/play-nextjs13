import React from 'react'
import { APIResponse } from '../../types/apiType';
import { Character } from '../../types/character';
import { BASE_API_URL } from '../../utils/constants';

const fetchCharacters = async ({page}:{page:string}) => {
  const response = await fetch(`${BASE_API_URL}/character/?page=${page}`);
  const  json:APIResponse = await response.json();
  return json;
} 

const CharactersPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const { page = '1'} = searchParams;
  console.log(page) 
  const { info, results  } : APIResponse = await fetchCharacters({page});
  const characters = results as Character[];
  return (
    <div>
      Characters page {page}
       <pre>{JSON.stringify(characters, null, 2)}</pre>
    </div>
  )
}

export default CharactersPage;