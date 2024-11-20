import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { AuthUserPopover } from "../AuthUserPopover";

export function Header() {
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarContent className=" sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" to="/accounts">
              Accounts
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/browser" aria-current="page">
              TV Shows
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Movies
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className=" lg:flex">
            <AuthUserPopover />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
