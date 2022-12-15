import React, { Suspense } from 'react'
import { Loader } from '../../components/common/Loader';
import { Episodes } from '../../components/episode/Episodes';
import { Pagination } from '../../components/pagination/Pagination';
import { getDataByPage } from '../../services/fetchingAPI';
import { APIResponse } from '../../types/apiType';
import { Episode } from '../../types/episode';


const EpisodePage =  async ({ searchParams }: { searchParams: { page?: string } }) => {
  const { page = '1' } = searchParams;
  const { info, results }: APIResponse = await getDataByPage({ page, path: 'episode' });
  const episodes = results as Episode[];
  return (
    <Suspense fallback={<Loader />}>
    <div style={{padding: '4rem'}}>
      <Episodes episodes={episodes} />
      <Pagination info={info} page={parseInt(page)} route="episodes" />
    </div>
    </Suspense>
  )
}

export default EpisodePage;