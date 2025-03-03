import { create } from "zustand";

const useModalStore = create((set) => ({
  isOpen: false, // 모달 상태 (열림/닫힘)
  content: "", // 모달 내부 텍스트
  redirectPath: null, // 모달 닫을 때 이동할 경로
  openModal: (text, path = null) =>
    set({ isOpen: true, content: text, redirectPath: path }), // 모달 열기
  closeModal: () => set({ isOpen: false, content: "", redirectPath: null }), // 모달 닫기
}));

export default useModalStore;
