import React from 'react'

const CharacterPage =  ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id); //{ params: { id: '34'}, searchParams: {  } }
  return (
    <div>Character ID {id}</div>
  )
}


export default CharacterPage;