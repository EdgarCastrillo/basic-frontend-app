import axios from 'axios';

class TrainerService {
  constructor() {
    this.trainers = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  getTrainers() {
    return this.trainers.get('/trainers/all')
      .then(({ data }) => data);
  }

  getTrainerById(id) {
    return this.trainers.get(`trainers/${id}`)
      .then(({ data }) => data);
  }
}



const trainerService = new TrainerService();

export default trainerService;