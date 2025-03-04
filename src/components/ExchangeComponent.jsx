import { useState } from "react";

function ExchangeComponent() {
  const [isApply, setIsApply] = useState(true);

  return (
    <div>
      <div className="lg:mt-[10.625rem] md:mt-[10.625rem] mt-[8.75rem] text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
        포인트 환전
      </div>
      <div className="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-2 mb-8 w-full">
        인플루언서 활동 수익을 환전할 수 있어요
      </div>

      <div className="lg:px-[13.75rem] md:px-8 px-5 w-full lg:flex lg:gap-5 md:flex md:gap-5 flex-none">
        <div className="w-full border-meet_gray border p-5 flex items-center justify-between rounded-[0.75rem] shadow-[0px_12px_12px_rgba(54,49,189,0.02)] lg:mb-0 md:mb-0 mb-2">
          <span className="text-left font-medium text-meet_text text-[0.875rem] flex-1">
            보유중인 환전 가능 포인트
          </span>
          <span className="text-right font-bold text-meet_pink text-[1.25rem] flex-1">
            600,000P
          </span>
        </div>
        <div className="w-full border-meet_gray border p-5 flex items-center justify-between rounded-[0.75rem] shadow-[0px_12px_12px_rgba(54,49,189,0.02)]">
          <span className="text-left font-medium text-meet_text text-[0.875rem] flex-1">
            예상 수익금
          </span>
          <div>
            <span className="text-right font-bold text-meet_sodomy text-4 mr-3">
              469,980P
            </span>
            <button
              onClick={() => setIsApply(!isApply)}
              className="bg-meet_sodomy px-4 py-[0.375rem] rounded-[0.5rem] text-meet_white font-semibold text-[0.8125rem]"
            >
              환전신청
            </button>
          </div>
        </div>
      </div>

      {/* 수익금 내역 */}
      <div className="lg:px-[13.75rem] md:px-8 px-5 w-full mt-10">
        <span className="text-left text-[1.25rem] font-bold">수익금 내역</span>
        <div className="w-full bg-meet_gray h-[1px] mt-4"></div>
        {isApply ? (
          <div className="w-full text-center mt-[3.75rem]">
            <div className="text-[1.125rem] font-bold text-meet_black">
              아직까지 환전한 내역이 없습니다.
            </div>
            <div className="text-[0.8125rem] font-light text-meet_text mt-1">
              환전 가능한 포인트가 있으시다면 지금 바로 환전해 보세요!
            </div>
            <button
              onClick={() => setIsApply(!isApply)}
              className="bg-meet_sodomy py-3 px-[2.625rem] text-meet_white font-bold rounded-[0.5rem] mt-5"
            >
              환전신청
            </button>
          </div>
        ) : (
          <div className="w-full mt-1">
            <div>
              <div className="w-fit mt-7 bg-meet_pink font-semibold text-[0.75rem] text-meet_white px-2 py-1 rounded-[0.25rem] ml-0">
                진행중
              </div>
              <div className="mt-2">
                <span className="text-meet_black mr-1 font-medium">수익금</span>
                <span className="text-meet_blue font-bold">78,330원</span>
              </div>
              <div className="text-meet_text text-[0.75rem] mt-4 font-light">
                <span>#5894440</span>
                <span className="mx-2 text-meet_gray">&#183;</span>
                <span>주문 접수일 : 25.01.19 14:04</span>
                <span className="mx-2 text-meet_gray">&#183;</span>
                <span>100,000P</span>
              </div>
              <div className="w-full bg-meet_gray h-[1px] mt-3"></div>
            </div>
            <div>
              <div className="w-fit mt-7 bg-meet_sodomy font-semibold text-[0.75rem] text-meet_white px-2 py-1 rounded-[0.25rem] ml-0">
                환전완료
              </div>
              <div className="mt-2">
                <span className="text-meet_black mr-1 font-medium">수익금</span>
                <span className="text-meet_blue font-bold">468,980원</span>
              </div>
              <div className="text-meet_text text-[0.75rem] mt-4 font-light">
                <span>#5876927</span>
                <span className="mx-2 text-meet_gray">&#183;</span>
                <span>주문 접수일 : 25.01.14 09:54</span>
                <span className="mx-2 text-meet_gray">&#183;</span>
                <span>6 00,000P</span>
              </div>
              <div className="w-full bg-meet_gray h-[1px] mt-3"></div>
            </div>
          </div>
        )}
      </div>

      {/* 수익금 환전 안내 */}
      <div className="lg:px-[13.75rem] md:px-8 px-5 w-full mt-20 mb-20">
        <div className="bg-meet_light_gray rounded-[0.75rem] p-5">
          <div className="font-bold text-meet_sodomy">수익금 환전 안내</div>
          <div className="text-meet_text mt-2">
            <ul className="pl-2 space-y-2 text-[0.8125rem]">
              <li className="relative flex items-start gap-2">
                <span className="text-meet_text text-sm leading-none translate-y-[4px]">
                  •
                </span>
                <p className="flex-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
              <li className="relative flex items-start gap-2">
                <span className="text-meet_text text-sm leading-none translate-y-[4px]">
                  •
                </span>
                <p className="flex-1">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExchangeComponent;
