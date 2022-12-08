import React from 'react'
import { Characters } from '../../components/character/Characters';
import { Pagination } from '../../components/pagination/Pagination';
import { APIResponse } from '../../types/apiType';
import { Character } from '../../types/character';
import { BASE_API_URL } from '../../utils/constants';
import styles from './page.module.css';

const fetchCharacters = async ({page}:{page:string}) => {
  const response = await fetch(`${BASE_API_URL}/character/?page=${page}`);
  const  json:APIResponse = await response.json();
  return json;
} 

const CharactersPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const { page = '1'} = searchParams;
  const { info, results  } : APIResponse = await fetchCharacters({page});
  const characters = results as Character[];

  return (
    <div className={styles.wrapper}>
      <Characters characters={characters} />
      <Pagination info={info} page={parseInt(page)}/>
    </div>
  )
}

export default CharactersPage;