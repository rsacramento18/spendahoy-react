import PopupTypeEnum from "../models/popupTypeEnum.model";

import { faCheck, faCross, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Popup = (type: PopupTypeEnum, message: string, response: boolean) => {

  const icon = () => {
    switch (type) {
      case 1:
        return (
          <div className="error-icon">
            <FontAwesomeIcon icon={faCross} />
          </div>
        );
      case 2:
        return (
          <div className="success-icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        );
      case 3:
        return (
          <div className="confirm-icon">
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </div>
        );
      default:
        return (
          <div className="success-icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        );
    }
  }

  return (
    <div className="modal">
      <div className="popup">
        <div className="main">
          <div className="icon">
            {icon()}
          </div>
          <div className="message">
            <span>{message}</span> 
          </div>
        </div>
        <div className="buttons">
        </div>
      </div>
    </div>
  )

}

export default Popup;
