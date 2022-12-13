import React, { Suspense } from 'react'
import { Characters } from '../../components/character/Characters';
import { Loader } from '../../components/common/Loader';
import { Pagination } from '../../components/pagination/Pagination';
import { getDataByPage } from '../../services/fetchingAPI';
import { APIResponse } from '../../types/apiType';
import { Character } from '../../types/character';
import { Params } from '../../types/paramsType';
import styles from './page.module.css';



const CharactersPage = async ({ searchParams }: Params) => {
  const { page = '1' } = searchParams;
  const { info, results }: APIResponse = await getDataByPage({ page, path: 'character' });
  const characters = results as Character[];

  return (
    <Suspense fallback={<Loader />}>
    <div className={styles.wrapper}>
      <Characters characters={characters} />
      <Pagination info={info} page={parseInt(page)} route="characters" />
    </div>
    </Suspense>
  )
}

export default CharactersPage;