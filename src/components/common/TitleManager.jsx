import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TitleManager() {
    const { pathname } = useLocation();

    useEffect(() => {
        const titles = {
            "/": "영상채팅은 밋밋",
            "/support": "MeetMeet : 서비스 소개",
            "/download": "MeetMeet : 앱 다운로드",
            "/influencer": "MeetMeet : 밋밋셀럽",
            "/notice-detail": "MeetMeet : 공지사항",
            "/privacy": "MeetMeet : 개인정보처리방침",
            "/operating": "MeetMeet : 운영정책",
            "/terms": "MeetMeet : 이용약관",
        };

        document.title = titles[pathname] || "MeetMeet";
    }, [pathname]);

    return null;
}
