import axios from "axios";

const Axios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": 'e7028849-7b36-4fb7-b2c1-dd0b4e473e8a'
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    const url = `users?page=${currentPage}&count=${pageSize}`;
      return Axios.get(url)
              .then(response => response.data);
  },
  toggleFollowUser(userID) {
    const url = `/follow/${userID}`;
    return this._getIsUserFollowed(userID)
      .then(isFollowed => {
        if(isFollowed) {
          return Axios.delete(url)
            .then(response => {
              return response.resultCode;
            });
        } else {
          return Axios.post(url)
            .then(response => {
              return response.resultCode;
            });
        }
      })
  },
  _getIsUserFollowed(userID) {
    const url = `/follow/${userID}`;
    return Axios.get(url)
            .then(response => response.data)
            .catch(error => console.log(error));
  }
}
