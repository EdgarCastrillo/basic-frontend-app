import axios from 'axios';

class UpdateService {
  constructor() {
    this.updates = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  updateUser(id, name, value) {
    return this.updates.put(`/users/${id}/update`, {name, value})
      .then(({ data }) => data);
  }
}

const updateService = new UpdateService();

export default updateService;