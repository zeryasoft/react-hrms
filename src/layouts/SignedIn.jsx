import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="http://res.cloudinary.com/zeryasoft/image/upload/v1622849187/hsadhmlppbjvls4ukzku.jpg"
          />
          <Dropdown pointing="top left" text="Sedat">
            <Dropdown.Menu>
              <Dropdown.Item text="Bilgilerim" icon="info" />
              <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </div>
    );
  }
