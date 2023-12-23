import styled from '@emotion/styled';

export const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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
    transition: transform 0.5s ease-in-out; 
    transform-origin: center center; 
`;

export const IncludeIcon3 = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    overflow: hidden; 
`;

export const Just = styled.div`
    display: flex;
    position: absolute;
`;

export const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 6rem; 
    display: flex;
    justify-content: center;
    z-index: 999;
    margin: 0;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
`

export const ImgContainer = styled.img`
    width: 9rem;
    height: 8rem;
    background: none;
`

export const TextContainer = styled.p`
    font-size: 4rem;
    font-weight: 700;
    margin: 0;
    display: flex;
    align-items: center;
`

export const ServTextContainer = styled.p`
    font-size: 2rem;
    color: gray;
    font-weight: 900;
    margin: 0;
`