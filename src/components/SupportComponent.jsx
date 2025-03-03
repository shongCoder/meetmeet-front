import { useState } from "react";

function SupportComponent() {
  // 각 항목의 상태를 개별적으로 관리하는 배열
  const [openIndex, setOpenIndex] = useState(null);

  // 클릭된 항목만 열리고, 이미 열려있는 경우 닫힘
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="relative w-full bg-meet_black text-meet_white lg:w-full lg:h-[56.125rem] md:h-[50.375rem] h-[50.75rem] flex flex-col items-center lg:px-[6.25rem] md:px-8 px-5">
        {/* 텍스트 & 버튼 (그라데이션 위에 위치) */}
        <div className="relative z-20 w-full lg:pt-80 md:pt-[16.1875rem] pt-[10rem]">
          <div className="text-left">
            <div className="lg:text-[3.25rem] md:text-[3.25rem] text-[1.5rem] font-bold lg:leading-[4.25rem] md:leading-[4.25rem] leading-9">
              모두가 주인공이 되는 공간 <br /> 소통하고, 공유하고, 소유하다.
            </div>
            <div className="mt-4 lg:text-[1rem] md:text-5 text-[0.875rem] text-meet_gray">
              만나고 싶은 순간, 지금 바로 밋밋하세요!
            </div>
            <button className="lg:mt-10 md:mt-10 mt-5 lg:px-8 lg:py-5 md:px-8 md:py-5 px-6 py-3 bg-meet_pink shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] font-bold text-white rounded-full">
              앱 다운로드
            </button>
          </div>
        </div>

        {/* 이미지 (웹/모바일 분기) */}
        <img
          src="./img/support/support_visual.png"
          className="absolute lg:right-0 lg:top-[-16rem] md:top-[-20rem] md:right-0 overflow-hidden
               lg:w-[37.25rem] md:w-[37.25rem] w-full hidden md:block overflow-hidden"
        />
        <div className="md:hidden mt-10 absolute bottom-0 px-5">
          <img
            src="./img/support/support_visual_mobile.png"
            className="h-auto object-cover"
          />
        </div>

        {/* 배경 그라데이션 (웹 & 태블릿: 기본 그라데이션, 모바일: 하단에서 시작) */}
        <div className="absolute inset-0 lg:bg-gradient-to-b md:bg-gradient-to-b w-full from-black/100 to-transparent bg-gradient-to-t z-10"></div>
      </div>

      {/* 이용 안내 */}
      <div className="lg:px-[6.25rem] md:px-8 px-5 lg:mt-[18.75rem] md:mt-[18.75rem] pt-[5rem]">
        <div className="bg-meet_pink text-meet_white lg:text-[0.8125rem] md:text-[0.8125rem] text-[0.625rem] font-semibold w-fit px-4 py-[0.375rem] rounded-2xl">
          Usage Information
        </div>
        <div className="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem] mb-2">
          이용 안내
        </div>
        <div className="lg:px-[13.75rem] w-full">
          {/* 아코디언 리스트 */}
          {[
            {
              title: "서비스 소개",
              content:
                "밋밋 MeetMeet 서비스는 단순한 플랫폼을 넘어, 사람과 사람을 연결하고 당신의 일상에 특별함을 더하는 공간힙니다. 다양한 기능을 통해 새로운 경험을 제안합니다.",
            },
            {
              title: "기능 소개",
              content:
                "밋밋 MeetMeet 서비스는 단순한 플랫폼을 넘어, 사람과 사람을 연결하고 당신의 일상에 특별함을 더하는 공간힙니다. 다양한 기능을 통해 새로운 경험을 제안합니다.",
            },
            {
              title: "회원가입 및 로그인",
              content:
                "밋밋 MeetMeet 서비스는 단순한 플랫폼을 넘어, 사람과 사람을 연결하고 당신의 일상에 특별함을 더하는 공간힙니다. 다양한 기능을 통해 새로운 경험을 제안합니다.",
            },
          ].map((item, index) => (
            <div key={index}>
              {/* 제목 (클릭하면 해당 항목만 열리고 닫힘) */}
              <div
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between mt-10 cursor-pointer"
              >
                <span className="text-left text-[1.5rem] font-semibold flex-1">
                  {item.title}
                </span>
                {openIndex === index ? (
                  <img src="./img/support/minus.png" className="w-6" />
                ) : (
                  <img src="./img/support/add.png" className="w-6" />
                )}
              </div>

              {/* 내용 (해당 항목이 열렸을 때만 표시) */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <p className="text-meet_text text-[1.25rem] mt-5 leading-8">
                  {item.content}
                </p>
              </div>

              <div className="w-full bg-meet_gray h-[1px] mt-6"></div>
            </div>
          ))}
        </div>
        <div className="text-meet_text text-center mt-9 lg:mb-[6.25rem] md:mb-[6.25rem]">
          <span>더 궁금하신 내용이 있나요?</span>
          <span className="font-medium text-meet_sodomy">문의하기</span>
        </div>
      </div>
      <div className="bg-meet_light_gray lg:pt-[12.5rem] md:pt-[12.5rem] pt-[3.75rem] lg:px-[6.25rem] md:px-8 px-5 w-full lg:mt-[6.25rem] md:mt-[6.25rem] mt-[3.75rem] lg:pb-[12.5rem] md:pb-[12.5rem] pb-[3.75rem]">
        <div className="bg-meet_pink text-meet_white lg:text-[0.8125rem] md:text-[0.8125rem] text-[0.625rem] font-semibold w-fit px-4 py-[0.375rem] rounded-2xl">
          News
        </div>
        <div className="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem] mb-2">
          공지사항
        </div>
        <div className="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-2 mb-8 w-full">
          밋밋의 새로운 소식을 알려드릴게요
        </div>
        {/* 게시물 박스 */}
        <div className="mt-20 flex lg:items-center lg:justify-between gap-6 md:flex-col flex-col lg:flex-row">
          <div className="bg-meet_white p-6 w-full rounded-[1.25rem] border border-meet_gray">
            <div className="w-full h-[13.8rem] bg-[url('/img/support/blog-1.png')] bg-cover bg-center rounded-[0.75rem]"></div>
            <div className="w-full">
              <div className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.25rem] text-ellipsis line-clamp-1 font-bold mt-5">
                사회적 기업의 가치와 사회적 영향력
              </div>
              <p className="text-meet_text mt-3 lg:text-[1rem] md:text-[1rem] text-[0.8125rem] w-full text-ellipsis lg:line-clamp-2 md:line-clamp-2 line-clamp-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="font-normal text-meet_pink pt-3">read more</div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 h-full">
            <div className="w-full p-6 bg-meet_white flex lg:items-center lg:justify-between md:items-center me:justify-between lg:flex-row md:flex-row flex-col gap-[1.875rem] rounded-[1.25rem] border border-meet_gray">
              <div className="lg:w-60 md:w-60 w-full lg:h-[8.8125rem] md:h-[8.8125rem] h-[13.8rem] bg-[url('/img/support/blog-2.png')] bg-cover bg-center rounded-[0.75rem] m-0"></div>
              <div className="lg:w-[19.25rem] md:w-[24.125rem] m-0">
                <div className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.25rem] w-full text-ellipsis line-clamp-1 font-bold">
                  자기 계발의 시작:5가지 효과적인 방법
                </div>
                <p className="text-meet_text mt-3 w-full text-ellipsis lg:line-clamp-2 md:line-clamp-2 line-clamp-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived
                </p>
                <div className="font-normal text-meet_pink pt-8">read more</div>
              </div>
            </div>
            <div className="w-full p-6 bg-meet_white flex lg:items-center lg:justify-between md:items-center me:justify-between lg:flex-row md:flex-row flex-col gap-[1.875rem] rounded-[1.25rem] border border-meet_gray">
              <div className="lg:w-60 md:w-60 w-full lg:h-[8.8125rem] md:h-[8.8125rem] h-[13.8rem] bg-[url('/img/support/blog-3.png')] bg-cover bg-center rounded-[0.75rem] m-0"></div>
              <div className="lg:w-[19.25rem] md:w-[24.125rem] m-0">
                <div className="lg:text-[1.5rem] md:text-[1.5rem] text-[1.25rem] w-full text-ellipsis line-clamp-1 font-bold">
                  창의력을 끌어올리는 방법:아이들에게 좋은 놀이
                </div>
                <p className="text-meet_text mt-3 w-full text-ellipsis lg:line-clamp-2 md:line-clamp-2 line-clamp-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived
                </p>
                <div className="font-normal text-meet_pink pt-8">read more</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-[12.5rem] md:pt-[12.5rem] pt-[3.75rem] lg:px-[6.25rem] md:px-8 px-5 w-full ">
        <div className="">
          <img
            src="./img/support/AO.png"
            className="lg:w-[6.25rem] md:w-[6.25rem] w-20"
          />
        </div>
        <div className="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem] mb-2">
          자주 묻는 질문
        </div>
        <div className="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-2 mb-8 w-full">
          Frequently Asked Questions
        </div>
        <div className="lg:px-[13.75rem] w-full">
          {/* 아코디언 리스트 */}
          {[
            {
              title: "가입은 어디서 하나요?",
              content:
                "밋밋 MeetMeet 서비스는 단순한 플랫폼을 넘어, 사람과 사람을 연결하고 당신의 일상에 특별함을 더하는 공간힙니다. 다양한 기능을 통해 새로운 경험을 제안합니다.",
            },
            {
              title: "미성년자도 이용이 가능한가요?",
              content:
                "밋밋 MeetMeet 서비스는 단순한 플랫폼을 넘어, 사람과 사람을 연결하고 당신의 일상에 특별함을 더하는 공간힙니다. 다양한 기능을 통해 새로운 경험을 제안합니다.",
            },
            {
              title: "탈퇴 어떻게 하나요?",
              content:
                "앱 > 설정 > 탈퇴하기 메뉴를 통해서 탈퇴하실 수 있습니다.",
            },
          ].map((item, index) => (
            <div key={index}>
              {/* 제목 (클릭하면 해당 항목만 열리고 닫힘) */}
              <div
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between mt-10 cursor-pointer"
              >
                <span className="text-left text-[1.5rem] font-semibold flex-1">
                  {item.title}
                </span>
                {openIndex === index ? (
                  <img src="./img/support/minus.png" className="w-6" />
                ) : (
                  <img src="./img/support/add.png" className="w-6" />
                )}
              </div>

              {/* 내용 (해당 항목이 열렸을 때만 표시) */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <p className="text-meet_text text-[1.25rem] mt-5 leading-8">
                  {item.content}
                </p>
              </div>

              <div className="w-full bg-meet_gray h-[1px] mt-6"></div>
            </div>
          ))}
        </div>
        <div className="text-meet_text text-center mt-9 lg:mb-[6.25rem] md:mb-[6.25rem] mb-[3.75rem]">
          <span>더 궁금하신 내용이 있나요?</span>
          <span className="font-medium text-meet_sodomy">문의하기</span>
        </div>
      </div>
    </>
  );
}

export default SupportComponent;
