import { useEffect, useState } from "react";

function TopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100); // 100px 이상 스크롤 시 버튼 표시
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // 부드러운 스크롤 이동
    };

    return (
        <div
            className={`fixed bottom-6 right-6 z-[100] w-12 h-12 bg-meet_black rounded-full shadow-[0px_0px_100px_#3631BD] flex items-center justify-center cursor-pointer 
                transition-all duration-300 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            }`}
            onClick={scrollToTop}
        >
            <img src="./img/arrow-top.png" className="w-[1.25rem]" />
        </div>
    );
}

export default TopButton;