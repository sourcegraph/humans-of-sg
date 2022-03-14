import React from "react";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
            <div className={styles.socialLinks}>
              <p>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.socialIcons}
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className={styles.socialIcons}
                  size="2x"
                />
                {/* {employee.customGitHub} */}
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className={styles.socialIcons}
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className={styles.socialIcons}
                  size="2x"
                />
              </p>
            </div>
          </div>
        </div>
        <div className={styles.modalRightPanel}>
          <div className={styles.rightPanelItemsContainer}>
            <div className={styles.xIcon} onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
