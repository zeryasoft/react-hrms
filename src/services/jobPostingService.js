import axios from "../axios/axios";

export default class JobPostingService {
  getJobPosting() {
    return axios.get("/jobpostingforms/getAllJobPosting");
  }
}
