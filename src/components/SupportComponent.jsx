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
      <div className="relative bg-meet_black text-meet_white lg:w-full lg:h-[56.125rem] md:h-[56.125rem] h-[56.125rem] flex justify-start">
        {/* 이미지 (우측 정렬 & 아래로 8.125rem 튀어나오게 설정) */}
        <img
          src="./img/support/support_visual.png"
          className="absolute right-0 top-0 h-[calc(100%+8.125rem)] w-[37.25rem]"
        />

        {/* 그라데이션 (이미지 위에 덮기) */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/100 to-transparent z-10"></div>

        {/* 텍스트 & 버튼 (그라데이션 위에 위치) */}
        <div className="relative z-20 w-full lg:pt-80 md:pt-[23rem] pt-[17.25rem]">
          <div className="lg:px-[6.25rem] md:px-8 px-5 text-left">
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
      </div>

      {/* 이용 안내 */}
      <div className="pt-[12.5rem] md:px-8">
        <div className="bg-meet_pink text-meet_white text-[0.8125rem] font-semibold w-fit px-4 py-[0.375rem] rounded-2xl">
          Usage Information
        </div>
        <div className="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem] mb-2">
          이용 안내
        </div>
        <div className="lg:px-[13.75rem] md:px-8 px-5 w-full">
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
      </div>
      <div className="bg-meet_light_gray pt-[12.5rem] px-[6.25rem] w-full mt-[6.25rem] pb-[12.5rem]">
        <div className="bg-meet_pink text-meet_white text-[0.8125rem] font-semibold w-fit px-4 py-[0.375rem] rounded-2xl">
          News
        </div>
        <div className="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem] mb-2">
          공지사항
        </div>
        <div className="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-2 mb-8 w-full">
          밋밋의 새로운 소식을 알려드릴게요
        </div>
        {/* 게시물 박스 */}
        <div className="mt-20 flex items-center justify-between gap-6">
          <div className="bg-meet_white p-6 w-full rounded-[1.25rem] border border-meet_gray">
            <div className="w-full h-[13.8rem] bg-[url('./img/support/blog-1.png')] bg-cover bg-center rounded-[0.75rem]"></div>
            <div className="w-full">
              <div className="text-[1.5rem] font-bold mt-5">
                사회적 기업의 가치와 사회적 영향력
              </div>
              <p className="text-meet_text mt-3 w-full text-ellipsis line-clamp-2">
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
            <div className="w-full p-6 bg-meet_white flex items-center justify-between gap-[1.875rem] rounded-[1.25rem] border border-meet_gray">
              <div className="w-60 h-[8.75rem] bg-[url('./img/support/blog-2.png')] bg-cover bg-center rounded-[0.75rem]"></div>
              <div className="w-[19.25rem]">
                <div className="text-[1.5rem] w-full text-ellipsis line-clamp-1 font-bold">
                  자기 계발의 시작:5가지 효과적인 방법
                </div>
                <p className="text-meet_text mt-3 w-full text-ellipsis line-clamp-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived
                </p>
                <div className="font-normal text-meet_pink pt-8">read more</div>
              </div>
            </div>
            <div className="w-full p-6 bg-meet_white flex items-center justify-between gap-[1.875rem] rounded-[1.25rem] border border-meet_gray">
              <div className="w-60 h-[8.75rem] bg-[url('./img/support/blog-3.png')] bg-cover bg-center rounded-[0.75rem]"></div>
              <div className="w-[19.25rem]">
                <div className="text-[1.5rem] w-full text-ellipsis line-clamp-1 font-bold">
                  창의력을 끌어올리는 방법:아이들에게 좋은 놀이
                </div>
                <p className="text-meet_text mt-3 w-full text-ellipsis line-clamp-2">
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
    </>
  );
}

export default SupportComponent;
