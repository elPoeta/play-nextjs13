import React from 'react'
import { getData } from '../../../services/fetchingAPI';
import { Episode } from '../../../types/episode';

const EpisodePage =async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const episode: Episode = await getData({ id, path: 'episode' }) as Episode;
  return (
    <div>Episode ID {id}
      <pre>{JSON.stringify(episode, null, 2)}</pre>
    </div>
  )
}

export default EpisodePage;