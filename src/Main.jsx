import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import React from 'react';

import ConIcon1 from './svg/ConIcon1';
import ConIcon2 from './svg/ConIcon2';
import ConIcon3 from './svg/ConIcon3';
import ConIcon4 from './svg/ConIcon4';

import DangerousIcon from './svg/DangerousIcon';

import BlueMaleIcon from './png/BlueMaleIcon.png';
import RedFemaleIcon from './png/RedFemaleIcon.png';

import MapComponent1 from './img/floor1/MapComponent1';
import MapComponent2 from './img/floor2/MapComponent2';
import MapComponent3 from './img/floor3/MapComponent3';
import MapComponent4 from './img/floor4/MapComponent4';
import MapComponent5 from './img/floor1/MapComponent5';
import MapComponent6 from './img/floor2/MapComponent6';
import MapComponent7 from './img/floor3/MapComponent7';
import MapComponent8 from './img/floor4/MapComponent8';

import CheckIcon from './svg/CheckIcon';
import RejectIcon from './svg/RejectIcon';
import Not from './svg/Not';

import MainFirstMale from './svg/MainFirstMale';
import MainSecondMale from './svg/MainSecondMale';

import ServFirstMain from './svg/ServFirstMale';
import ServSecondMale from './svg/ServSecondMale';

import MainFourFemale from './svg/MainFourFemale';
import MainFirstFemale from './svg/MainFirstFemale';

import ServFirstFemale from './svg/ServFirstFemale';


import * as S from './style';
import { Toaster } from 'react-hot-toast';

function Main() {

    const [remainInfo, setRemainInfo] = useState('');

    const [inputTitle, setInputTitle] = useState('');

    const [selectedFloor, setSelectedFloor] = useState('floor1');
    const [selectedLocation, setSelectedLocation] = useState('main');
    const [selectedGender, setSelectedGender] = useState('MALE');

    const [showModal, setShowModal] = useState(false);
    const [showComplainModal, setShowComplainModal] = useState(false);
    const [showWriteModal, setShowWriteModal] = useState(false);
    const [showToilet, setShowToilet] = useState(false);
    const [showToilet2, setShowToilet2] = useState(false);

    const [maleCount, setMaleCount] = useState('');
    const [femaleCount, setFemaleCount] = useState('');

    const [name, setName] = useState();
    const [datas, setDatas] = useState();
    const [complain, setComplain] = useState('');

    const [toiletResponse, setToiletResponse] = useState(null);

    const [cal, setCal] = useState(0);
    const [menu, setMenu] = useState([]);
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [location, setLocation] = useState("MAIN");
    const [floor, setFloor] = useState("FIRST")

    const [loading, setLoading] = useState(false);
    const [sortedMalePositions, setSorted] = useState([]);

    const [error, setError] = useState(null);

    const [currentTime, setCurrentTime] = useState(new Date());
    //const navigate = useNavigate();

    const notify = () => {
        toast.error("쉬는시간이 끝났습니다!")
    }
    const postNotify = () => {
        toast.success("정상적으로 등록되었습니다!")
    }
    const NothingNotify = () => {
        toast.error("입력을 해주세요!")
    }

    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1;
    let date = currentTime.getDate();

    useEffect(() => {
        mealApi();
        ComplainApi();
    }, [])

    useEffect(() => {
        Api();
    }, [currentTime]);

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
                notify();
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

            const URL = `https://port-0-wapoo-2rrqq2blmorf3pd.sel5.cloudtype.app/toilet/${location}/${floor}`;
            axios.get(URL)
                .then((response) => {
                    setToiletResponse(response.data)
                    setSorted(toiletResponse
                    .filter(item => item.gender === 'MALE')
                    .sort((a, b) => a.position - b.position))
                    setMaleCount(toiletResponse.filter(item => item.gender === 'MALE' && item.state === true).length);
                    setFemaleCount(toiletResponse.filter(item => item.gender === 'FEMALE' && item.state === true).length);
                })
                .catch((error) => {
                    setError(error);
                })
        
    }

    const mealApi = () => {
        const mealCode = getMealCode();
        const URL = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${process.env.REACT_APP_KEY}&Type=json&pIndex=1&pSize=1&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD=${year}${month}${date}&MMEAL_SC_CODE=${mealCode}`;
        const cleanedURL = URL.replace(/\(\)/g, '');

        axios.get(cleanedURL)
        .then((response) => {
            const data = response.data.mealServiceDietInfo[1].row[0];
            setDatas(data);

            const sName = data.SCHUL_NM;
            setName(sName);

            const CAL = data.CAL_INFO;
            setCal(CAL);

            let MENU = data.DDISH_NM.toString().replace(/[*.]/g, '').split('<br/>') //.삭제처리 12/21
            setMenu(parseMenu(MENU));
        })
        .catch((error) => {
        })
    }

    const ComplainApi = () => {
        const URL = `https://port-0-wapoo-2rrqq2blmorf3pd.sel5.cloudtype.app/complain`;
        axios.get(URL)
            .then((response) => {
                setComplain(response.data.sort((a, b) => b.id - a.id));
            })
            .catch((error) => {
            })
    }

    const PostComplain = () => {
    
        if (inputTitle.length === 0 || isSubmitting) {
            NothingNotify();
            return;
        }
    
        const URL = `https://port-0-wapoo-2rrqq2blmorf3pd.sel5.cloudtype.app/complain`;
    
        setIsSubmitting(true);
    
        axios.post(URL, { title: inputTitle })
            .then((response) => {
                setInputTitle('');
                postNotify();
                ComplainApi();
                setShowWriteModal(false);
                setShowComplainModal(true);
            })
            .catch((error) => {
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };



    const parseMenu = (menuString) => {
        let processedMenu = [];
        for (const item of menuString) {
            
            const parts = item.split(/\.\.\./);
            const menuItem = parts[0].trim();
    
            const cleanedMenuItem = menuItem.replace(/\(\d+(\.\d+)*\)/g, '');
    
            const splitedItems = menuItem.split("(");
            const hasNumberTwo = splitedItems[splitedItems.length - 1]?.replace("12", '%').includes("2");
    
            processedMenu.push({
                name: cleanedMenuItem,
                hasNumberTwo: hasNumberTwo,
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
    
                return (
                    <S.MealList key={index}>
                        {hasNumberTwo ? (
                            <S.RedText>{cleanedMenuItem}</S.RedText>
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
                        다음 급식은 우유관련 식품이 나옵니다. 사수하세요!
                    </S.DangerousText>
                    <S.DangerousIconBox>
                        <DangerousIcon />
                    </S.DangerousIconBox>
                </S.DangerousContent>
            )
        );
    };

    const handleToiletClick1 = () => {
        setSelectedGender('MALE');
        setShowToilet(true);
    }

    const closeToiletClick1 = () => {
        setShowToilet(false);
    }

    const handleToiletClick2 = () => {
        setSelectedGender('FEMALE');
        setShowToilet(true);
    }

    const handleMealClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleComplainClick = () => {
        setShowComplainModal(true);
    }

    const handleComplainClose = () => {
        setShowComplainModal(false);
    }

    const handleWriteClick = () => {
        setShowWriteModal(true);
        setShowComplainModal(false);
    }

    const handleWriteClose = () => {
        setShowWriteModal(false);
        setShowComplainModal(true);
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
    
        let mapStyle = {};
    
        if (mainSelected) {
            mapStyle = { marginLeft: '35rem' };
        }
    
        switch (selectedFloor) {
            case 'floor1':
                return (mainSelected && <MapComponent5 style={mapStyle} />) || (servSelected && <MapComponent1 />);
            case 'floor2':
                return (mainSelected && <MapComponent6 style={mapStyle} />) || (servSelected && <MapComponent2 />);
            case 'floor3':
                return (mainSelected && <MapComponent7 style={mapStyle} />) || (servSelected && <MapComponent3 />);
            case 'floor4':
                return (mainSelected && <MapComponent8 style={mapStyle} />) || (servSelected && <MapComponent4 />);
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
                            <S.ComplainText onClick={handleComplainClick}>
                                민원
                            </S.ComplainText>
                        </S.NavText>
                    </S.NavBar>

                    <S.ContentBox>
                        <S.MapBox style={selectedLocation === 'main' ? { marginLeft: '35rem' } : {}}>
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
                                    <S.RemainToilet noData={"something"}>
                                        <S.RemainText noData={"something"}>
                                            해당하는 화장실이 존재하지 않습니다.
                                        </S.RemainText>
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
                                <S.RemainToilet gender="male" onClick={handleToiletClick1} clicked={'clicked'}>
                                    <S.RemainToiletBox>
                                        <S.RemainText gender="male">
                                            남은 남자 화장실
                                        </S.RemainText>
                                        <S.ToiletImg gender="male"
                                            src={BlueMaleIcon} 
                                            alt='blueMaleIcon'
                                        />
                                    </S.RemainToiletBox>
                                    <S.RemainNum gender="male">
                                        {maleCount}칸
                                    </S.RemainNum>
                                </S.RemainToilet>
                                
                                <S.RemainToilet gender="female" onClick={handleToiletClick2} clicked={'clicked'}>
                                    <S.RemainToiletBox>
                                        <S.RemainText gender="female">
                                            남은 여자 화장실
                                        </S.RemainText>
                                        <S.ToiletImg gender="female"
                                            src={RedFemaleIcon} 
                                            alt='redFemaleIcon'
                                        />
                                    </S.RemainToiletBox>
                                    <S.RemainNum gender="female">
                                        {femaleCount}칸
                                    </S.RemainNum>
                                </S.RemainToilet>
                                
                            </>
                        )}
                    </S.RemainToiletContainer>

                    {renderDangerousContent()}
                </S.Body>
                <ToastContainer/>
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

            <S.ToiletOverlay gender={selectedGender} location={selectedLocation} floor={selectedFloor} showToilet={showToilet} onClick={closeToiletClick1} />
            <S.ToiletModal gender={selectedGender} location={selectedLocation} floor={selectedFloor} showToilet={showToilet}>
                <S.ToiletContent>
                    <S.ToiletBar>
                        <S.ToiletStateText>
                        {selectedLocation === 'main' ? '본관' : '금봉관'} {selectedFloor.replace('floor', '')}층 {selectedGender === 'MALE' ? '남자' : '여자'}화장실
                        </S.ToiletStateText>
                        <div style={{cursor: 'pointer'}} onClick={closeToiletClick1}>
                            <Not/>
                        </div>
                    </S.ToiletBar>

                    {selectedGender === 'MALE' && selectedLocation === 'main' && selectedFloor === 'floor1' && (
                        <MainFirstMale/>
                    )}

                    {selectedGender === 'MALE' && selectedLocation === 'main' && selectedFloor === 'floor2' && (
                        <MainSecondMale/>
                    )}

                    {selectedGender === 'MALE' && selectedLocation === 'main' && selectedFloor === 'floor3' && (
                        <MainSecondMale/>
                    )}
    
                    {selectedGender === 'MALE' && selectedLocation === 'main' && selectedFloor === 'floor4' && (
                        <S.ToiletGrayBox>
                            
                            <div style={{display: 'flex', margin: '1rem'}}>
                                {sortedMalePositions[0].gender === 'MALE' && sortedMalePositions[0].position === 1 && sortedMalePositions[0].state === true ? (
                                    <S.ToiletArea border={'border'}>
                                        <S.ToiletState remain={'remain'}>
                                            <S.ToiletText text={'text'}>
                                                사용가능
                                            </S.ToiletText>
                                        </S.ToiletState>
                                    </S.ToiletArea>
                                ) : (
                                    <S.ToiletArea border={'border'}>
                                        <S.ToiletState>
                                            <S.ToiletText>
                                                사용불가
                                            </S.ToiletText>
                                        </S.ToiletState>
                                    </S.ToiletArea>
                                )}

                                {sortedMalePositions[1].gender === 'MALE' && sortedMalePositions[1].position === 2 && sortedMalePositions[1].state === true ? (
                                    <S.ToiletArea>
                                        <S.ToiletState remain={'remain'}>
                                            <S.ToiletText text={'text'}>
                                                사용가능
                                            </S.ToiletText>
                                        </S.ToiletState>
                                    </S.ToiletArea>
                                ) : (
                                    <S.ToiletArea>
                                        <S.ToiletState>
                                            <S.ToiletText>
                                                사용불가
                                            </S.ToiletText>
                                        </S.ToiletState>
                                    </S.ToiletArea>
                                )}
                            
                                {sortedMalePositions[2].gender === 'MALE' && sortedMalePositions[2].position === 3 && sortedMalePositions[2].state === true ? (
                                        <S.ToiletArea>
                                            <S.ToiletState remain={'remain'}>
                                                <S.ToiletText text={'text'}>
                                                    사용가능
                                                </S.ToiletText>
                                            </S.ToiletState>
                                        </S.ToiletArea>
                                    ) : (
                                        <S.ToiletArea>
                                            <S.ToiletState>
                                                <S.ToiletText>
                                                    사용불가
                                                </S.ToiletText>
                                            </S.ToiletState>
                                        </S.ToiletArea>
                                    )}
                            </div>

                            <S.ToiletEntet>
                                <S.EnterText>
                                    입구
                                </S.EnterText>
                            </S.ToiletEntet>
                        </S.ToiletGrayBox>
                    )}

                    
                    {selectedGender === 'MALE' && selectedLocation === 'serv' && selectedFloor === 'floor1' && (
                        <ServFirstMain/>
                    )}

                    {selectedGender === 'MALE' && selectedLocation === 'serv' && selectedFloor === 'floor2' && (
                        <ServSecondMale/>
                    )}



                    {selectedGender === 'FEMALE' && selectedLocation === 'main' && selectedFloor === 'floor1' && (
                        <MainFirstFemale/>
                    )}

                    {selectedGender === 'FEMALE' && selectedLocation === 'main' && selectedFloor === 'floor2' && (
                        <MainFourFemale/>
                    )}

                    {selectedGender === 'FEMALE' && selectedLocation === 'main' && selectedFloor === 'floor3' && (
                        <MainFourFemale/>
                    )}

                    {selectedGender === 'FEMALE' && selectedLocation === 'main' && selectedFloor === 'floor4' && (
                        <MainFourFemale/>
                    )}

                    {selectedGender === 'FEMALE' && selectedLocation === 'serv' && selectedFloor === 'floor1' && (
                        <ServFirstFemale/>
                    )}

                    {selectedGender === 'FEMALE' && selectedLocation === 'serv' && selectedFloor === 'floor2' && (
                        <ServFirstFemale/>
                    )}

                </S.ToiletContent>
            </S.ToiletModal>

            <S.ComplainModalOverlay showComplainModal={showComplainModal} onClick={handleComplainClose}/>
            <S.ComplainModal showComplainModal= {showComplainModal}>
                <S.ComplainBox>
                    <S.ComplainGrayBox>
                    {Array.isArray(complain) && complain.map((complains) =>  
                        <S.ComplainContent key={complains.id}>
                            <S.ComplainTextBox>
                                <S.JustBox>
                                    {complains.id === 1 || complains.id === 3 ? <CheckIcon/> : <RejectIcon/>}
                                    <S.ComplainBoxText>
                                        {complains.title.length >= 23
                                        ? complains.title.substring(0, 23) +
                                        (complains.title.charAt(23) === '.' ? '..' : '...')
                                        : complains.title}
                                    </S.ComplainBoxText>
                                </S.JustBox>

                                <S.CalenderBox>
                                    <S.CalanderText>
                                        {complains.time.split('')[4]}
                                        {complains.time.split('')[5]}월
                                        {complains.time.split('')[6]}
                                        {complains.time.split('')[7]}일
                                    </S.CalanderText>
                                </S.CalenderBox>
                            </S.ComplainTextBox>
                        </S.ComplainContent>
                    )}


                    <S.WriteBox>
                        <S.ComplainWrite onClick={handleWriteClick}>
                            <S.WriteText>
                                작성 하기
                            </S.WriteText>
                        </S.ComplainWrite>
                    </S.WriteBox>
                    </S.ComplainGrayBox>
                </S.ComplainBox>
            </S.ComplainModal>

            <S.ComplainWriteOverlay showWriteModal={showWriteModal} onClick={handleWriteClose}/>
            <S.ComplainWriteModal showWriteModal={showWriteModal}>
                <S.ComplainBox>
                    <S.ComplainInputBox>
                        <S.ComplainWhiteBox>
                            <S.FinishDirection>
                                <S.InputLine
                                    type='text'
                                    placeholder=" 민원을 하실 내용을 적어주세요.
                                    &#13;&#10;EX) 본관 1층 1번째 칸 화장실 휴지가 없어요."
                                    value={inputTitle}
                                    onChange={(e) => setInputTitle(e.target.value)}
                                />
                                <S.FinishWrite onClick={PostComplain}>
                                    <S.FinishText>
                                        작성 마치기
                                    </S.FinishText>
                                </S.FinishWrite>
                            </S.FinishDirection>
                            
                        </S.ComplainWhiteBox>
                    </S.ComplainInputBox>
                </S.ComplainBox>
            </S.ComplainWriteModal>
            <div>
                <Toaster
                    position="top-right"
                    reverseOrder={true}
                />
            </div>
        </>
    );
}

export default Main;