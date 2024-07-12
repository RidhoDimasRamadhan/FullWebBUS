import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "/src/css/mainPage.css"
function Whatsapp() {
  return (
    <>
      <a href="https://wa.me/+6285281595005" className="up-icon">
        <FontAwesomeIcon icon={faSquareWhatsapp} style={{ color: "#08d430",fontSize:"4rem" }} />
      </a>
    </>
  );
}
export default Whatsapp;
