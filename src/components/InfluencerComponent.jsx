import { useEffect, useRef, useState } from "react";
import BestIcon from "/img/influencer/best-icon.png";
import RankingImg from "/img/influencer/ranking.png";
import RankingMobImg from "/img/influencer/ranking-m.png";
import KaKaoIcon from "/img/influencer/link/kakao.svg";
import WhatsIcon from "/img/influencer/link/whats.svg";
import TelegramIcon from "/img/influencer/link/telegram.svg";
import OfficeBg1 from "/img/influencer/office/office-bg-1.png";
import OfficeBg2 from "/img/influencer/office/office-bg-2.png";
import OfficeBg3 from "/img/influencer/office/office-bg-3.png";
import OfficeBg4 from "/img/influencer/office/office-bg-4.png";

const KAKAO_LINK = "https://open.kakao.com/o/sfxBQ54h";
const TELEGRAM_LINK = "https://t.me/@meet2_support";
const WHATS_LINK = "https://wa.me/821056929587";

// 이미지 리스트
const officeItems = [
  { bg: OfficeBg1, tag: "국내 오피스", title: "탕비실", color: "bg-meet_pink" },
  { bg: OfficeBg2, tag: "국내 오피스", title: "회의실", color: "bg-meet_pink" },
  { bg: OfficeBg3, tag: "국내 오피스", title: "입구 파사드", color: "bg-meet_pink" },
  { bg: OfficeBg4, tag: "해외 지사", title: "오피스", color: "bg-[#0EC167]" },
];

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
      { threshold: 0.4 },
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const paddedCount = count.toString().padStart(3, "0");
  const digits = paddedCount.split("");

  // === 무한루프 스크롤 관련 ===
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const speed = 0.6;
  const LOOP_COPY_COUNT = 3;

  // === 무한 루프 실행 ===
  useEffect(() => {
    const stop = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const track = trackRef.current;
    if (!track || !track.firstChild) return;

    posRef.current = 0;
    track.style.transform = `translateX(${posRef.current}px)`;

    const step = () => {
      posRef.current -= speed;
      const singleWidth = track.scrollWidth / LOOP_COPY_COUNT;

      if (Math.abs(posRef.current) >= singleWidth) {
        posRef.current = 0;
      }

      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return stop;
  }, []);


  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full md:px-8 px-5 lg:mt-[10.625rem] lg:bg-[url('/img/influencer/bg_img.png')] md:bg-[url('/img/influencer/bg_img_tab.png')] bg-[url('/img/influencer/bg_img_mob.png')] bg-no-repeat lg:h-[180rem] md:h-[180rem] h-[180rem] pt-20 bg-[length:100%_auto]">
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
            className="lg:w-[50rem] md:w-full w-full lg:h-[17.5rem] md:h-[17.5rem] lg:px-[2.5rem] md:px-[2.5rem] px-10 lg:py-[2.5rem] md:py-[2.5rem] py-8
             bg-meet_white rounded-[2.5rem] flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-center
             lg:justify-between md:justify-between justify-center gap-6 border border-meet_gray"
          >
            <div className="p-0 m-0 lg:text-left md:text-left text-center">
              <div className="text-[0.8125rem] text-meet_white font-bold px-3 py-3 bg-meet_pink rounded-full w-auto inline-block shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)]">
                맛스타 1기 모집
              </div>
              <p className="text-meet_black font-extrabold lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] leading-8 mt-3">
                <span className="block">밋밋에서 여성회원님을</span>
                <span className="block">공주님 여왕님으로 모시겠습니다!</span>
              </p>
              <p className="text-[1.125rem] leading-[1.75rem] text-meet_menu">
                밋밋셀럽1기에 신청하시면 100명 한정으로<br />
                일반 여성회원보다 <span className="font-semibold text-meet_pink">2배의 포인트를 즉시 지급</span>합니다.
              </p>
              <p className="text-meet_text text-[0.8125rem] mt-2">
                (모집 마감일 25년 12월 31일까지)
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
            className="lg:w-[50rem] md:w-full w-full lg:h-[17.5rem] md:h-auto h-auto lg:px-[2.5rem] md:px-[2.5rem] px-10 lg:py-[2.5rem] md:py-[2.5rem] py-8
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
              <div className="text-[0.8125rem] text-meet_white font-bold px-3 py-3 bg-meet_pink rounded-full w-auto inline-block shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)]">
                밋밋 뇌물
              </div>

              <p className="text-meet_black font-extrabold lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] leading-8 mt-3">
                <span className="block">시급 54,000원</span>
                <span className="block">밋밋 1기님께 드리는 뇌물</span>
              </p>

              <p className="text-[1.125rem] leading-[1.75rem] text-meet_menu">
                일반 여성도 한시간 비대면 영상채팅만 해도 54,000원<br />
                <span className="font-semibold text-meet_pink">밋밋셀럽 1기는 여기에 두배 금액인 108,000원</span> 드립니다.<br />
                출금 신청하시면 익일 바로지급
              </p>

              <p className="text-meet_text text-[0.8125rem] mt-2">
                단 2배포인트 지급은 2026년 03월 31일 까지만 진행합니다
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
            className="lg:w-[50rem] md:w-full w-full lg:h-[17.5rem] md:h-auto h-auto lg:px-[2.5rem] md:px-[2.5rem] px-10 lg:py-[2.5rem] md:py-[2.5rem] py-8
             bg-meet_white rounded-[2.5rem] flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-center
             lg:justify-between md:justify-between justify-center lg:gap-0 md:gap-0 gap-6 mt-10 border border-meet_gray"
          >
            <div className="p-0 m-0 lg:text-left md:text-left text-center">
              <div className="text-[0.8125rem] text-meet_white font-bold px-3 py-3 bg-meet_pink rounded-full w-auto inline-block shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)]">
                우대 모집
              </div>


              <p className="text-meet_black font-extrabold lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] leading-8 mt-3">
                <span className="block">밋밋에서 이런</span>
                <span className="block">여성분을 우대합니다</span>
              </p>

              <p className="text-meet_menu text-[1.125rem] font-semibold mt-2">
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

      <div className="w-full lg:py-[5rem] md:py-[2.5rem] py-[2.5rem] bg-[url('/img/influencer/bg-gradient.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex items-center justify-center font-bold text-[1.25rem] text-white mb-6 text-center">
          밋밋 셀럽 1기 신청자 집계
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between mb-6">
          {/* 선 */}
          <div className="md:flex-grow md:h-[2px] h-[3rem] md:w-auto w-[2px] bg-white opacity-40 md:mr-6 md:mb-0 mb-4"></div>
          <div className="flex md:flex-row flex-col items-center gap-6 font-bold text-white">
            <span className="lg:text-[2.5rem] md:text-[1.25rem] text-[1.25rem]">지금까지 밋밋셀럽 1기</span>
            <div className="flex items-center gap-2 text-[2.5rem]" ref={counterRef}>
              {digits.map((digit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center tomorrow font-[600] w-[4rem] h-[5.5rem] rounded-[0.75rem] bg-[linear-gradient(to_bottom,_#4b4b4b_50%,_#171717_51%)]"
                >
                  {digit}
                </div>
              ))}
            </div>
            <span className="lg:text-[2.5rem] md:text-[1.25rem] text-[1.25rem]">명이 신청해 주셨습니다.</span>
          </div>
          {/* 선 */}
          <div className="md:flex-grow md:h-[2px] h-[3rem] md:w-auto w-[2px] bg-white opacity-40 md:ml-4 md:mt-0 mt-4"></div>
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
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-2 text-meet_black lg:text-[2rem] md:text-[1.5rem] text-[1.25rem] font-[700] md:leading-[2.75rem] leading-[2rem] mb-3">
            <div>이달의 베스트 7공주</div>
            <div>출금 랭킹 현황</div>
          </div>
          <div className="text-meet_text md:text-[1rem] text-[0.8125rem] font-[500] leading-6 mb-5">
            지금 바로 밋밋을 시작하세요
          </div>
          {/* PC / 태블릿 (md 이상) */}
          <img
              src={RankingImg}
              className="hidden md:block"
              alt="ranking"
          />

          {/* 모바일 (md 미만) */}
          <img
              src={RankingMobImg}
              className="block md:hidden"
              alt="ranking mobile"
          />
        </div>
      </div>
      {/* 이달의 베스트 출금현황 */}

      <div className="w-full flex flex-col justify-center items-center py-[6.25rem] md:px-8 px-5 bg-[linear-gradient(to_bottom,#171717_0%,#1A1A1F_50%,#171717_100%)]">
        <div className="py-2 px-3 bg-meet_pink shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] rounded-[100px] text-[0.875rem] font-bold text-white leading-[20px] mb-4">
          How to Apply
        </div>
        <div className="lg:text-[2rem] md:text-[1.5rem] text-[1.25rem] font-[700] lg:leading-[3.25rem] md:leading-[2.25rem] leading-[2rem] text-center mb-5">
          <div className="bg-[linear-gradient(135deg,#FF9256_20%,#FF4062_80%)] bg-clip-text text-transparent">
            중대통신앱으로 신청 가능,
          </div>
          <div className="bg-[linear-gradient(135deg,#FF9256_20%,#FF4062_80%)] bg-clip-text text-transparent">
            공주님들을 정성껏 모시는 집사가 친절히 응대해드립니다.
          </div>
        </div>
        <div className="lg:text-[1.125rem] md:text-[1rem] text-[0.8125rem] leading-[1.75rem] text-[#c8c8c8] text-center font-[200] mb-5">
          <div>
            신청 전에 먼저 앱을 설치하시고,{" "}
            <span className="font-[400] text-white">
              사용하시는 앱의 아이디
            </span>
            를 저희 밋밋 집사에게 전달해주시면
          </div>
          <div className="font-[400] text-white">
            뉴 밋밋셀럽 1기로 바로 승천하실 수 있습니다.
          </div>
        </div>
        <div className="flex items-center md:gap-[2rem] gap-[1.5rem] py-[2rem] md:px-[10rem] mx-0">
          <a
            href={KAKAO_LINK}
            target="_blank"
            className="flex flex-col justify-center items-center gap-3"
          >
            <img src={KaKaoIcon} className="md:w-[4.75rem] w-[3rem] md:h-[4.75rem] h-[3rem]" />
            <div className="md:text-[1rem] text-[0.8125rem] font-bold leading-[1.5rem] text-white whitespace-nowrap">
              밋밋오피셜<br />
              카톡 채널 문의
            </div>
          </a>
          <a
            href={WHATS_LINK}
            target="_blank"
            className="flex flex-col justify-center items-center gap-3"
          >
            <img src={WhatsIcon} className="md:w-[4.75rem] w-[3rem] md:h-[4.75rem] h-[3rem]" />
            <div className="md:text-[1rem] text-[0.8125rem] font-bold leading-[1.5rem] text-white whitespace-nowrap">
              밋밋오피셜<br />
              와츠 앱 문의
            </div>
          </a>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            className="flex flex-col justify-center items-center gap-3"
          >
            <img src={TelegramIcon} className="md:w-[4.75rem] w-[3rem] md:h-[4.75rem] h-[3rem]" />
            <div className="md:text-[1rem] text-[0.8125rem] font-bold leading-[1.5rem] text-white whitespace-nowrap">
              밋밋오피셜<br />
              텔레그램 문의
            </div>
          </a>
        </div>
      </div>
      {/* 인플루언서 신청 방법 */}

      <div className="w-full flex flex-col items-center justify-center py-[6.25rem]">
        <div className="lg:w-[50rem] md:block flex flex-col justify-center items-center md:w-full mb-10 lg:px-0 md:px-[2rem] px-[1.25rem] px-0">
          <div className="py-2 px-3 bg-meet_pink inline-block shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] rounded-[100px] text-[0.875rem] font-bold text-white leading-[20px] mb-4">
            Global Marriage Consulting Agency
          </div>
          <div className="flex md:flex-row flex-col justify-between md:items-end items-center w-full">
            <div className="lg:text-[1.75rem] md:text-[1.5rem] text-[1.5rem] md:text-left text-center font-bold leading-[2.5rem] text-meet_black text-left m-0">
              <div>글로벌 결혼 미팅</div>
              <div>전문에이전시</div>
            </div>
            <div className="md:block hidden text-[1rem] text-meet_text leading-[1.5rem] md:text-right text-cneter m-0">
              <div>
                저희 (주)신아국제교류센터한국지사 글로벌 결혼 미팅 전문에이젼시
              </div>
              <div>로 시작해서 각종 만남 커뮤니티를 운영중입니다.</div>
            </div>
            <div className="md:hidden block flex justify-center items-center text-[1rem] text-meet_text leading-[1.5rem] md:text-right text-cneter m-0">
              <div>
                저희 (주)신아국제교류센터한국지사 글로벌 결혼 미팅 전문에이젼시로 시작해서 각종 만남 커뮤니티를 운영중입니다.</div>
            </div>
          </div>
        </div>
        {/* 타이틀 */}

        {/* === 무한루프 (모바일 포함) === */}
        <div className="w-full flex justify-center overflow-hidden">
            <div
                ref={trackRef}
                className="flex gap-6 will-change-transform"
                style={{
                  width: "max-content",
                  whiteSpace: "nowrap",
                  transform: "translateX(0px)"
                }}
            >
              {Array.from({ length: LOOP_COPY_COUNT })
                .flatMap(() => officeItems)
                .map((item, idx) => (
                  <div
                      key={idx}
                      className="relative w-[11.25rem] md:w-[22.5rem] md:p-4 p-2 h-[11.25rem] md:h-[22.5rem] border border-[#F1F1F1]
                     md:rounded-[1rem] rounded-[0.5rem] overflow-hidden shadow-[0_24px_20px_rgba(0,0,0,0.04)]
                     bg-cover bg-center bg-no-repeat shrink-0"
                      style={{ backgroundImage: `url(${item.bg})` }}
                  >
                    <div className="w-full h-full">
                      <div className={`${item.color} inline-block md:py-2 py-[3px] md:px-3 px-[5px] md:rounded-[6.25rem] rounded-[2.75rem] md:leading-[1.25rem] leading-[0.625rem] shadow-[inset_4px_4px_14px_rgba(255,255,255,0.2)]`}>
                        <span className="text-white md:text-[0.875rem] text-[0.5rem] md:font-bold">{item.tag}</span>
                      </div>
                      <div className="absolute md:bottom-4 bottom-2 text-white md:font-bold md:text-[1.25rem] text-[0.5rem]">
                        {item.title}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
        </div>

      </div>
      {/* 글로벌 결혼 미팅 전문에이전시 */}
    </div>
  );
}

export default InfluencerComponent;
