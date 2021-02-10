import React from 'react';

//added onClick capability to call the removeFeature function defined in App.js and action held in index.js in the actions folder.
//the function gets called with the props.feature parameter.
const AddedFeature = props => {
  // console.log('props in addedFeature',props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>props.remove(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
