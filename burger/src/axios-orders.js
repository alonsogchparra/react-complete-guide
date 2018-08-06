import axios from 'axios';

const instance = axios.create({
  // In the baseURL you can use the DataBase that you created on your firebase
  baseURL: 'https://react-my-burger-two.firebaseio.com/'
});

export default instance;