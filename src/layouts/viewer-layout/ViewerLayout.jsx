import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link, Outlet } from "react-router-dom";
import { AuthUserPopover } from "../../components/AuthUserPopover";
import { Logo } from "../../components/Logo";
export const ViewerLayout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <div>footer</div>
    </>
  );
};
