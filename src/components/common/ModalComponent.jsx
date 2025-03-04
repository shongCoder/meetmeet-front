import useModalStore from "../../store/modalStore.js";
import { useNavigate } from "react-router-dom";

function ModalComponent() {
  const navigate = useNavigate();
  const { isOpen, title, content, closeModal, redirectPath } = useModalStore();

  if (!isOpen) return null;

  const handleClose = () => {
    closeModal();
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-[0.75rem] pt-4 px-6 pb-5 shadow-lg lg:w-[28.75rem] md:w-[28.75rem] w-[18.75rem] text-center">
        <div className="lg:text-[1.25rem] md:text-[1.25rem] text-[1rem] font-semibold mb-3 flex items-center justify-between w-full">
          <span className="opacity-0">-</span> {/* 안 보이는 요소 */}
          <p className="text-center flex-1">{title}</p> {/* 중앙 정렬 */}
          <img
            onClick={handleClose}
            src="./img/icon-x-mono.png"
            className="ml-auto"
          />{" "}
          {/* 완전 우측 끝 배치 */}
        </div>
        <p className="lg:text-[1rem] md:text-[1rem] text-[0.8125rem] text-gray-600 mt-3 mb-3 whitespace-pre-line">
          {content}
        </p>
        <button
          onClick={handleClose}
          className="mt-3 lg:text-[1rem] md:text-[1rem] text-[0.75rem] bg-meet_pink text-white font-bold lg:py-4 md:py-4 py-3 lg:rounded-[0.75rem] md:rounded-[0.75rem] rounded-[0.5rem] w-full"
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default ModalComponent;
