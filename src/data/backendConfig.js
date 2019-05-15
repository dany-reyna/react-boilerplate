export const BASE_URL = process.env.REACT_APP_API_URL;
export const HEADERS = {};
export const getAuthorizationHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem('')}`,
});
