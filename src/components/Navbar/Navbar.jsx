import { Outlet } from "react-router-dom";
import { Header, Nav } from "./NavbarStyled";
export function Navbar() {
  return (
    <>
      <Header>
        <div>
          <Nav>
            <button>MENSAL</button>
            <button>SEMANAL</button>
          </Nav>
        </div>
      </Header>
      <Outlet />
    </>
  );
}
