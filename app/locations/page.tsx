import React from 'react'
import { getDataByPage } from '../../services/fetchingAPI';
import { APIResponse } from '../../types/apiType';
import { Location } from '../../types/location';

const LocationsPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const { page = '1' } = searchParams;
  const { info, results }: APIResponse = await getDataByPage({ page, path: 'location' });
  const locations = results as Location[];
  return (
    <div>
      <pre>{JSON.stringify(locations,null,2)}</pre>
    </div>
  )
}

export default LocationsPage;