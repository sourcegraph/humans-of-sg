import React from "react";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export interface ModalProps {
  setModal: any;
  employee: { [key: string]: any };
}

const Modal = ({ setModal, employee }: ModalProps) => {
  function onClose() {
    setModal(false);
  }

  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalLeftPanel}>
          <div className={styles.leftPanelItemsContainer}>
            <div className={styles.employeePhotoContainer}>
              <img src={employee.photoUrl} className={styles.employeePhoto} />
            </div>
            <div className={styles.employeeLinks}>
              <p>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />- linkedin
              </p>
              <p>
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />-
                {employee.customGitHub}
              </p>
              <p>
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />- twitter
              </p>
              <p>
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />-
                instagram
              </p>
            </div>
          </div>
        </div>
        <div className={styles.modalRightPanel}>
          <div className={styles.rightPanelItemsContainer}>
            <div className={styles.employeeInfo}>
              <span className={styles.employeeInfoText}>
                {employee.preferredName
                  ? employee.preferredName + " " + employee.lastName
                  : employee.firstName + " " + employee.lastName}
                {employee.customPronouns
                  ? "," + " " + employee.customPronouns
                  : null}
              </span>

              <br></br>
              <span className={styles.employeeInfoText}>
                {employee.department}
              </span>
              <br></br>
              <span className={styles.employeeInfoText}>
                {employee.jobTitle}
              </span>
              <br></br>
              <span className={styles.employeeInfoText}>
                {employee.hireDate}
              </span>
              <br></br>
            </div>
            <div className={styles.employeeBio}>
              <p className={styles.employeeBioText}>
                Bios from team page coming soon!
              </p>
            </div>
            <div className={styles.hashtags}>
              <p className={styles.hashtagsText}>
                #hashtag1, #hashtag2, #hashtag3
              </p>
            </div>

            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={onClose} type="button">
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
