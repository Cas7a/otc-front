import "../assets/styles/menus.css";
import { MdAttachEmail, MdDirections } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
function Menus() {
  return (
    <div className="icon-container">
      <div className="icons">
        <span className="tooltiptext">Proceso de facturación electronica</span>
        <a href="#">
          <MdAttachEmail />
        </a>
      </div>

      <div className="icons">
        <span className="tooltiptext">Facturación en proceso</span>
        <a href="#">
          <FaFileInvoiceDollar />
        </a>
      </div>

      <div className="icons">
        <span className="tooltiptext">Direccionamiento en proceso</span>
        <a href="#">
          <MdDirections />
        </a>
      </div>
    </div>
  );
}

export default Menus;
