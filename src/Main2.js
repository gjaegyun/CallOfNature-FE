import key from './key';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Main() {
    const [name, setName] = useState();
    const [datas, setDatas] = useState();
    const [cal, setCal] = useState();
    const [menu, setMenu] = useState();
    const [currentTime, setCurrentTime] = useState(new Date());
    const navigate = useNavigate();

    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1;
    let date = currentTime.getDate();

    useEffect(() => {
        Api();
    },[])

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

    const getMealCode = () => {
        const currentHour = currentTime.getHours();

        if (currentHour >= 19 || currentHour < 8) {
            const tomorrow = new Date(currentTime);
            tomorrow.setDate(currentTime.getDate() + 1);
            year = tomorrow.getFullYear();
            month = tomorrow.getMonth() + 1;
            date = tomorrow.getDate();
            return 1;
        } else if (currentHour < 13) {
            return 2;
        } else {
            return 3;
        }
    }

    const Api = () => {
        const mealCode = getMealCode();
        const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${key}&Type=json&pIndex=1&pSize=1&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD=${year}${month}${date}&MMEAL_SC_CODE=${mealCode}`;
        const cleanedURL = URL.replace(/\(\)/g, '');

        axios.get(cleanedURL)
        .then((response) => {
            const data = response.data.mealServiceDietInfo[1].row[0];
            setDatas(data);

            const sName = data.SCHUL_NM;
            setName(sName);

            const CAL = data.CAL_INFO;
            setCal(CAL);

            const MENU = data.DDISH_NM; 
            setMenu(parseMenu(MENU));
            
            console.log(menu);
            console.log(datas);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const parseMenu = (menuString) => {
        const menuArray = menuString.split('<br/>'); // <br/> 태그를 기준으로 항목을 분할
        const processedMenu = [];
    
        for (const item of menuArray) {
            const parts = item.split(/\.\.\./); // '...'를 기준으로 항목을 분할
            const menuItem = parts[0].trim(); // 메뉴명
            const menuNumbers = parts[1] ? parts[1].trim() : ''; // 숫자들

            const cleanedMenuItem = menuItem.replace(/\(\)/g, '').trim();

            processedMenu.push({
                name: cleanedMenuItem,
                numbers: menuNumbers
            });
        }
        return processedMenu;
    }


    const handleBtnClick = () => {
        navigate(`/structure`);
    }

    return (
        <>
            <div>Wanna shit</div>

            <p></p>

            <div>
                현재 시간: {currentTime.toLocaleTimeString()}
            </div>

            <p></p>

            <button onClick={handleBtnClick}>구조 페이지로</button>

            <p></p>

            <button onClick={Api}>버튼</button>

            <div>
                <div>{name}</div>

                <p></p>

                <div>칼로리 : {cal}</div>

                <p></p>

                <div>
                    <div>오늘의 메뉴</div>
                    <ul>
                    {menu && menu.map((menuItem, index) => (
                        <li
                            key={index}
                            style={menuItem.name.includes("2") ? { color: 'red'} : {}}
                        >
                            {menuItem.name} {Array.isArray(menuItem.numbers) && menuItem.numbers.length > 0 ? `(${menuItem.numbers.join(', ')})` : ''}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
    
export default Main;