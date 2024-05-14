import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";

export default function ImageModal({ isOpen, onCloseModal, item }) {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      onRequestClose={onCloseModal}
      isOpen={isOpen}
      appElement={document.getElementById("root")}
    >
      <img
        className={css.modalImage}
        src={item.urls.regular}
        alt={item.alt_description}
      />

      <button className={css.button} onClick={onCloseModal}>
        <IoMdClose className={css.modalIcon} />
      </button>
    </Modal>
  );
}
