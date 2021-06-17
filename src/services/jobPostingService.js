import axios from "../axios/axios";

export default class JobPostingService {
  getJobPosting() {
    return axios.get("/jobpostingforms/getAllJobPosting");
  }

  getCities(){
    return axios.get("/cities/getAll");
  }

  getJobTitles(){
    return axios.get("/jobtitles/getAll");
  }
}
