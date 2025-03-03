import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: null, // 초기 토큰 값 (로그인 전 상태)
  setToken: (newToken) => set({ token: newToken }), // 토큰 설정
  clearToken: () => set({ token: null }), // 토큰 제거 (로그아웃)
}));

export default useAuthStore;
