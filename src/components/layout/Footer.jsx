import React, { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full items-start text-meet_text overflow-hidden">
      <div className="lg:px-[6.25rem] md:px-8 px-5 text-left">
        <div className="lg:w-[9.125rem] w-[6.875rem] lg:mt-[3.75rem] mt-4 !ml-0">
          <img src="/meetmeet_logo_b.png" alt="MeetMeet Logo" />
        </div>
        {/* 웹 버전 */}
        <div className="lg:block hidden">
          <div className="mt-7">
            <ul className="flex font-semibold text-[0.875rem]">
              <li className="mr-4">이용약관</li>
              <li className="mr-4 font-light text-meet_gray">|</li>
              <li className="text-meet_sodomy mr-4">개인정보처리방침</li>
              <li className="mr-4 font-light text-meet_gray">|</li>
              <li>운영정책</li>
            </ul>
          </div>
          <div className="mt-4 text-left text-[0.8125rem] flex w-full justify-between items-end">
            <div className="flex-1">
              <div>
                <div className="inline-block mr-3">
                  <span className="font-medium">상호 : </span>
                  <span>(주)케이비즈플래닛</span>
                </div>
                <div className="inline-block mr-3">
                  <span className="font-medium">대표 : </span>
                  <span>황성연</span>
                </div>
                <div className="inline-block">
                  <span className="font-medium">주소 : </span>
                  <span>경기도 광주시 문형산길 93, 202-에이8호</span>
                </div>
              </div>
              <div>
                <div className="inline-block mr-3">
                  <span className="font-medium">사업자 등록번호 : </span>
                  <span>126-86-35315</span>
                </div>
                <div className="inline-block">
                  <span className="font-medium">통신판매업 신고번호 : </span>
                  <span>2023-용인기흥-2891</span>
                </div>
              </div>
              <div>
                <div className="inline-block mr-3">
                  <span className="font-medium">이메일 : </span>
                  <span>meetmeet.help@gmail.com</span>
                </div>
                <div className="inline-block">
                  <span className="font-medium">상담전화 : </span>
                  <span>070-000-0000</span>
                </div>
              </div>
            </div>
            <div className="pl-6 pr-3 py-2 border border-meet_gray rounded-full flex items-center flex-shrink-0">
              <p className="text-[0.8125rem] mr-10">
                궁금한 내용이 있으신가요?
              </p>
              <button className="px-7 py-3 bg-meet_black text-meet_white font-bold text-[0.875rem] rounded-full">
                이메일 문의하기
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 버전 */}
        <div className="items-start lg:hidden block">
          {/* 버튼 & 이미지 */}
          <div className="w-full text-3 pl-3 pr-1 py-1 border border-meet_gray rounded-full flex justify-between items-center flex-shrink-0 mt-6">
            <p className="text-[0.8125rem]">궁금한 내용이 있으신가요?</p>
            <button className="px-6 py-3 bg-meet_black text-meet_white font-bold text-[0.8125rem] rounded-full">
              이메일 문의하기
            </button>
          </div>
          <div
            className="flex items-center justify-start cursor-pointer mt-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="!m-0 pr-1">(주)케이비즈플래닛</span>
            <img
              className={`!m-0 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              src="/img/arrow-down.png"
            />
          </div>

          {/* 펼쳐지는 내용 */}
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              isOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="mt-7">
              <ul className="flex justify-between font-semibold text-[0.875rem]">
                <li className="mr-4">이용약관</li>
                <li className="mr-4 font-light text-meet_gray">|</li>
                <li className="text-meet_sodomy mr-4">개인정보처리방침</li>
                <li className="mr-4 font-light text-meet_gray">|</li>
                <li>운영정책</li>
              </ul>
            </div>
            <div className="mt-4 text-left text-[0.8125rem] w-full">
              <div>
                <div>
                  <span className="font-medium">상호 : </span>
                  <span>(주)케이비즈플래닛</span>
                </div>
                <div>
                  <span className="font-medium">대표 : </span>
                  <span>황성연</span>
                </div>
                <div>
                  <span className="font-medium">주소 : </span>
                  <span>경기도 광주시 문형산길 93, 202-에이8호</span>
                </div>
                <div>
                  <span className="font-medium">사업자 등록번호 : </span>
                  <span>126-86-35315</span>
                </div>
                <div>
                  <span className="font-medium">통신판매업 신고번호 : </span>
                  <span>2023-용인기흥-2891</span>
                </div>
              </div>
              <div>
                <div>
                  <span className="font-medium">이메일 : </span>
                  <span>meetmeet.help@gmail.com</span>
                </div>
                <div>
                  <span className="font-medium">상담전화 : </span>
                  <span>070-000-0000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="lg:mt-[3.75rem] mt-3 lg:px-[6.25rem] md:px-8 px-5 lg:text-center md:text-left text-left">
        <hr className="border-meet_gray w-full lg:opacity-100 md:opacity-0 opacity-0" />
        <div className="lg:mt-4 mb-[3.75rem] text-[#C1C1C1] lg:text-[0.875rem] text-[0.6875rem]">
          Copyright © <span className="font-bold">meetmeet.</span> All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
