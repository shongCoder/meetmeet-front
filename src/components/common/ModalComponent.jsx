import useModalStore from "../../store/modalStore.js";
import { useNavigate } from "react-router-dom";

function ModalComponent() {
  const navigate = useNavigate();
  const { isOpen, content, closeModal, redirectPath } = useModalStore();

  if (!isOpen) return null;

  const handleClose = () => {
    closeModal();
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96 text-center">
        <p className="text-lg font-semibold">{content}</p>
        <button
          onClick={handleClose}
          className="mt-4 bg-meet_pink text-white px-4 py-2 rounded-md"
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default ModalComponent;
