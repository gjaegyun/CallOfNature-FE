import styled from '@emotion/styled';

export const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10rem;
`;

export const ConIcon = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.125rem;
    justify-content: center;
    transition: transform 0.5s ease-in-out; /* 트랜지션 추가 */
    transform-origin: center center; /* 중심을 정중앙으로 설정 */
`;

export const IncludeIcon3 = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* 내용이 넘칠 경우 숨김 처리 */
`;

export const Just = styled.div`
    display: flex;
    position: absolute;
`;

export const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 8rem; /* 버튼이 항상 아래에서 8rem 위에 위치하도록 조정 */
    width: 100%;
    background-color: white; /* 필요에 따라 배경색 조정 */
    padding: 1rem; /* 필요에 따라 여백 조정 */
    display: flex;
    justify-content: center;
`;