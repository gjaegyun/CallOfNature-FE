import styled from '@emotion/styled';

export const StyledBody = styled.div`
    display: flex;
    justify-content: center;
`

export const Body  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1.5rem;
`

export const NavBar = styled.div`
    display: flex;
    width: 37.5rem;
    padding: 1.25rem 0.75rem;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #949698;
    background-color: #FFF;
    align-items: center;
`

export const ConIcon = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.125rem;
`
export const NavText = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2.5rem;
`

export const MealText = styled.p`
    color: var(--gray-300, #BCBCBC);
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
    padding: 0;
    cursor: pointer;

    transition: background-color 0.3s ease; 

    &:hover {
        background-color: #8BDE22;
        color: white;
    }

    &:active {
        background-color: #5E9C20; 
        color: var(--gray-300, #BCBCBC);
    }
`

export const ComplainText = styled.p`
    color: var(--gray-300, #BCBCBC);
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
    padding: 0;
    cursor: pointer;

    transition: background-color 0.3s ease; 

    &:hover {
        background-color: #8BDE22;
        color: white;
    }

    &:active {
        background-color: #5E9C20; 
        color: var(--gray-300, #BCBCBC);
    }
`

export const ContentBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 37.5rem;
    height: 22.3125rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #F0F1F2;
    overflow: auto;
`

export const MapBox = styled.div`
    display: flex;
    justify-content: center;
    height: 20rem;
    flex-shrink: 0;
    overflow: auto;
    display: flex;
`

export const TimerBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 37.5rem;
`

export const Timer = styled.div`
    display: inline-flex;
    width: 12.875rem;
    height: 3.5rem;
    padding-bottom: 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
`

export const TimerText = styled.div`
    color: var(--yellow_black, #252621);
    font-family: monospace;
    font-size: 1.575rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    float: left;
`

export const ModalContent = styled.div`
    width: fit-content;
    display: flex;
    padding: 1.25rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    border-radius: 1rem;
    background: #fff;
`

export const ModalBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
`

export const ModalText = styled.p`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 0;
    margin: 0;
`

export const MealContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
`

export const MealList = styled.p`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0;
    margin: 0;
`
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.showModal ? 'block' : 'none')};
`

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5rem;
    background-color: #fff;
    display: ${(props) => (props.showModal ? 'block' : 'none')};
    border-radius: 1rem;
`

export const MainContent = styled.div`
    display: inline-block;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
`

export const FloorLocation = styled.div`
    display: flex;
    width: 37.5rem;
    justify-content: space-between;
    align-items: flex-start;
`

export const RedText = styled.span`
    color: red;
`;