import React from "react";
import "../templatemo-seo-dream.css";
import Categories from "./Categories";
import { Grid} from "semantic-ui-react";
import { Route } from "react-router";
import Candidates from "../pages/users/Candidates";
import Employees from "../pages/users/Employees";
import JobPostings from "../pages/JobPostings";
import JobTitles from "../pages/JobTitles";
import Resumes from "../pages/Resumes";
import Employers from "../pages/users/Employers";
import Home from "./Home";
import { Liste } from "../pages/users/Liste";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/resumes" component={Resumes} />
            <Route exact path="/employers" component={Employers} />
            <Route exact path="/candidates" component={Candidates} />
            <Route exact path="/employees" component={Employees} />
            <Route exact path="/jobPostings" component={JobPostings} />
            <Route exact path="/jobTitles" component={JobTitles} />
            <Route exact path="/lists" component={Liste} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
