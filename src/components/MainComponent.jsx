import { useState, useEffect } from "react";

const MainComponent = () => {
  return (
    <>
      {/* main intro */}
      <div className="relative bg-meet_black text-meet_white lg:w-full lg:h-[60rem] h-[50.75rem] flex justify-start bg-[url('../../public/img/main/main_visual.png')] bg-cover bg-center">
        <div className="w-full pt-80 bg-gradient-to-b from-gray-950/100 to-transparent">
          <div className="lg:px-[6.25rem] md:px-8 px-5 text-left">
            <div className="lg:text-[3.25rem] text-[1.5rem] font-bold lg:leading-[4.25rem] leading-9">
              모두가 주인공이 되는 공간 <br /> 소통하고, 공유하고, 소유하다.
            </div>
            <div className="mt-4 lg:text-[1rem] text-[0.875rem] text-meet_gray">
              만나고 싶은 순간, 지금 바로 밋밋하세요!
            </div>
            <button className="lg:mt-10 mt-5 lg:px-8 lg:py-5 px-6 py-3 bg-meet_pink font-bold text-white rounded-full">
              앱 다운로드
            </button>
          </div>
        </div>
      </div>

      {/* 실시간 영상통화 */}
      <div className="pt-32">
        <div className="lg:w-36 w-20">
          <img src="../../public/img/main/AO.png" />
        </div>
        <div className="text-meet_black font-bold lg:text-[3.25rem] text-[1.75rem]">
          실시간 영상통화
        </div>
        <div className="text-meet_text lg:text-[1.25rem] text-[0.875rem] mt-4 mb-8 lg:w-[26rem] w-[12.875rem]">
          지금 바로 연결하세요, 실시간으로 이루어지는 생생한 영상통화로 진짜
          소통을 경험해보세요.
        </div>
        <div>
          <img src="/img/main/Picture.png" className="hidden lg:block" />
          <img
            src="/img/main/Picture-1-m.png"
            className="block lg:hidden w-[20.875rem]"
          />
        </div>
      </div>

      {/* 일상 공유 */}
      <div className="pt-32 bg-meet_black">
        <div className="w-36">
          <img src="../../public/img/main/mugs.png" />
        </div>
        <div className="text-meet_gray font-bold lg:text-[3.25rem] text-[1.75rem]">
          일상 공유
        </div>
        <div className="text-meet_gray lg:text-[1.25rem] text-[0.875rem] mt-4 mb-8 lg:w-[26rem] w-[12.875rem]">
          당신의 특별한 순간들을 나눠보세요. 소소한 일상이 모두와 함께하는
          이야기가 됩니다.
        </div>
        <div>
          <img src="/img/main/Picture-2.png" className="hidden lg:block" />
          <img
            src="/img/main/Picture-2-m.png"
            className="block lg:hidden w-[20.875rem]"
          />
        </div>
      </div>

      {/* 채팅 */}
      <div className="pt-32">
        <div className="w-36">
          <img src="../../public/img/main/notifications.png" />
        </div>
        <div className="text-meet_black font-bold lg:text-[3.25rem] text-[1.75rem]">
          채팅
        </div>
        <div className="text-meet_text lg:text-[1.25rem] text-[0.875rem] mt-4 mb-8 lg:w-[26rem] w-[12.875rem]">
          지금 바로 연결하세요, 실시간으로 이루어지는 생생한 영상통화로 진짜
          소통을 경험해보세요.
        </div>
        <div>
          <img src="/img/main/Picture-3.png" className="hidden lg:block" />
          <img
            src="/img/main/Picture-3-m.png"
            className="block lg:hidden w-[20.875rem]"
          />
        </div>
      </div>

      {/* 일상 공유 */}
      <div className="pt-32 bg-meet_light_gray">
        <div className="w-36">
          <img src="../../public/img/main/Unlock.png" />
        </div>
        <div className="text-meet_black font-bold lg:text-[3.25rem] text-[1.75rem]">
          나만의 멤버십 서비스
        </div>
        <div className="text-meet_text lg:text-[1.25rem] text-[0.875rem] mt-4 mb-8 lg:w-[26rem] w-[12.875rem]">
          당신만의 특별한 상품과 경험을 만들어보세요. 원하는 것을 구독형
          멤버십으로 제공하며, 당신의 가치를 공유하세요.
        </div>
        <div>
          <img src="/img/main/Picture-4.png" className="hidden lg:block" />
          <img
            src="/img/main/Picture-4-m.png"
            className="block lg:hidden w-[20.875rem]"
          />
        </div>
      </div>
    </>
  );
};

export default MainComponent;
