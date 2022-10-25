import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="addbook">Add book</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};
