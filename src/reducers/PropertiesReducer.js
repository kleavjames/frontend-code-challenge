// import { PROPERTY_DATA } from '../actions/index';

// export default function(state = [], action) {
//   switch (action.type) {
//     case PROPERTY_DATA:
//       return [action.payload.data, ...state];
//   }
//   return state;
// }

// import axios from 'axios';

// export const PROPERTY_DATA = 'PROPERTY_DATA';

// export default function() {
//   const propertyReq = axios.get('https://api.mcmakler.de/v1/advertisements');

//   return {
//     type: PROPERTY_DATA,
//     payload: propertyReq
//   }
// }