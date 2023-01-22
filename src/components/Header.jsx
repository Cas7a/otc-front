import Logo from "../assets/img/logo.png";
import "../assets/styles/header.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineGlobal, AiFillMessage } from "react-icons/ai";
import { FaAmbulance, FaRegCalendarAlt } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { HiDocumentReport } from "react-icons/hi";
import { MdAdminPanelSettings } from "react-icons/md";
import { IconContext } from "react-icons";
import { Dropdown } from "./Dropdown";
import {
  pacientes,
  maestras,
  transporte,
  programacion,
  facturacion,
  reportes,
  administracion,
} from "../dropdownInfo";

function Header() {
  return (
    <nav className="header">
      <div className="header-wrapper">
        <img className="header-logo" src={Logo} alt="logo"></img>
        <nav className="nav-header-list">
          <IconContext.Provider value={{ size: "1.3rem" }}>
            <div className="container">
              <BsFillPersonFill />
              <Dropdown
                title={"pacientes"}
                submenu={pacientes}
                className="dropdown-content"
              />
            </div>

            <div className="container">
              <AiOutlineGlobal />
              <Dropdown
                title={"maestras"}
                submenu={maestras}
                className="big-dropdown"
              />
            </div>

            <div className="container">
              <FaAmbulance />
              <Dropdown
                title={"transporte"}
                submenu={transporte}
                className="dropdown-content"
              />
            </div>

            <div className="container">
              <FaRegCalendarAlt />
              <Dropdown
                title={"programación"}
                submenu={programacion}
                className="dropdown-content"
              />
            </div>

            <div className="container">
              <RiMoneyDollarCircleFill />
              <Dropdown
                title={"facturación"}
                submenu={facturacion}
                className="dropdown-content"
              />
            </div>

            <div className="container">
              <HiDocumentReport />
              <Dropdown
                title={"reportes"}
                submenu={reportes}
                className="dropdown-content"
              />
            </div>

            <div className="container">
              <MdAdminPanelSettings />
              <Dropdown
                title={"administración"}
                submenu={administracion}
                className="dropdown-content"
              />
            </div>

            <div className="container">
              <AiFillMessage />
              <Dropdown title={"mensajes de texto"} submenu={[]} />
            </div>
          </IconContext.Provider>
        </nav>
      </div>
    </nav>
  );
}
export default Header;
