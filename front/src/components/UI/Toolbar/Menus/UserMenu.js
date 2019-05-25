import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";

const UserMenu = ({user, logout}) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
        hello  {user.username}
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>
        View profile
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem onClick={logout}>
        Logout
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default UserMenu;
