import React from "react";
import { Button, Dropdown, Menu, Container } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu size="large">
      <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
          </Menu.Menu>
        </Container>

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>İş İlanları</Dropdown.Item>
              <Dropdown.Item>Açık CV'ler</Dropdown.Item>
              <Dropdown.Item>Pozisyonlar</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
