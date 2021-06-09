import axios from "../axios/axios";

export default class ResumeService {
  getResume() {
    return axios.get("/jobpostingforms/getAll");
  }
}