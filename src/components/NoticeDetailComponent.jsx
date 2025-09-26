import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import DOMPurify from "dompurify";

function NoticeDetailComponent() {
    const location = useLocation();
    const [data, setData] = useState({});
    const { noticeId } = location.state || {};

    useEffect(() => {
        fetch(`./notice/${noticeId}.json`)
            .then((res) => {
                if (!res.ok) throw new Error("파일 불러오기 실패");
                return res.json();
            })
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, [noticeId]);

    console.log(noticeId)

    console.log(data);

    return (
        <div className="lg:px-[6.25rem] md:px-8 px-5 lg:mt-[10.625rem] md:mt-[10.625rem] mt-[8.75rem] mb-10 flex flex-col justify-center items-center">
            <div className="bg-meet_pink inline-block text-white text-[0.8125rem] py-[6px] px-4 rounded-2xl">News</div>
            <div className="flex flex-col items-center justify-center mb-10 w-full">
                <h1 className="my-3 font-bold lg:text-[3rem] text-[1.5rem] text-[#1C1E22] text-center">{data.title}</h1>
                <div className="font-light lg:text-[0.8125rem] text-[0.875rem] text-[#7D8A9F]">{data.create_date}</div>
            </div>
            <div className="lg:px-[13.75rem] w-full">
                <div className="w-full lg:h-[30rem] md:h-[30rem] h-[15rem] bg-no-repeat bg-cover bg-center rounded-[20px] mb-10"
                     style={{ backgroundImage: `url(./img/support/${data.file_name})` }}></div>
                <div className="notice-contents py-10">
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.contents) }} />
                </div>
                <div className="w-full h-[1px] bg-[#F1F1F1]"></div>
            </div>
        </div>
    );
}

export default NoticeDetailComponent;