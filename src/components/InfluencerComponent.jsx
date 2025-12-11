import { useEffect, useRef, useState } from "react";
import BestIcon from "/img/influencer/best-icon.png"
import RankingImg from "/img/influencer/ranking.png"
import KaKaoIcon from "/img/influencer/link/kakao.svg"
import WhatsIcon from "/img/influencer/link/whats.svg"
import TelegramIcon from "/img/influencer/link/telegram.svg"

const KAKAO_LINK = "https://open.kakao.com/o/sfxBQ54h"
const WHATS_LINK = "https://t.me/@meet2_support"
const TELEGRAM_LINK = "https://wa.me/821056929587"

function InfluencerComponent() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  /* 신청자 집계 숫자 올라가는 애니메이션 */
  useEffect(() => {
    if (!counterRef.current || hasAnimated) return;

    const targetValue = 63;
    const duration = 800;

    const startAnimation = () => {
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const currentValue = Math.floor(progress * targetValue);
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetValue);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const paddedCount = count.toString().padStart(3, "0");
  const digits = paddedCount.split("");

  return (
    <div>
      <div className="w-full md:px-8 px-5 lg:mt-[10.625rem] lg:bg-[url('/img/influencer/bg_img.png')] md:bg-[url('/img/influencer/bg_img_tab.png')] bg-[url('/img/influencer/bg_img_mob.png')] bg-no-repeat lg:h-[180rem] md:h-[180rem] h-[170rem] pt-20 bg-[length:100%_auto]">
        <img
          src="./img/influencer/target.png"
          className="lg:w-[7.5rem] md:w-[7.5rem] w-[6.25rem]"
        />
        <div className="text-meet_text lg:text-[1.5rem] md:text-[1.5rem] text-[1rem] text-center mt-2">
          저희 밋밋을 더 빛나게 해줄
        </div>
        <img
          src="./img/influencer/title.png"
          className="w-[56.25rem] mt-8 lg:block md:block hidden"
        />
        <img
          src="./img/influencer/title_mob.png"
          className="w-[18.375rem] mt-5 lg:hidden md:hidden block"
        />
        <div className="flex justify-center lg:mt-[3.75rem] md:mt-[3.75rem] mt-8 relative z-10">
          <button className="bg-meet_pink hover:bg-meet_pink_hover lg:px-8 md:px-8 px-6 lg:py-5 md:py-5 py-3 shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] text-meet_white font-bold rounded-full">
            인플루언서 지원하기
          </button>
        </div>
        <div className="lg:mt-[9rem] md:mt-[9rem] mt-7">
          <img src="./img/influencer/girls.png" className="w-[50rem]" />
        </div>

        {/* 박스 모음 */}
        <div className="mt-[-1rem] relative z-10">
          <div
            style={{ boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.04)" }}
            className="lg:w-[50rem] md:w-full w-full lg:h-[17.5rem] md:h-[17.5rem] lg:px-[3.75rem] md:px-[3.75rem] px-10 lg:py-5 md:py-5 py-8
             bg-meet_white rounded-[2.5rem] flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-center
             lg:justify-between md:justify-between justify-center gap-6 border border-meet_gray"
          >
            <div className="p-0 m-0 lg:text-left md:text-left text-center">
              <div className="text-[0.75rem] text-meet_white font-bold px-3 py-1 bg-meet_pink rounded-full w-auto inline-block">
                맛스타 1기 모집
              </div>
              <p className="text-meet_black font-extrabold lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] leading-8 mt-3">
                <span className="block">밋밋에서 여성회원님을</span>
                <span className="block">공주님 여왕님으로 모시겠습니다!</span>
              </p>
              <p className="text-meet_text text-[0.8125rem] mt-2">
                25년 4월 1일에서 30일 한달 선착순 300명
              </p>
            </div>
            <div className="p-0 m-0 flex justify-center">
              <img
                src="./img/influencer/box-img-1.png"
                className="lg:w-auto md:w-auto w-[80%]"
              />
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.04)" }}
            className="lg:w-[50rem] md:w-full w-full lg:h-[17.5rem] md:h-auto h-auto lg:px-[3.75rem] md:px-[3.75rem] px-10 lg:py-5 md:py-5 py-8
             bg-meet_white rounded-[2.5rem] flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-center
             lg:gap-[3.75rem] md:gap-[3.75rem] gap-6 mt-10 border border-meet_gray"
          >
            <div className="p-0 m-0 flex justify-center lg:block md:block hidden">
              <img
                src="./img/influencer/box-img-2.png"
                className="lg:w-auto md:w-auto w-[80%]"
              />
            </div>

            <div className="p-0 m-0 lg:text-left md:text-left text-center">
              <div className="text-[0.75rem] text-meet_white font-bold px-3 py-1 bg-meet_pink rounded-full w-auto inline-block">
                밋밋 뇌물
              </div>

              <p className="text-meet_black font-extrabold lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] leading-8 mt-3">
                <span className="block">시급 54,000원</span>
                <span className="block">밋밋 1기님께 드리는 뇌물</span>
              </p>

              <p className="text-meet_text text-[0.8125rem] mt-2">
                영통 활동시 누적 2시간만 되어도 십만원 익일 지급
              </p>
            </div>

            <div className="p-0 m-0 flex justify-center lg:hiddem md:hidden block">
              <img
                src="./img/influencer/box-img-2.png"
                className="lg:w-auto md:w-auto w-[80%]"
              />
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.04)" }}
            className="lg:w-[50rem] md:w-full w-full lg:h-[17.5rem] md:h-auto h-auto lg:px-[3.75rem] md:px-[3.75rem] px-10 lg:py-5 md:py-5 py-8
             bg-meet_white rounded-[2.5rem] flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-center
             lg:justify-between md:justify-between justify-center lg:gap-0 md:gap-0 gap-6 mt-10 border border-meet_gray"
          >
            <div className="p-0 m-0 lg:text-left md:text-left text-center">
              <div className="text-[0.75rem] text-meet_white font-bold px-3 py-1 bg-meet_pink rounded-full w-auto inline-block">
                우대 모집
              </div>

              <p className="text-meet_black font-extrabold lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] leading-8 mt-3">
                <span className="block">밋밋에서 이런</span>
                <span className="block">여성분을 우대합니다</span>
              </p>

              <p className="text-meet_text text-[0.875rem] font-semibold mt-2">
                #출근 없이 돈벌고 싶은분
                <br />
                #투잡하고 싶은분
              </p>

              <p className="text-meet_text text-[0.8125rem] tracking-tight mt-2">
                #사교적이고 쾌활한 성격 #공감력과 배려심많은분
                <br />
                #우울한분 #심심한분 #능력있는 남성을 친구로
                <br />
                #외국에 사는 한국남성과 친구하기 #나이트 안가고 남친만들기
              </p>
            </div>

            <div className="p-0 m-0 flex justify-center">
              <img
                src="./img/influencer/box-img-3.png"
                className="lg:w-auto md:w-auto w-[80%]"
              />
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.04)" }}
            className="bg-meet_white rounded-[2.5rem] lg:w-[50rem] md:w-full lg:px-0 md:px-0 px-10 py-10 flex flex-col justify-center mt-10 border border-meet_gray"
          >
            <div className="text-[0.75rem] text-meet_white font-bold px-3 py-1 bg-meet_pink rounded-full w-auto inline-block">
              meetmeet
            </div>
            <p className="text-meet_black font-extrabold text-[1.5rem] leading-8 mt-5 text-center">
              밋밋은 건강한 글로벌
              <br />
              성인커뮤니티 플랫폼 입니다.
            </p>
            <p className="text-meet_text text-[0.8125rem] mt-2 text-center">
              지금 바로 밋밋을 시작하세요
            </p>
            <img src="./img/influencer/chat.png" className="w-[22rem] mt-10" />
            {/*<button className="bg-meet_pink hover:bg-meet_pink_hover text-meet_white font-bold text-[0.8125rem] rounded-[0.5rem] lg:w-[22rem] md:w-[22rem] w-full py-3 text-center mx-auto">*/}
            {/*  신청하기*/}
            {/*</button>*/}
          </div>
        </div>
      </div>

      <div
          className="py-[5rem] bg-[url('/img/influencer/bg-gradient.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex items-center justify-center font-bold text-[1.25rem] text-white mb-6 text-center">
          밋밋 셀럽 1기 신청자 집계
        </div>
        <div className="flex items-center justify-between mb-6">
          {/* 선 */}
          <div className="flex-grow h-[2px] bg-white opacity-40 mr-6"></div>
          <div className="flex items-center gap-6 font-bold text-[2.5rem] text-white">
            <span>지금까지 밋밋셀럽 1기</span>
            <div className="flex items-center gap-2" ref={counterRef}>
              {digits.map((digit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center tomorrow font-[600] w-[4rem] h-[5.5rem] rounded-[0.75rem] bg-[linear-gradient(to_bottom,_#4b4b4b_50%,_#171717_51%)]"
                >
                  {digit}
                </div>
              ))}
            </div>
            <span>명이 신청해 주셨습니다.</span>
          </div>
          {/* 선 */}
          <div className="flex-grow h-[2px] bg-white opacity-40 ml-4"></div>
        </div>
        <div className="flex items-center justify-center text-[1rem] text-[#F1F1F1] text-center">
          2025. 12월 1일 09:00 기준
        </div>
      </div>
      {/* --신청자 집계 */}

      <div className="py-[6.25rem] md:px-8 px-5">
        <div
            style={{ boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.04)" }}
            className="bg-meet_white rounded-[2.5rem] lg:w-[50rem] md:w-full lg:px-0 md:px-0 px-10 py-10 flex flex-col justify-center mt-10 border border-meet_gray"
        >
          <img src={BestIcon} className="w-[6.25rem] h-[6.25rem] mb-4" />
          <div className="py-2 px-3 bg-meet_pink shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] rounded-[100px] text-[0.875rem] font-bold text-white leading-[20px] mb-4">
            Best of the Month
          </div>
          <div className="text-meet_black text-[2rem] font-[700] leading-[2.75rem] mb-3">이달의 베스트 7공주 출금 랭킹 현황</div>
          <div className="text-meet_text text-[1rem] font-[500] leading-6 mb-5">지금 바로 밋밋을 시작하세요</div>
          <img className="" src={RankingImg} />
        </div>
      </div>
      {/* 이달의 베스트 출금현황 */}

      <div className="flex flex-col justify-center items-center py-[6.25rem] md:px-8 px-5 bg-[linear-gradient(to_bottom,#171717_0%,#1A1A1F_50%,#171717_100%)]">
        <div className="py-2 px-3 bg-meet_pink shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] rounded-[100px] text-[0.875rem] font-bold text-white leading-[20px] mb-4">
          How to Apply
        </div>
        <div className="text-[2rem] font-[700] leading-[3.25rem] text-center mb-5">
          <div className="bg-[linear-gradient(135deg,#FF9256_20%,#FF4062_80%)] bg-clip-text text-transparent">
            원하시는 소통앱으로 신청해주시면,
          </div>
          <div className="bg-[linear-gradient(135deg,#FF9256_20%,#FF4062_80%)] bg-clip-text text-transparent">
            공주님들을 정성껏 모시는 집사가 친절히 응대해드립니다.
          </div>
        </div>
        <div className="text-[1.125rem] leading-[1.75rem] text-[#c8c8c8] text-center font-[200] mb-5">
          <div>신청 전에 먼저 앱을 설치하시고, <span className="font-[400] text-white">사용하시는 앱의 아이디</span>를 저희 밋밋 집사에게 전달해주시면</div>
          <div className="font-[400] text-white">뉴 밋밋셀럽 1기로 바로 승천하실 수 있습니다.</div>
        </div>
        <div className="flex justify-between gap-[2rem] py-[2rem] px-[10rem]">
          <a href={KAKAO_LINK} target="_blank" className="flex flex-col justify-center items-center gap-3">
            <img src={KaKaoIcon} />
            <span className="text-[1rem] font-bold leading-[1.5rem] text-white">카톡 채널 문의</span>
          </a>
          <a href={WHATS_LINK} target="_blank" className="flex flex-col justify-center items-center gap-3">
            <img src={WhatsIcon} />
            <span className="text-[1rem] font-bold leading-[1.5rem] text-white">와츠 앱 문의</span>
          </a>
          <a href={TELEGRAM_LINK} target="_blank" className="flex flex-col justify-center items-center gap-3">
            <img src={TelegramIcon} />
            <span className="text-[1rem] font-bold leading-[1.5rem] text-white">텔레그램 문의</span>
          </a>
        </div>
      </div>
      {/* 인플루언서 신청 방법 */}

      <div className="py-[6.25rem] md:px-8 px-5 flex justify-center items-center">
        <div className="lg:w-[50rem] md:w-full">
          <div className="py-2 px-3 bg-meet_pink inline-block shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] rounded-[100px] text-[0.875rem] font-bold text-white leading-[20px] mb-4">
            Global Marriage Consulting Agency
          </div>
          <div className="flex justify-between items-end w-full">
            <div className="text-[1.75rem] font-bold leading-[2.5rem] text-meet_black text-left m-0">
              <div>글로벌 결혼 미팅</div>
              <div>전문에이전시</div>
            </div>
            <div className="text-[1rem] text-meet_text leading-[1.5rem] text-right m-0">
              <div>저희 (주)신아국제교류센터한국지사 글로벌 결혼 미팅 전문에이젼시</div>
              <div>로 시작해서 각종 만남 커뮤니티를 운영중입니다.</div>
            </div>
          </div>
        </div>
        {/* 타이틀 */}

        <div>
          <ul></ul>
        </div>

      </div>
      {/* 글로벌 결혼 미팅 전문에이전시 */}

    </div>
  );
}

export default InfluencerComponent;
