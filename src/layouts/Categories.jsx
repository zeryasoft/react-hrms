import React from "react";
import { Menu } from "semantic-ui-react";

import { Link } from "react-router-dom";
import { routes } from "../Routing";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        {routes.map((route) => (
          <Menu.Item key={route.title} name={route.title}>
            <Link to={route.path}>{route.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
