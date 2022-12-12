import React from 'react'
import { getDataByPage } from '../../services/fetchingAPI';
import { APIResponse } from '../../types/apiType';
import { Episode } from '../../types/episode';

const EpisodePage =  async ({ searchParams }: { searchParams: { page?: string } }) => {
  const { page = '1' } = searchParams;
  const { info, results }: APIResponse = await getDataByPage({ page, path: 'episode' });
  const episodes = results as Episode[];
  return (
    <div>
      <pre>{JSON.stringify(episodes,null,2)}</pre>
    </div>
  )
}

export default EpisodePage;