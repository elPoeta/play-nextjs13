import React from 'react'
import { getData } from '../../../services/fetchingAPI';
import { Character } from '../../../types/character';
 import styles from './page.module.css';
import Image from 'next/image';


const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const character: Character = await getData({ id, path: 'character' }) as Character;
  return (
    <div className={styles.wrapper}>
      <Image src={character.image} width={400}  height={400} priority={true} alt={character.name} className={styles.img}/>
      <section className={styles.infoCharacter}>
        <h2 className={styles.h2}>{character.name}</h2>
      </section>
    </div>
  )
}


export default CharacterPage;