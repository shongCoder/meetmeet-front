import { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderBlack = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-meet_white opacity-95">
      <div className="lg:px-[6.25rem] md:px-8 px-5 text-meet_menu flex h-full items-center">
        {/* 로고 */}
        <div className="lg:w-52 md:w-[9.125rem] w-28 m-0">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src="./meetmeet_logo_b.png" alt="MeetMeet Logo" />
          </NavLink>
        </div>

        {/* 모바일 메뉴 아이콘 */}
        <div
          className="lg:hidden md:hidden ml-auto w-5 m-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="./img/menu_ico.png"
            alt="Menu Icon"
            className="cursor-pointer"
          />
        </div>

        {/* 네비게이션 메뉴 */}
        <div
          className={`lg:flex md:flex lg:justify-center md:justify-center lg:mr-12 md:mr-12 absolute md:static lg:static top-[3.5rem] left-0 w-full bg-meet_white lg:bg-transparent md:bg-transparent transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-[300px] pb-16 opacity-100"
              : "max-h-0 pb-0 opacity-0"
          } lg:max-h-none md:max-h-none lg:opacity-100 md:opacity-100 lg:pb-0 md:pb-0`}
        >
          <ul className="lg:flex md:flex lg:space-x-6 md:space-x-6 py-6 flex flex-col lg:flex-row md:flex-row items-center space-y-4 lg:space-y-0 md:space-y-0 p-0 m-0 text-meet_menu">
            <li>
              <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                to="/support"
                className={({ isActive }) =>
                  isActive ? "font-bold text-meet_pink" : ""
                }
              >
                고객지원
              </NavLink>
            </li>
            <li>
              <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                to="/exchange"
                className={({ isActive }) =>
                  isActive ? "font-bold text-meet_pink" : ""
                }
              >
                포인트 환전
              </NavLink>
            </li>
            <li>
              <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                to="/download"
                className={({ isActive }) =>
                  isActive ? "font-bold text-meet_pink" : ""
                }
              >
                앱 다운로드
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 로그인 버튼 */}
        <div
          className={`lg:ml-4 md:ml-4 lg:static md:static absolute top-[calc(12rem)] left-0 w-full lg:w-auto md:w-auto flex justify-center md:justify-end lg:justify-end transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[100px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          } lg:max-h-none lg:opacity-100 lg:mt-0 md:max-h-none md:opacity-100 md:mt-0`}
        >
          <button className="lg:w-32 md:w-32 px-5 py-[0.375rem] text-meet_white bg-meet_pink rounded-3xl font-bold flex items-center justify-center whitespace-nowrap">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlack;
