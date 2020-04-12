import React from 'react';
import AddedFeature from './AddedFeature';

//added the remove key to pass the removeOption function through to the AddedFeature component so that it can be used there.
const AddedFeatures = props => {
  // console.log('props in added featureS',props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} remove={props.removeItem}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};


export default AddedFeatures;
