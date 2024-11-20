import { Outlet } from "react-router-dom";

export const AccountLayout = () => {
  return (
    <div>
      <div>Account Module Header</div>
      <sidebar>menu items will go here</sidebar>
      <div class="container">
        <Outlet />
      </div>
      <div>Account Module Footer</div>
    </div>
  );
};
