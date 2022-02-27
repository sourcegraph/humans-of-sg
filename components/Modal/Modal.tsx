import React from "react";
import styles from "./Modal.module.css";

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
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalBody}>
          <div className={styles.modalLeftPanel}>
            <div className={styles.leftPanelItemsContainer}>
              <div className={styles.employeePhotoContainer}>
                <img src={employee.photoUrl} className={styles.employeePhoto} />
              </div>
              <div className={styles.employeeLinks}>
                <p>Github- {employee.customGitHub}</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>hi, Im test link #4</p>
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
                  hi, Im a test bio. hi, Im a test bio. hi, Im a test bio. hi,
                  Im a test bio!! Yes, thats right! Im a test bio and I love it.
                  Lets see what happens as my bio gets longer! Oh wow! Its
                  behaving as expected
                </p>
              </div>
              <div className={styles.hashtags}>
                <p className={styles.hashtagsText}>
                  #hashtag1, #hashtag2, #hashtag3
                </p>
              </div>

              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={onClose}
                  type="button"
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
