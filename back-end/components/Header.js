import { RiBarChartHorizontalLine } from "react-icons/ri";
import { GoScreenFull } from "react-icons/go";

export default function Header() {
  return (
    <>
      <header className="header flex flex-sb">
        <div className="logo flex gap-2">
          <h1>ADMIN</h1>
          <div className="headerham flex flex-center">
            <RiBarChartHorizontalLine />
          </div>
        </div>
        <div className="rightnav flex gap-2">
          <div>
            <GoScreenFull />
          </div>
          <div className="notification"></div>
        </div>
      </header>
    </>
  );
}
