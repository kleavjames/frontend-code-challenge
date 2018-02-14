import axios from 'axios';

export const PROPERTY_DATA = 'PROPERTY_DATA';

export function fetchPropertyData() {
  const propertyReq = axios.get('https://api.mcmakler.de/v1/advertisements');

  return {
    type: PROPERTY_DATA,
    payload: propertyReq
  }
}