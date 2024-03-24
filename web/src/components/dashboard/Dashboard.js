import { Menu } from "./layout/Menu";
import "../../styles/dashboard.css";
import { Tools } from "./home/Tools";

export function Dashboard() {
  return (
    <>
      <Menu>
        <Tools />
      </Menu>
    </>
  );
}
