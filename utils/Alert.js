import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
// import "../constant/Alert.css";

/**
 * GET method API
 *
 * @param {string} title title: default value is "Title".
 * @param {string} message message.
 * @param {Boolean} isCloseButton close button or button with text "No".
 * @param {Boolean} closeOnClickOutside close alert if click outside.
 * @param {string} buttonTextYes custom text for YES/OK button.
 * @param {string} buttonTextNo custom text for NO button.
 * @param {Function} handleClickYes callback function on click YES/OK.
 * @param {Function} handleClickNo callback function on click NO.
 * @param {Function} afterClose callback function triggers after closing the alert.
 * return alert
 */
const Alert = ({
  title = "Title",
  message = "",
  handleClickYes = () => {},
  isCloseButton = false,
  handleClickNo = () => {},
  afterClose = () => {},
  closeOnClickOutside = true,
  buttonTextYes = "Yes",
  buttonTextNo = "No",
}) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="custom-ui">
          <span className="heading">{title}</span>
          <span className="message">{message}</span>
          <div className="buttons">
            {isCloseButton && (
              <button
                onClick={() => {
                  handleClickNo();
                  onClose();
                }}
              >
                {buttonTextNo}
              </button>
            )}
            <button
              onClick={() => {
                handleClickYes();
                onClose();
              }}
            >
              {buttonTextYes}
            </button>
          </div>
        </div>
      );
    },
    afterClose: afterClose,
    closeOnClickOutside: closeOnClickOutside,
  });
};
export default Alert;
