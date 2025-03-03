import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full lg:px-[6.25rem] md:px-8 px-5 flex lg:justify-between lg:flex-row md:flex-col lg:pt-[13.375rem] md:pt-[13.375rem] pt-[7.5rem] pb-[8.75rem]">
      {/* 로그인 필드 */}
      <div className="lg:w-[25rem] md:w-full w-full lg:px-0 md:px-[3.75rem]">
        <div className="text-[2.25rem] font-bold text-center">
          <span className="text-meet_black">Login</span>
          <span className="text-meet_pink">.</span>
        </div>
        <div className="text-meet_text text-center text-[0.875rem]">
          만나고 싶은 순간, 밋밋하세요!
        </div>
        {/* 입력 필드 */}
        <div className="mt-10">
          <form className="">
            <label htmlFor="email" className="text-meet_text text-[0.75rem]">
              이메일
            </label>
            <input
              className="w-full border border-meet_gray rounded-[0.5rem] py-4 pl-3 mt-3 mb-4 text-[0.875rem] focus:outline-none focus:text-meet_black focus:border-meet_pink"
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 입력해 주세요"
            />
            <label htmlFor="password" className="text-meet_text text-[0.75rem]">
              비밀번호
            </label>
            <div className="relative w-full">
              <input
                className="w-full border border-meet_gray rounded-[0.5rem] py-4 pl-3 pr-10 mt-3 focus:outline-none focus:text-meet_black focus:border-meet_pink"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="비밀번호를 입력해 주세요"
              />
              {/* 👁 비밀번호 보기 아이콘 */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-6 h-6 translate-y-1 text-meet_gray" />
                ) : (
                  <EyeIcon className="w-6 h-6 translate-y-1 text-meet_gray" />
                )}
              </button>
            </div>
            <button
              style={{ boxShadow: "0px 5px 10px rgba(26, 26, 26, 0.1)" }}
              className="bg-meet_pink rounded-[0.75rem] w-full text-center py-4 text-meet_white font-bold lg:mt-[4.25rem] md:mt-[4.25rem] mt-11"
            >
              로그인
            </button>
          </form>
        </div>
        <div className="w-[12.25rem] flex gap-5 mt-6">
          <img src="./img/login/kakao.png" className="w-[3.25rem]" />
          <img src="./img/login/google.png" className="w-[3.25rem]" />
          <img src="./img/login/apple.png" className="w-[3.25rem]" />
        </div>
        <div className="text-center lg:mt-20 md:mt-20 mt-7 lg:text-4 md:text-4 text-[0.8125rem]">
          <span className="text-meet_text">계정이 없으신가요? </span>
          <span className="text-meet_black font-medium">앱에서 회원가입</span>
        </div>
      </div>

      {/* 이미지 필드 */}
      <div className="m-0 relative md:pt-8 lg:block md:block hidden">
        {/* 배경 이미지 */}
        <div className="relative lg:w-[45.9rem] md:w-full w-full h-full min-h-[40rem] bg-[url('/img/login/hand.png')] bg-cover bg-center">
          <div className="absolute bottom-0 w-full h-[5em] bg-gradient-to-t from-white to-transparent"></div>
          <div className="absolute lg:right-0 md:left-1/2 md:-translate-x-1/2 bottom-11 flex gap-4">
            <img src="./img/download/appstore.png" className="w-[12.625rem]" />
            <img src="./img/download/playstore.png" className="w-[12.625rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
