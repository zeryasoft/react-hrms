
import Employer from "./pages/users/Employer";
import Candidate from "./pages/users/Candidate";
import Employee from "./pages/users/Employee";

export const routes = [
  {
    path: "/employer",
    exact: true,
    component: <Employer/>,
    title: "Employer",
    isHeaderElement: true,
  },
  {
    path: "/candidate",
    exact: true,
    component: <Candidate/>,
    title: "Candidate",
    isHeaderElement: true,
  },
  {
    path: "/employee",
    exact: true,
    component: <Employee/>,
    title: "Employee",
    isHeaderElement: true,
  },
  
];