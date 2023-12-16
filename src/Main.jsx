import key from './key';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import React from 'react';

import ConIcon1 from './svg/ConIcon1';
import ConIcon2 from './svg/ConIcon2';
import ConIcon3 from './svg/ConIcon3';
import ConIcon4 from './svg/ConIcon4';

import DangerousIcon from './svg/DangerousIcon';

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
    const [remainInfo, setRemainInfo] = useState('');

    const [selectedFloor, setSelectedFloor] = useState('floor1');
    const [selectedLocation, setSelectedLocation] = useState('main');

    const [showModal, setShowModal] = useState(false);

    const [name, setName] = useState();
    const [datas, setDatas] = useState();

    const [cal, setCal] = useState(0);
    const [menu, setMenu] = useState([]);

    const [location, setLocation] = useState("MAIN");
    const [floor, setFloor] = useState("FIRST")

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [currentTime, setCurrentTime] = useState(new Date());
    //const navigate = useNavigate();

    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1;
    let date = currentTime.getDate();

    useEffect(() => {
        mealApi();
    },[])

    useEffect(() => {
        Api();
    }, [location, floor])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
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
        if (!loading) {
            setLoading(true); 

            const URL = `https://port-0-wapoo-2rrqq2blmorf3pd.sel5.cloudtype.app/wapoo/${location}/${floor}`;
            axios.get(URL)
                .then((response) => {
                    setRemainInfo(response.data);
                })
                .catch((error) => {
                    setError(error);
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    const mealApi = () => {
        const mealCode = getMealCode();
        const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${key}&Type=json&pIndex=1&pSize=1&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD=20231229&MMEAL_SC_CODE=${mealCode}`;
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
            console.log(MENU);
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
    
            const numberMatch = splitedItems[1]?.match(/\d+/);
            const number = numberMatch ? parseInt(numberMatch[0]) : null;
    
            processedMenu.push({
                name: cleanedMenuItem,
                hasNumberTwo: hasNumberTwo,
                number: number,
            });
        }
        return processedMenu;
    };
    
    const renderMealList = () => {
        return (
            menu &&
            menu.map((menuItem, index) => {
                const cleanedMenuItem = menuItem.name;
                const hasNumberTwo = menuItem.hasNumberTwo;
                const number = menuItem.number;
    
                return (
                    <S.MealList key={index}>
                        {hasNumberTwo ? (
                            (number === 12) ? (
                                cleanedMenuItem
                            ) : (
                                <S.RedText>{cleanedMenuItem}</S.RedText>
                            )
                        ) : (
                            cleanedMenuItem
                        )}
                    </S.MealList>
                );
            })
        );
    };

    const renderDangerousContent = () => {
        const hasNumberTwoInMenu = menu.some((menuItem) => menuItem.hasNumberTwo);
    
        return (
            hasNumberTwoInMenu && (
                <S.DangerousContent>
                    <S.DangerousIconBox>
                        <DangerousIcon />
                    </S.DangerousIconBox>
                    <S.DangerousText>
                        오늘은 유제품이 나오는 날입니다!!!
                    </S.DangerousText>
                    <S.DangerousIconBox>
                        <DangerousIcon />
                    </S.DangerousIconBox>
                </S.DangerousContent>
            )
        );
    };


    const handleMealClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleMainLocationClick = () => {
        setSelectedLocation('main');
        setSelectedFloor('floor1');
        setLocation("MAIN");
        setFloor("FIRST");
    };

    const handleServLocationClick = () => {
        setSelectedLocation('serv');
        setSelectedFloor('floor1'); 
        setLocation("GEUMBONG");
        setFloor("FIRST");
    };

    const renderSelectedMapComponent = () => {
        const mainSelected = selectedLocation === 'main';
        const servSelected = selectedLocation === 'serv';

        switch (selectedFloor) {
            case 'floor1':
                return (mainSelected && <MapComponent5 />) || (servSelected && <MapComponent1 />);
            case 'floor2':
                return (mainSelected && <MapComponent6 />) || (servSelected && <MapComponent2 />);
            case 'floor3':
                return (mainSelected && <MapComponent7 />) || (servSelected && <MapComponent3 />);
            case 'floor4':
                return (mainSelected && <MapComponent8 />) || (servSelected && <MapComponent4 />);
            default:
                return null;
        }
    };

    const handleFloorClick = (floor) => {
        if (selectedLocation === 'main' || selectedLocation === 'serv') {
            let translatedFloor;
    
            switch (floor.toUpperCase()) {
                case 'FLOOR1':
                    translatedFloor = 'FIRST';
                    break;
                case 'FLOOR2':
                    translatedFloor = 'SECOND';
                    break;
                case 'FLOOR3':
                    translatedFloor = 'THIRD';
                    break;
                case 'FLOOR4':
                    translatedFloor = 'FOURTH';
                    break;
                default:
                    translatedFloor = floor.toUpperCase();
                    break;
            }
    
            setSelectedFloor(floor);
            setFloor(translatedFloor);
        }
    };

    return (
        <>
            <S.StyledBody>
                <S.Body>
                    <S.NavBar>
                        <S.ConIcon>
                            <ConIcon1/>
                            <S.IncludeIcon3>
                                <ConIcon2/>

                                <S.Just>
                                    <ConIcon3/>
                                </S.Just>
                            </S.IncludeIcon3>
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

                    <S.RemainToiletContainer>
                        {location === 'GEUMBONG' && (floor === 'THIRD' || floor === 'FOURTH') ? (
                            !remainInfo ? (
                                <>
                                    <S.RemainToilet gender="male">
                                        <S.RemainText gender="male">
                                            남은 남자 화장실
                                        </S.RemainText>
                                        <S.RemainNum gender="male">
                                            {remainInfo.male}칸
                                        </S.RemainNum>
                                    </S.RemainToilet>
                                    <S.RemainToilet gender="female">
                                        <S.RemainText gender="female">
                                            남은 여자 화장실
                                        </S.RemainText>
                                        <S.RemainNum gender="female">
                                            {remainInfo.female}칸
                                        </S.RemainNum>
                                    </S.RemainToilet>
                                </>
                            ) : (
                                <>
                                    <S.RemainToilet noData={"something"}>
                                        <S.RemainText noData={"something"}>
                                            해당하는 화장실이 존재하지 않습니다.
                                        </S.RemainText>
                                    </S.RemainToilet>
                                </>
                            )
                        ) : (
                            <>
                                <S.RemainToilet gender="male">
                                    <S.RemainText gender="male">
                                        남은 남자 화장실
                                    </S.RemainText>
                                    <S.RemainNum gender="male">
                                        {remainInfo.male}칸
                                    </S.RemainNum>
                                </S.RemainToilet>
                                
                                    <S.RemainToilet gender="female">
                                        <S.RemainText gender="female">
                                            남은 여자 화장실
                                        </S.RemainText>
                                        <S.RemainNum gender="female">
                                            {remainInfo.female}칸
                                        </S.RemainNum>
                                    </S.RemainToilet>
                                
                            </>
                        )}
                    </S.RemainToiletContainer>

                    {renderDangerousContent()}
                </S.Body>

            </S.StyledBody>

            <S.ModalOverlay showModal={showModal} onClick={handleCloseModal} />
            <S.Modal showModal={showModal}>
            <S.ModalContent>
                <S.ModalBox>
                    <S.ModalText>오늘의 메뉴</S.ModalText>
                    <S.MealContent>{renderMealList()}</S.MealContent>
                </S.ModalBox>
            </S.ModalContent>
            </S.Modal>
        </>
    );
}
    
export default Main;
