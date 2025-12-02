function InfluencerComponent() {
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
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center tomorrow font-[600] w-[4rem] h-[5.5rem] rounded-[0.75rem] bg-[linear-gradient(to_bottom,_#4b4b4b_50%,_#171717_51%)]">
                0
              </div>
              <div className="flex items-center justify-center tomorrow font-[600] w-[4rem] h-[5.5rem] rounded-[0.75rem] bg-[linear-gradient(to_bottom,_#4b4b4b_50%,_#171717_51%)]">
                6
              </div>
              <div className="flex items-center justify-center tomorrow font-[600] w-[4rem] h-[5.5rem] rounded-[0.75rem] bg-[linear-gradient(to_bottom,_#4b4b4b_50%,_#171717_51%)]">
                3
              </div>
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
          <div className="py-2 px-3 bg-meet_pink rounded-[100px] text-[0.875rem] font-bold text-white leading-[20px]">
            Best of the Month
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfluencerComponent;
