
import Employers from "./pages/users/Employers";
import Candidates from "./pages/users/Candidates";
import Employees from "./pages/users/Employees";
import JobPostings from "./pages/JobPostings";
import JobTitles from "./pages/JobTitles";
import Resumes from "./pages/Resumes";

export const routes = [
  {
    path: "/employer",
    exact: true,
    component: <Employers/>,
    title: "Employers",
    isHeaderElement: true,
  },
  {
    path: "/candidate",
    exact: true,
    component: <Candidates/>,
    title: "Candidates",
    isHeaderElement: true,
  },
  {
    path: "/employee",
    exact: true,
    component: <Employees/>,
    title: "Employees",
    isHeaderElement: true,
  },
  {
    path: "/jobPosting",
    exact: true,
    component: <JobPostings/>,
    title: "JobPostings",
    isHeaderElement: true,
  },

  {
    path: "/jobTitle",
    exact: true,
    component: <JobTitles/>,
    title: "JobTitles",
    isHeaderElement: true,
  },
  {
    path: "/resume",
    exact: true,
    component: <Resumes/>,
    title: "Resumes",
    isHeaderElement: true,
  },
];