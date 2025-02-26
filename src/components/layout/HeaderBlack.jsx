import React, { useState } from "react";

const HeaderBlack = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-meet_white opacity-95">
      <div className="lg:px-[6.25rem] md:px-8 px-5 text-meet_menu flex h-full items-center">
        {/* 로고 */}
        <div className="lg:w-52 w-28 m-0">
          <img src="/meetmeet_logo_b.png" alt="MeetMeet Logo" />
        </div>

        {/* 모바일 메뉴 아이콘 */}
        <div
          className="lg:hidden ml-auto w-5 m-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="img/menu_ico.png"
            alt="Menu Icon"
            className="cursor-pointer"
          />
        </div>

        {/* 네비게이션 메뉴 */}
        <div
          className={`lg:flex lg:justify-center lg:mr-12 absolute lg:static top-[3.5rem] left-0 w-full bg-meet_white lg:bg-transparent transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-[300px] pb-16 opacity-100"
              : "max-h-0 pb-0 opacity-0"
          } lg:max-h-none lg:opacity-100 lg:pb-0`}
        >
          <ul className="lg:flex lg:space-x-6 py-6 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 p-0 m-0 text-meet_menu">
            <li>고객지원</li>
            <li>포인트 환전</li>
            <li>앱 다운로드</li>
          </ul>
        </div>

        {/* 로그인 버튼 */}
        <div
          className={`absolute lg:static top-[calc(12rem)] left-0 w-full lg:w-auto flex justify-center lg:ml-4 transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[100px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          } lg:max-h-none lg:opacity-100 lg:mt-0`}
        >
          <button className="lg:w-32 px-5 py-[0.375rem] text-meet_white bg-meet_pink rounded-3xl font-bold flex items-center justify-center whitespace-nowrap">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlack;
