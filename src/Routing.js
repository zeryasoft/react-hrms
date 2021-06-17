
import Employers from "./pages/users/Employers";
import Candidates from "./pages/users/Candidates";
import Employees from "./pages/users/Employees";
import JobPostings from "./pages/JobPostings";
import JobTitles from "./pages/JobTitles";
import Resumes from "./pages/Resumes";

export const routes = [
  {
    path: "/employers",
    exact: true,
    component: <Employers/>,
    title: "Employers",
    isHeaderElement: true,
  },
  {
    path: "/candidates",
    exact: true,
    component: <Candidates/>,
    title: "Candidates",
    isHeaderElement: true,
  },
  {
    path: "/employees",
    exact: true,
    component: <Employees/>,
    title: "Employees",
    isHeaderElement: true,
  },
  {
    path: "/jobPostings",
    exact: true,
    component: <JobPostings/>,
    title: "JobPostings",
    isHeaderElement: true,
  },

  {
    path: "/jobTitles",
    exact: true,
    component: <JobTitles/>,
    title: "JobTitles",
    isHeaderElement: true,
  },
  {
    path: "/resumes",
    exact: true,
    component: <Resumes/>,
    title: "Resumes",
    isHeaderElement: true,
  }, 
];