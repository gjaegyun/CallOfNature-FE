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

import styled from '@emotion/styled';


const StyledButton = styled.button`
    --font-size: 16px;
    --duration: 0.44s;
    --move-hover: -4px;

    padding: 16px 32px;
    font-family: 'Roboto';
    font-weight: 500;
    line-height: var(--font-size);
    border-radius: 24px;
    display: block;
    outline: none;
    appearance: none;
    border: none;
    text-decoration: none;
    font-size: var(--font-size);
    letter-spacing: 0.5px;
    display: flex;
    overflow: hidden;
    border: #8bde22;
    background: #fff;
    color: #8bde22;
    box-shadow: 0 2px 8px -1px #729a3e;
    transform: translateY(var(--y)) translateZ(0);
    transition: transform var(--duration) ease, box-shadow var(--duration) ease;

    &:hover {
        --y: var(--move-hover);
        box-shadow: 0 4px 20px -2px rgba(39, 94, 254, 0.5);
        span {
        --m: calc(var(--font-size) * -1);
        }
    }

    div {
        display: flex;
        overflow: hidden;
        text-shadow: 0 var(--font-shadow) 0 var(--text);
        span {
        display: block;
        backface-visibility: hidden;
        font-style: normal;
        transition: transform var(--duration) ease;

        &:nth-child(odd) {
            --font-shadow: var(--font-size);
        }

        &:nth-child(even) {
            --font-shadow: calc(var(--font-size) * -1);
        }

        &:nth-child(n) {
            --m: calc(var(--font-size) * -1);
        }
        }
    }
`;

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
    const translateX = Math.max(0, (scrollY - secondContainerTrigger * 8) / 7);

    const MainBtn = () => {
        navigate(`/con`);
    }

    return (
        <S.StyledBody>
            <S.Body>
                <S.ConIcon 
                    style={{
                        transform: `scale(${scale})`,
                        position: 'fixed',
                        top: '45%',
                        zIndex: '999',
                        opacity: opacity,
                    }}
                >
                    <ConIcon1 />
                    <S.IncludeIcon3>
                        <ConIcon2 />
                        <S.Just>
                            <ConIcon3 />
                        </S.Just>
                    </S.IncludeIcon3>
                    <ConIcon4 />
                </S.ConIcon>
                <div 
                    style={{
                        position: 'relative',
                        top: '112rem',
                        right: '10rem',
                        transform: `translateX(${translateX}px)`,
                    }}
                >
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
                </div>

                <div 
                    style={{
                        position: 'relative',
                        top: '132rem',
                        left: '10rem',
                        transform: `translateX(${-translateX}px)`,
                    }}
                >
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
                </div>

                <div 
                    style={{
                        position: 'relative',
                        top: '152rem',
                        right: '10rem',
                        transform: `translateX(${translateX}px)`,
                    }}
                >
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
                </div>

                <div 
                    style={{
                        position: 'relative',
                        top: '172rem',
                        left: '10rem',
                        transform: `translateX(${-translateX}px)`,
                    }}
                >
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
                            담당 : 오은찬(잡탕)
                        </S.ServTextContainer>
                </div>

                <div 
                    style={{
                        position: 'relative',
                        top: '202rem',
                        bottom: '20rem',
                        transform: `scale(${contributorsScale})`,
                    }}
                >
                    <S.InfoContainer  style={{ marginBottom: '20rem', flexDirection: "column", marginBottom: '20rem'}}>
                        <S.TextContainer style={{gap: '3.5rem', fontSize: '5rem'}}>
                            <S.ConIcon 
                                style={{
                                    transform: `scale(2.42)`,
                                }}>
                                <ConIcon1 />
                                <S.IncludeIcon3>
                                    <ConIcon2 />
                                    <S.Just>
                                        <ConIcon3 />
                                    </S.Just>
                                </S.IncludeIcon3>
                                <ConIcon4 />
                            </S.ConIcon>
                            TRIBUTORS
                        </S.TextContainer>

                        <br />
                        <S.ServTextContainer>
                            신희성, 방가온, 장예슬, 정상혁, BSC
                        </S.ServTextContainer>
                        
                    </S.InfoContainer>
                    
                </div>
                <S.ButtonWrapper>
                    <StyledButton onClick={MainBtn}>바로가기</StyledButton>
                </S.ButtonWrapper>
            </S.Body>
        </S.StyledBody>
    )
}

export default Show;