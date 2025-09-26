import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {useEffect, useRef} from "react";

const MainComponent = () => {

  const swiperRef = useRef(null);

  useEffect(() => {
    const headerHeight = 110;
    const swiperEl = document.querySelector(".swiper");
    if (!swiperEl) return;

    const swiperTop = swiperEl.offsetTop;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const swiper = swiperRef.current;
      if (!swiper) return;

      // Swiper 전 → 비활성화, body 스크롤만
      if (scrollY + headerHeight < swiperTop) {
        swiper.mousewheel.disable();
        document.body.style.overflow = "auto";
      }
      // Swiper 영역 안 → 활성화
      else {
        // 단, 마지막 슬라이드가 아니어야 함
        if (!swiper.isEnd) {
          swiper.mousewheel.enable();
          document.body.style.overflow = "hidden";
        }
      }
    };

    const onWheel = (e) => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      // Swiper 맨 아래에서 더 내릴 때 → Swiper 비활성화, body 스크롤만
      if (swiper.isEnd && e.deltaY > 0) {
        swiper.mousewheel.disable();
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", onScroll);
    swiperEl.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", onScroll);
      swiperEl.removeEventListener("wheel", onWheel);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
  <>
    {/* main intro */}
    <div className="relative bg-meet_black text-meet_white lg:w-full lg:h-[60rem] md:h-[64rem] h-[50.75rem] flex justify-start bg-[url('/img/main/main_visual.png')] bg-cover bg-center">
      <div className="w-full lg:pt-80 md:pt-[23rem] pt-[17.25rem] bg-gradient-to-b from-gray-950/100 to-transparent d">
        <div className="lg:px-[6.25rem] md:px-8 px-5 text-left">
          <div className="lg:text-[3.25rem] md:text-[3.25rem] text-[1.5rem] font-bold lg:leading-[4.25rem] md:leading-[4.25rem] leading-9">
            모두가 주인공이 되는 공간 <br /> 소통하고, 공유하고, 소유하다.
          </div>
          <div className="mt-4 lg:text-[1rem] md:text-5 text-[0.875rem] text-meet_gray">
            만나고 싶은 순간, 지금 바로 밋밋하세요!
          </div>
          <NavLink to="/download">
            <button className="lg:mt-10 md:mt-10 mt-5 lg:px-8 lg:py-5 md:px-8 md:py-5 px-6 py-3 bg-meet_pink hover:bg-meet_pink_hover shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] font-bold text-white rounded-full">
              앱 다운로드
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={{ releaseOnEdges: true }}
      modules={[Mousewheel, Pagination]}
      style={{ height: "1108px" }}
      pagination={{
            clickable: true
          }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        swiper.mousewheel.disable(); // 초기엔 비활성화
      }}
      onReachEnd={(swiper) => {
        // 마지막 슬라이드 → 강제로 비활성화 + body 스크롤
        swiper.mousewheel.disable();
        document.body.style.overflow = "auto";
      }}
  >

      <SwiperSlide>
        {/* 실시간 영상통화 */}
        <div className="pt-32 md:px-8">
          <div className="lg:w-36 md:w-[8.75rem] w-20">
            <img src="./img/main/icon-1.svg" />
          </div>
          <div className="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
            1:1 영상통화
          </div>
          <div className="text-center text-meet_text lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-4 mb-8 pl-3 lg:w-[26rem] md:w-[24rem] w-[12.875rem]">
            지금 바로 연결하세요, 실시간으로 이루어지는 생생한 영상통화로 진짜
            소통을 경험해보세요.
          </div>
          <div>
            <img src="./img/main/Picture-1.png" className="hidden lg:block w-[1240px]" />
            <img
              src="./img/main/Picture-m-1.png"
              className="block lg:hidden md:w-full w-[20.875rem]"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {/* 채팅 */}
        <div className="pt-32 md:px-8 bg-meet_black">
          <div className="w-36">
            <img src="./img/main/icon-2.svg" />
          </div>
          <div className="text-meet_white text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
            채팅
          </div>
          <div className="text-meet_white text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-4 mb-8 pl-3 lg:w-[26rem] md:w-[24rem] w-[12.875rem]">
            지금 바로 연결하세요, 실시간으로 이루어지는 생생한 영상통화로 진짜
            소통을 경험해보세요.
          </div>
          <div>
            <img src="./img/main/Picture-2.png" className="hidden lg:block w-[1240px]" />
            <img
              src="./img/main/Picture-m-2.png"
              className="block lg:hidden md:w-full w-[20.875rem]"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {/* 피드 */}
        <div className="pt-32 md:px-8">
          <div className="w-36">
            <img src="./img/main/icon-3.svg" />
          </div>
          <div className="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
            피드
          </div>
          <div className="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-4 mb-8 pl-3 lg:w-[26rem] md:w-[30rem] w-[12.875rem]">
            당신의 특별한 순간들을 나눠보세요.
            소소한 일상이 모두와 함께하는 이야기가 됩니다.
          </div>
          <div>
            <img src="./img/main/Picture-3.png" className="hidden lg:block w-[1240px]" />
            <img
              src="./img/main/Picture-m-3.png"
              className="block lg:hidden md:w-full w-[20.875rem]"
            />
          </div>
        </div>
      </SwiperSlide>

    <SwiperSlide>
      {/* 피드 */}
      <div className="pt-32 md:px-8 bg-meet_light_gray">
        <div className="w-36">
          <img src="./img/main/icon-4.svg" />
        </div>
        <div className="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
          팔로우/팔로잉
        </div>
        <div className="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-4 mb-8 pl-3 lg:w-[26rem] md:w-[30rem] w-[12.875rem]">
          당신만의 특별한 상품과 경험을 만들어보세요.
          원하는 것을 구독형 멤버십으로 제공하며, 당신의 가치를 공유하세요.
        </div>
        <div>
          <img src="./img/main/Picture-4.png" className="hidden lg:block w-[1240px]" />
          <img
              src="./img/main/Picture-m-4.png"
              className="block lg:hidden md:w-full w-[20.875rem]"
          />
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      {/* 피드 */}
      <div className="pt-32 md:px-8">
        <div className="w-36">
          <img src="./img/main/icon-5.svg" />
        </div>
        <div className="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
          선물
        </div>
        <div className="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-4 mb-8 pl-3 lg:w-[26rem] md:w-[30rem] w-[12.875rem]">
          인플루언서와 선물을 주고 받아 보세요 !
          포인트로 선물이 가능해요
        </div>
        <div>
          <img src="./img/main/Picture-5.png" className="hidden lg:block w-[1240px]" />
          <img
              src="./img/main/Picture-m-5.png"
              className="block lg:hidden md:w-full w-[20.875rem]"
          />
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      {/* 피드 */}
      <div className="pt-32 md:px-8">
        <div className="w-36">
          <img src="./img/main/icon-6.svg" />
        </div>
        <div className="text-meet_black text-center font-bold lg:text-[3.25rem] md:text-[3.25rem] text-[1.75rem]">
          스토어
        </div>
        <div className="text-meet_text text-center lg:text-[1.25rem] md:text-[1.25rem] text-[0.875rem] mt-4 mb-8 pl-3 lg:w-[26rem] md:w-[30rem] w-[12.875rem]">
          셀럽의 영상, 사진 등
          디지털 콘텐츠 구매해 보세요
        </div>
        <div>
          <img src="./img/main/Picture-6.png" className="hidden lg:block w-[1240px]" />
          <img
              src="./img/main/Picture-m-6.png"
              className="block lg:hidden md:w-full w-[20.875rem]"
          />
        </div>
      </div>
    </SwiperSlide>
    </Swiper>
  </>
  );
};

export default MainComponent;
