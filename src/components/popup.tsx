import PopupTypeEnum from "../models/popupTypeEnum.model";

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Popup = (type: PopupTypeEnum, message: string, response: boolean) => {

  const icon = () => {
    switch (type) {
      case 1:
        return (<FontAwesomeIcon icon={faCheck} />);
      case 2:
        return (<FontAwesomeIcon icon={faCheck} />);
      default:
        return (<FontAwesomeIcon icon={faCheck} />);
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
