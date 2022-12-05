import React from 'react'

const CharactersPage = ({ searchParams }: { searchParams: { page?: string } }) => {
  const { page = '' } = searchParams;
  console.log(page) //{ params: {}, searchParams: { page: '2' } }
  return (
    <div>Characters page {page}</div>
  )
}

export default CharactersPage;