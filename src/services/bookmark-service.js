import axios from 'axios';

class BookmarkService {
  constructor() {
    this.bookmark = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  putBookmarks(id) {
    return this.user.put(`/bookmark/${id}/new`)
      .then(({ data }) => data);
  }

}

const bookmarkService = new BookmarkService();

export default bookmarkService;