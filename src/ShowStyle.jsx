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

export const ConIcon1 = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.125rem;
    justify-content: center;
    transition: transform 0.5s ease-in-out; 
    transform-origin: center center; 
    position: fixed;
    top: 45%;
    z-index: 999;
`;

export const ConIcon2 = styled.div`
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
    margin-bottom: ${(props) => (props.alone ? '20rem' : '')};
    flex-direction: ${(props) => (props.alone ? 'column' : '')};
`

export const ImgContainer = styled.img`
    width: 9rem;
    height: 8rem;
    background: none;
`

export const TextContainer = styled.p`
    font-weight: 700;
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${(props) => (props.alone ? '3.5rem' : '')};
    font-size: ${(props) => (props.alone ? '5rem' : '4rem')};
`

export const ServTextContainer = styled.p`
    font-size: 2rem;
    color: gray;
    font-weight: 900;
    margin: 0;
`

export const StyledButton = styled.button`
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

export const LeftRelative1 = styled.div`
    position: relative;
    top: 112rem;
    right: 10rem;
`

export const LeftRelative2 = styled.div`
    position: relative;
    top: 152rem;
    right: 10rem;
`

export const RightRelative1 = styled.div`
    position: relative;
    top: 132rem;
    left: 10rem;
`

export const RightRelative2 = styled.div`
    position: relative;
    top: 172rem;
    left: 10rem;
`

export const Contributors = styled.div`
    position: relative;
    top: 202rem;
`