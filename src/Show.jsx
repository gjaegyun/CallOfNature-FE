import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as S from './ShowStyle';

import ConIcon1 from './svg/ConIcon1';
import ConIcon2 from './svg/ConIcon2';
import ConIcon3 from './svg/ConIcon3';
import ConIcon4 from './svg/ConIcon4';

function Show() {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);
    const maxScale = 20; // 최대 크기 설정

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scale = Math.min(1 + scrollY / 20, maxScale); // 최대 크기 제한

    const MainBtn = () => {
        navigate(`/con`);
    }

    return (
        <S.StyledBody>
            <S.Body>
                <S.ConIcon style={{ transform: `scale(${scale})`, position: 'fixed', top: '45%' }}>
                    <ConIcon1 />
                    <S.IncludeIcon3>
                        <ConIcon2 />
                        <S.Just>
                            <ConIcon3 />
                        </S.Just>
                    </S.IncludeIcon3>
                    <ConIcon4 />
                </S.ConIcon>
                <S.ButtonWrapper>
                    <button onClick={MainBtn}>main으로</button>
                </S.ButtonWrapper>
            </S.Body>
        </S.StyledBody>
    )
}

export default Show;