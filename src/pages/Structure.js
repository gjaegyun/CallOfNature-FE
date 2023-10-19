import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Structure () {
    
    const [currentTime, setCurrentTime] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => { //setInterval함수는 실행된 후에 interval ID를 반환함 -> 이것을 intervalId 변수에 저장
            setCurrentTime(new Date());//setInterval로 1초마다 현재시간을 얻어와서 currentTime상태를 업데이트해줌
        }, 1000);

        return () => clearInterval(intervalId);//clearInterval(intervalId)를 써서 interval을 정리
    }, []);

    useEffect(() => {
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();
        const currentSeconds = currentTime.getSeconds();

        const targetTimes = [
            { hour: 8, minute: 40, seconds: 0},
            { hour: 9, minute: 40, seconds: 0},
            { hour: 10, minute: 40, seconds: 0},
            { hour: 11, minute: 40, seconds: 0},
            { hour: 13, minute: 30, seconds: 0},
            { hour: 14, minute: 30, seconds: 0},
            { hour: 15, minute: 30, seconds: 0},
            { hour: 16, minute: 40, seconds: 0},
            { hour: 17, minute: 30, seconds: 0},
            { hour: 19, minute: 30, seconds: 0},
            { hour: 20, minute: 20, seconds: 0},
            { hour: 21, minute: 20, seconds: 0},
        ];

        for (const time of targetTimes) {
            if (currentHour === time.hour && currentMinute === time.minute && currentSeconds === time.seconds) {
            alert("곧 종이 칩니다!");
            }
        }
    }, [currentTime]);

    const legoMain = () => {
        navigate(`/`);
    }

    return (
        <>
            <button onClick={legoMain}>메인페이지로</button>

            <div>학교구조임</div>
            
            <div>
                현재 시간: {currentTime.toLocaleTimeString()}
            </div>
        </>
    )
}

export default Structure;