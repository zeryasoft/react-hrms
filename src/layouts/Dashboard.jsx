import React from "react";
import "../templatemo-seo-dream.css";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";

export default function Dashboard({ children }) {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>{children}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
