//initial state for app
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  //reducer used for state management. Uses initialState for state to prevent errors. Uses actions pulled from action folder. 
  //since particular parts of state that we needed to change were nested within the state object, multipul spread operators were used to access the specific piece of state we needed.
  //the add option and remove option were acting the same way, just on two different parts of the state in two different components, but the setup was the same for each.

export const newreducer = (state = initialState, action) => {
    console.log('state in new reducer',state)
    switch(action.type){
        case 'ADD_OPTION':
            // console.log('state in add option case',state)
            // console.log('action in add option case',action)
            return{ ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car:{...state.car,
                features:[...state.car.features, action.payload]
                },
                additionalFeatures: state.additionalFeatures.filter(item=>item.id !== action.payload.id)

            }
        case 'REMOVE_OPTION':
            // console.log('state in remove option case', state)
            // console.log('action in remove option case', action)
            return{ ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {...state.car,
                    features: state.car.features.filter(item => item.id !== action.payload.id)
                },
                additionalFeatures:[...state.additionalFeatures, action.payload]

            }
            //return default is the state object as it comes into the reducer so that if nothing is changed, then it returns exactly what comes in.
            default:
                return state;
    }
}