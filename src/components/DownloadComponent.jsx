function DownloadComponent() {
  return (
      <div>
        {/* 웹 버전 */}
        <div className="h-[60rem] bg-[url('/img/download/download_visual.png')] bg-cover lg:bg-center md:bg-right md:bg-[-20rem] lg:px-[6.25rem] flex lg:flex md:flex hidden">
          <div className="lg:w-[50%] md:w-full h-[60rem] flex lg:justify-start items-center lg:bg-meet_black/0 md:to-transparent md:bg-meet_black/80">
            <div>
              <img src="./img/download/app_icon.png" className="w-[16.375rem]" />
              <p className="text-5 text-meet_gray mt-6 text-center">
                만나고 싶은 순간, 지금 바로 밋밋하세요!
              </p>
              <div className="mt-10 flex gap-4">
                <img
                    src="./img/download/appstore.png"
                    className="lg:w-[12.8125rem] md:w-[12.625rem]"
                />
                <img
                    src="./img/download/playstore.png"
                    className="lg:w-[12.8125rem] md:w-[12.625rem]"
                />
              </div>
            </div>
          </div>
          <div className="w-[50%] h-[60rem] lg:block md:hidden"></div>
        </div>

        {/* 모바일 버전 */}
        <div
            className="w-full h-[50.75rem] bg-[url('/img/main/main_visual.png')] bg-cover lg:bg-center flex lg:hidden md:hidden block">
          <div className="w-full h-[50.75em] px-5 flex items-center bg-gradient-to-b from-meet_black/100 via-[#5c001b]/95 to-meet_pink/95">
            <div>
              <img src="./img/download/app_icon.png" className="w-[13rem]" />
              <p className="text-5 text-meet_gray mt-6 text-center">
                만나고 싶은 순간, 지금 바로 밋밋하세요!
              </p>
              <div className="mt-10 flex gap-4">
                <img
                    src="./img/download/appstore.png"
                    className="w-[10rem]"
                />
                <img
                    src="./img/download/playstore.png"
                    className="w-[10rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DownloadComponent;
