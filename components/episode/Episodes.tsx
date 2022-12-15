import React from 'react'
import { Episode } from '../../types/episode';
import styles from './episodes.module.css';
import { EpisodesItem } from './EpisodesItem';

export const Episodes = ({episodes}:{episodes: Episode[]}) => {
  return (
    <div className={styles.wrapper}>
    {episodes.map(episode => 
      <div key={episode.id} >
        <EpisodesItem episode={episode}/>
      </div>
    )}
 </div>
  )
}
