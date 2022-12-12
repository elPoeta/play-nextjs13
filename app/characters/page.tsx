import React from 'react'
import { Characters } from '../../components/character/Characters';
import { Pagination } from '../../components/pagination/Pagination';
import { getDataByPage } from '../../services/fetchingAPI';
import { APIResponse } from '../../types/apiType';
import { Character } from '../../types/character';
import styles from './page.module.css';



const CharactersPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const { page = '1' } = searchParams;
  const { info, results }: APIResponse = await getDataByPage({ page, path: 'character' });
  const characters = results as Character[];

  return (
    <div className={styles.wrapper}>
      <Characters characters={characters} />
      <Pagination info={info} page={parseInt(page)} />
    </div>
  )
}

export default CharactersPage;