import axios from "axios";



export default class AuthService {
  url: string;

  constructor(baseUrl: string) {
    this.url = baseUrl;
  }



  async check(email: string, password: string){
    try {
      const res = await axios.get(`${this.url}/users?q=${email}`);
      const data = await res.data;
      if (!(data[0].password !== password)) throw new Error("user not found");
      return data[0];
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
