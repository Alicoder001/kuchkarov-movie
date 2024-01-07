import MuiModal from "@mui/material/Modal";
import { useInfoState } from "src/store";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { modal, setModal, currentMovie } = useInfoState();
  const handleClose = () => {
    setModal(false);
  };
  return (
    <MuiModal open={modal} onClose={handleClose}>
      <>
        <button className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]">
          <FaTimes />
        </button>
      </>
    </MuiModal>
  );
};

export default Modal;
