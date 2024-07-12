import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
function Danger(){
    return (
      <>
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          style={{ color: "#ff0000",fontSize:"1.5rem" }}
          beat
        />
      </>
    );
}

export default Danger