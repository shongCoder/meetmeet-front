function DownloadComponent() {
  return (
    <div>
      <div className="h-[60rem] bg-[url('/img/download/download_visual.png')] bg-cover bg-center lg:px-[6.25rem] flex">
        <div className="w-[50%] h-[60rem] flex items-center">
          <div>
            <img src="./img/download/app_icon.png" className="w-[16.375rem]" />
            <p className="text-5 text-meet_gray mt-6 text-center">
              만나고 싶은 순간, 지금 바로 밋밋하세요!
            </p>
            <img
              src="./img/download/store_button.png"
              className="w-[26.3125rem] mt-10"
            />
          </div>
        </div>
        <div className="w-[50%] h-[60rem]"></div>
      </div>
    </div>
  );
}

export default DownloadComponent;
