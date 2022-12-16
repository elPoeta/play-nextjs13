import React from 'react'
import { getData } from '../../../services/fetchingAPI';
import { Location } from '../../../types/location';
import { Params } from '../../../types/paramsType';

const LocacionPage = async ({params}:Params) => {
  const { id } = params ;
  const location: Location = await getData({ id, path: 'location' }) as Location;
  return (
    <div>Location ID {id}
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </div>
  )
}

export default LocacionPage;