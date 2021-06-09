import axios from "../axios/axios";

export default class JobTitleService {
  getJobTitle() {
    return axios.get("/jobtitles/getAll");
  }
}