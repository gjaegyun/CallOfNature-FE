import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import reactIcon from './png/reactIcon.png';
import springIcon from './png/springIcon.png';
import rasberryPiIcon from './png/rasberryPiIcon.png';
import figmaIcon from './png/figmaIcon.png';


import * as S from './ShowStyle';

import ConIcon1 from './svg/ConIcon1';
import ConIcon2 from './svg/ConIcon2';
import ConIcon3 from './svg/ConIcon3';
import ConIcon4 from './svg/ConIcon4';

function Show() {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);
    const [contributorsScale, setContributorsScale] = useState(0.7);
    const maxScale = 20;
    const fadeThreshold = 200; 
    const secondContainerTrigger = 92; 

    useEffect(() => {

        const contributorsTrigger = 202 * 16;
        const handleScroll = () => {
            setScrollY(window.scrollY);
            const newScale = Math.max(1, 2.42 - scrollY / contributorsTrigger);
            setContributorsScale(newScale);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    const scale = Math.min(1 + scrollY / 20, maxScale);
    const opacity = Math.max(0, 1 - (scrollY - maxScale * 10) / fadeThreshold);
    const translateX = Math.max(0, (scrollY - secondContainerTrigger * 10) / 6);

    const MainBtn = () => {
        navigate(`/con`);
    }

    return (
        <S.StyledBody>
            <S.Body>
                <S.ConIcon1 style={{ transform: `scale(${scale})`, opacity: opacity, }}>
                    <ConIcon1 />
                    <S.IncludeIcon3>
                        <ConIcon2 />
                        <S.Just>
                            <ConIcon3 />
                        </S.Just>
                    </S.IncludeIcon3>
                    <ConIcon4 />
                </S.ConIcon1>

                <S.LeftRelative1 style={{ transform: `translateX(${translateX}px)` }}>
                    <S.InfoContainer>
                        <S.ImgContainer 
                            src={reactIcon} 
                            alt="reactIcon" 
                        />
                        <S.TextContainer>
                            FRONT-END
                        </S.TextContainer>
                    </S.InfoContainer>
                    <br />
                    <S.ServTextContainer>
                        담당 : 김재균(더모먼트)
                    </S.ServTextContainer>
                </S.LeftRelative1>

                <S.RightRelative1 style={{ transform: `translateX(${-translateX}px)` }}>
                    <S.InfoContainer>
                        <S.ImgContainer 
                            src={springIcon} 
                            alt="springIcon" 
                        />
                        <S.TextContainer>
                            BACK-END
                        </S.TextContainer>
                    </S.InfoContainer>
                    <br />
                    <S.ServTextContainer>
                        담당 : 엄지성(MSG)
                    </S.ServTextContainer>
                </S.RightRelative1>

                <S.LeftRelative2 style={{ transform: `translateX(${translateX}px)` }}>
                    <S.InfoContainer>
                        <S.ImgContainer 
                            src={rasberryPiIcon} 
                            alt="rasberryPiIcon" 
                        />
                        <S.TextContainer>
                            IoT-ENG
                        </S.TextContainer>
                    </S.InfoContainer>
                    <br />
                    <S.ServTextContainer>
                        담당 : 이진헌, 윤상혁(기능반)
                    </S.ServTextContainer>
                </S.LeftRelative2>

                <S.RightRelative2 style={{ transform: `translateX(${-translateX}px)` }}>
                    <S.InfoContainer>
                        <S.ImgContainer 
                            src={figmaIcon} 
                            alt="figmaIcon" 
                        />
                        <S.TextContainer>
                            DESIGNER
                        </S.TextContainer>
                    </S.InfoContainer>
                    <br />
                    <S.ServTextContainer>
                        담당 : 오은찬(코인사)
                    </S.ServTextContainer>
                </S.RightRelative2>

                <S.Contributors style={{ transform: `scale(${contributorsScale})` }}>
                    <S.InfoContainer alone={'alone'}>
                        <S.TextContainer alone={'alone'}>
                            <S.ConIcon2 style={{ transform: `scale(2.42)` }}>
                                <ConIcon1 />
                                <S.IncludeIcon3>
                                    <ConIcon2 />
                                    <S.Just>
                                        <ConIcon3 />
                                    </S.Just>
                                </S.IncludeIcon3>
                                <ConIcon4 />
                            </S.ConIcon2>
                            TRIBUTORS
                        </S.TextContainer>
                        <br />
                        <S.ServTextContainer>
                            신희성, 방가온, 장예슬, 정상혁, BSC
                        </S.ServTextContainer>
                    </S.InfoContainer>
                </S.Contributors>
                <S.ButtonWrapper>
                    <S.StyledButton onClick={MainBtn}>바로가기</S.StyledButton>
                </S.ButtonWrapper>
            </S.Body>
        </S.StyledBody>
    )
}

export default Show;