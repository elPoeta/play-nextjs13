import React from "react";
import { Location } from "../../types/location";
import { LocationsItem } from './LocationsItem';
import styles from './locations.module.css'

export const Locations = ({locations}:{locations: Location[]}) => {
  return (
    <div className={styles.wrapper}>
    {locations.map(location => 
      <div key={location.id} >
        <LocationsItem location={location}/>
      </div>
    )}
 </div>
  );
};
