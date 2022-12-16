import React, { Suspense } from 'react'
import { Loader } from '../../components/common/Loader';
import { Locations } from '../../components/location/Locations';
import { Pagination } from '../../components/pagination/Pagination';
import { getDataByPage } from '../../services/fetchingAPI';
import { APIResponse } from '../../types/apiType';
import { Location } from '../../types/location';

const LocationsPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const { page = '1' } = searchParams;
  const { info, results }: APIResponse = await getDataByPage({ page, path: 'location' });
  const locations = results as Location[];
  return (
    <Suspense fallback={<Loader />}>
    <div style={{padding: '4rem'}}>
      <Locations locations={locations} />
      {/* <Pagination info={info} page={parseInt(page)} route="locations" /> */}
    </div>
    </Suspense>
  )
}

export default LocationsPage;