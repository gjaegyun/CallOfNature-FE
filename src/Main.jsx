import key from './key';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import React from 'react';

import ConIcon1 from './svg/ConIcon1';
import ConIcon2 from './svg/ConIcon2';
import ConIcon3 from './svg/ConIcon3';
import ConIcon4 from './svg/ConIcon4';

import MapComponent1 from './img/floor1/MapComponent1';
import MapComponent2 from './img/floor2/MapComponent2';
import MapComponent3 from './img/floor3/MapComponent3';
import MapComponent4 from './img/floor4/MapComponent4';
import MapComponent5 from './img/floor1/MapComponent5';
import MapComponent6 from './img/floor2/MapComponent6';
import MapComponent7 from './img/floor3/MapComponent7';
import MapComponent8 from './img/floor4/MapComponent8';

import * as S from './style';

function Main() {
    const [selectedFloor, setSelectedFloor] = React.useState('floor1');
    const [selectedLocation, setSelectedLocation] = React.useState('main');
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState();
    const [datas, setDatas] = useState();
    const [cal, setCal] = useState(0);
    const [menu, setMenu] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());
    const navigate = useNavigate();

    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1;
    let date = currentTime.getDate();


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
        const URL = `https://port-0-wapoo-2rrqq2blmorf3pd.sel5.cloudtype.app/wapoo/MAIN/FOURTH`;
        axios.get(URL)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const mealApi = () => {
        const mealCode = getMealCode();
        const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${key}&Type=json&pIndex=1&pSize=1&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD=20231219&MMEAL_SC_CODE=${mealCode}`;
        const cleanedURL = URL.replace(/\(\)/g, '');

        axios.get(cleanedURL)
        .then((response) => {
            console.log(response);
            const data = response.data.mealServiceDietInfo[1].row[0];
            setDatas(data);

            const sName = data.SCHUL_NM;
            setName(sName);

            const CAL = data.CAL_INFO;
            setCal(CAL);

            const MENU = data.DDISH_NM; 
            console.log(MENU);
            setMenu(parseMenu(MENU));
            
            console.log(menu);
            console.log(datas);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const parseMenu = (menuString) => {
        const menuArray = menuString.split('<br/>');
        const processedMenu = [];
    
        for (const item of menuArray) {
            const parts = item.split(/\.\.\./);
            const menuItem = parts[0].trim();
    
            const cleanedMenuItem = menuItem.replace(/[^가-힣\s]/g, '').trim();
    
            const splitedItems = menuItem.split("(");
            const hasNumberTwo = splitedItems[1]?.includes("2");
    
            processedMenu.push({
                name: cleanedMenuItem,
                hasNumberTwo: hasNumberTwo,
            });
        }
        return processedMenu;
    };
    

    const handleBtnClick = () => {
        navigate(`/structure`);
    }

    const handleMealClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleMainLocationClick = () => {
        setSelectedLocation('main');
        setSelectedFloor('floor1');

    };

    const handleServLocationClick = () => {
        setSelectedLocation('serv');
        setSelectedFloor('floor1'); 

    };

    const renderSelectedMapComponent = () => {
        const mainSelected = selectedLocation === 'main';
        const servSelected = selectedLocation === 'serv';

        switch (selectedFloor) {
            case 'floor1':
                return (mainSelected && <MapComponent1 />) || (servSelected && <MapComponent5 />);
            case 'floor2':
                return (mainSelected && <MapComponent2 />) || (servSelected && <MapComponent6 />);
            case 'floor3':
                return (mainSelected && <MapComponent3 />) || (servSelected && <MapComponent7 />);
            case 'floor4':
                return (mainSelected && <MapComponent4 />) || (servSelected && <MapComponent8 />);
            default:
                return null;
        }
    };

    const handleFloorClick = (floor) => {
        if (selectedLocation === 'main' || selectedLocation === 'serv') {
            setSelectedFloor(floor);
        }
    };

    return (
        <>
            <S.StyledBody>
                <S.Body>
                    <S.NavBar>
                        <S.ConIcon>
                            <ConIcon1/>
                            <ConIcon2/>
                            <ConIcon3/>
                            <ConIcon4/>
                        </S.ConIcon>
                        <S.NavText>
                            <S.MealText onClick={handleMealClick}>
                                급식
                            </S.MealText>
                            <S.ComplainText>
                                민원
                            </S.ComplainText>
                        </S.NavText>
                    </S.NavBar>

                    <S.ContentBox>
                        <S.MapBox>
                            {renderSelectedMapComponent()}
                        </S.MapBox>
                    </S.ContentBox>

                    <S.TimerBox>
                        <S.Timer>
                            <S.TimerText>
                                {currentTime.toLocaleTimeString()}                        
                            </S.TimerText>
                        </S.Timer>
                    </S.TimerBox>

                    <S.MainContent>
                        <S.FloorLocation>
                            <S.Location>
                                <S.MainLocation onClick={handleMainLocationClick} selected={selectedLocation === 'main'}>
                                    <S.MainLocationText selected={selectedLocation === 'main'}>
                                    본관
                                    </S.MainLocationText>
                                </S.MainLocation>
                                <S.ServLocation onClick={handleServLocationClick} selected={selectedLocation === 'serv'}>
                                    <S.ServLocationText selected={selectedLocation === 'serv'}>
                                    금봉관
                                    </S.ServLocationText>
                                </S.ServLocation>
                            </S.Location>

                            <S.Floorlist>
                                <S.Floor1
                                    onClick={() => handleFloorClick('floor1')}
                                    selected={(selectedLocation === 'main' || selectedLocation === 'serv') && selectedFloor === 'floor1'}
                                >
                                    <S.Floor1Text selected={(selectedLocation === 'main' || selectedLocation === 'serv') && selectedFloor === 'floor1'} floor="floor1">
                                        1층
                                    </S.Floor1Text>
                                </S.Floor1>

                                <S.Floor2
                                    onClick={() => handleFloorClick('floor2')}
                                    selected={(selectedLocation === 'main' || selectedLocation === 'serv') && selectedFloor === 'floor2'}
                                >
                                    <S.Floor2Text selected={(selectedLocation === 'main' || selectedLocation === 'serv') && selectedFloor === 'floor2'} floor="floor2">
                                        2층
                                    </S.Floor2Text>
                                </S.Floor2>

                                <S.Floor3
                                    onClick={() => handleFloorClick('floor3')}
                                    selected={(selectedLocation === 'main' || selectedLocation === 'serv') && selectedFloor === 'floor3'}
                                >
                                    <S.Floor3Text selected={(selectedLocation === 'main' || selectedLocation === 'serv') && selectedFloor === 'floor3'} floor="floor3">
                                        3층
                                    </S.Floor3Text>
                                </S.Floor3>

                                <S.Floor4
                                    onClick={() => handleFloorClick('floor4')}
                                    selected={(selectedLocation === 'main' || selectedLocation === 'serv') && selectedFloor === 'floor4'}
                                >
                                    <S.Floor4Text selected={(selectedLocation === 'main' || selectedLocation === 'serv') && selectedFloor === 'floor4'} floor="floor4">
                                        4층
                                    </S.Floor4Text>
                                </S.Floor4>
                            </S.Floorlist>
                        </S.FloorLocation>


                    </S.MainContent>
                </S.Body>
                
            </S.StyledBody>

            <S.ModalOverlay showModal={showModal} onClick={handleCloseModal} />
            <S.Modal showModal={showModal}>
                <S.ModalContent>
                <S.ModalBox>
                    <S.ModalText>오늘의 메뉴</S.ModalText>
                    <S.MealContent>
                        {menu &&
                            menu.map((menuItem, index) => {
                                const splitedItems = menuItem.name.split("(");
                                const cleanedMenuItem = splitedItems[0].trim();
                                const hasNumberTwo = menuItem.hasNumberTwo;

                                return (
                                    <S.MealList key={index}>
                                        {hasNumberTwo ? (
                                            <S.RedText>{cleanedMenuItem}</S.RedText>
                                        ) : (
                                            cleanedMenuItem
                                        )}
                                    </S.MealList>
                                );
                            })}
                    </S.MealContent>
                </S.ModalBox>
                </S.ModalContent>
            </S.Modal>



            <button onClick={handleBtnClick}>구조 페이지로</button>

            <button onClick={Api}>API</button>
        </>
    );
}
    
export default Main;