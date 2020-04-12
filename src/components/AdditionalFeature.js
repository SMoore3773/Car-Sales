import React from 'react';

//see addedFeature for comment
const AdditionalFeature = props => {
  // console.log('props in additional feature component', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=> props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default AdditionalFeature;
