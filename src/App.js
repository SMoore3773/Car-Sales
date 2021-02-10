import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addOption, removeOption} from './actions';



const App = (props) => {
  console.log('props in app',props)
  
  //******** Initial state moved to the reducer component \|/ */
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  //functions that call actions to add and remove items. 
  //These are connected to the index.js in the actions folder and act as dispatches for their respective functions.
  const removeFeature = item => {
    props.removeOption(item)
  };

  const buyItem = item => {
    props.addOption(item);
  };

  //on the components the buyItem and removeFeature functions are passed through to their respective components
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeItem={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//this is mapping state to the props for this component so that when we reference props in sending information to the components we are sending a state object and not the actual base object.
const mapStateToProps = state =>{
  console.log('state in map state to props', state)
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

// here we connect our mapStateToProps function, and in addition this is where we have the addOption and removeOption found in the actions folder.
export default connect(mapStateToProps,{addOption, removeOption})(App);
