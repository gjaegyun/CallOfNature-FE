import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const getFloorStyle = (selectedLocation, selectedFloor, currentFloor) => {
    const isSelected = selectedLocation === currentFloor.location && selectedFloor === currentFloor.floor;
    const isMainLocation = selectedLocation === 'main';
    const backgroundColor = isSelected ? '#8bde22' : isMainLocation ? '#f0f1f2' : '#fff';
    const textColor = isSelected ? '#fff' : isMainLocation ? '#8bde22' : 'var(--gray-400, #969696)';
  
    return {
      background: backgroundColor,
      color: textColor,
    };
  };

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

export const IncludeIcon3 = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`

export const Just = styled.div`
  display: flex;
  position: absolute;
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

    transition: all 0.2s linear;

    &:hover {
        color: #8BDE22;
        transform: scale( 1.12 );
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

    transition: all 0.2s linear;

    &:hover {
        color: #8BDE22;
        transform: scale( 1.12 );
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
    &::-webkit-scrollbar {
      width: 5rem;
      height: 0.75rem;
      padding-left: 1.25rem;
      padding-bottom: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: #D9D9D9;
      border: #D9D9D9;
      border-radius: 0.625rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: gray;
    }
    &::-webkit-scrollbar-track {
      padding-left: 1.25rem;
      padding-bottom: 0.5rem;
    }
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
    height: 2rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
`

export const TimerText = styled.div`
    color: var(--yellow_black, #252621);
    font-family: Inter;
    font-size: 1.575rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    float: left;
`

export const ModalContent = styled.div`
    margin: 1rem;
    width: fit-content;
    display: flex;
    padding: 1.5rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    border-radius: 1rem;
    background: #fff;
    box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.1);
`

export const ModalDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21rem;
  height: 2.9375rem;
  border-radius: 0.625rem;
  background: #F0F1F2;
  color: #050505;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`

export const ModalDayText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 2rem;
  left: 0.3125rem;
  top: 0.1875rem;
  border-radius: 0.625rem;
  background: #FFF;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.25);
  margin: 0.25rem;
  color: #050505;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`

export const MealGrayBox = styled.div`
  display: inline-flex;
  padding: 0.875rem 11.5rem 1.25rem 0.5625rem;
  align-items: center;
  border-radius: 0.625rem;
  background: #F0F1F2;
`

export const ToiletContent = styled.div`
    display: flex;
    width: 29.375rem;
    padding: 1.25rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.75rem;

    border-radius: 0.625rem;
    background: #FFF;
`

export const ToiletBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const ToiletStateText = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`

export const ToiletGrayBox = styled.div`
  width: 29.375rem;
  height: 13.75rem;
  border-radius: 0.625rem;
  background: #F0F1F2;
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
    font-weight: 700;
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
    display: ${(props) => (props.showModal ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
`

export const ComplainModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display:  ${(props) => (props.showComplainModal ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`

export const ComplainWriteOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.showWriteModal ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`

export const ToiletOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.showToilet ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`


export const Modal = styled.div`
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.3rem;
    background-color: #fff;
    display: ${(props) => (props.showModal ? 'flex' : 'none')};
    border-radius: 1rem;
    width: fit-content;
    animation: ${fadeIn} 0.6s ease-in-out;
`

export const ComplainModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  height: 0;
  width: 0;
  display: ${(props) => (props.showComplainModal ? 'block' : 'none')};
  animation: ${fadeIn} 0.6s ease-in-out;
`

export const ComplainWriteModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  height: 0;
  width: 0;
  display: ${(props) => (props.showWriteModal ? 'block' : 'none')};
  animation: ${fadeIn} 0.6s ease-in-out;
`

export const ToiletModal = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  height: 0;
  width: 0;
  display: ${(props) => (props.showToilet ? 'flex' : 'none')};
  animation: ${fadeIn} 0.6s ease-in-out;
`

export const ToiletArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.625rem;
  height: 6.25rem;
  flex-shrink: 0;
  border-radius: ${(props) => (props.border ? '0.625rem 0rem 0rem 0rem' : '0')};
  border: 1px solid var(--gray-400, #969696);
  background: #FFF;
`

export const ToiletState = styled.div`
  display: inline-flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.625rem;
  background: ${(props) => (props.remain ? 'rgba(67, 117, 215, 0.10)' : 'rgba(208, 19, 19, 0.10)')};
`

export const ToiletText = styled.p`
  color: ${(props) => (props.text ? '#4375D7' : '#D01313')};
  text-align: center;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`

export const ToiletEntet = styled.div`
  float: right;
  margin: 1rem;
  margin-top: 2.5rem;
  border: 1px solid var(--gray-400, #969696);
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.3125rem;
  height: 1.6875rem;
  flex-shrink: 0;
  fill: #FFF;
  stroke-width: 1px;
  stroke: var(--gray-400, #969696);
`

export const EnterText = styled.p`
  color: var(--yellow_black, #252621);
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`

export const RedText = styled.span`
    color: red;
`;

export const FloorButton = styled.button`
  display: flex;
  padding: 0.375rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: 1px solid var(--gray-300, #bcbcbc);
  border-radius: 0.625rem;
  cursor: pointer;

  background: ${(props) =>
    props.selected
      ? '#8bde22'
      : props.selectedLocation === 'main'
      ? props.floor === 'floor1'
        ? '#f0f1f2'
        : '#fff'
      : '#fff'};

  color: ${(props) =>
    props.selected
      ? '#fff'
      : props.selectedLocation === 'main'
      ? props.floor === 'floor1'
        ? '#8bde22'
        : 'var(--gray-400, #969696)'
      : 'var(--gray-400, #969696)'};

transition: all 0.25s linear;

  &:hover {
    background-color: ${(props) => (props.selected ? '' : '#e8e8e8')};
    color: ${(props) => (props.selected ? '' : '#c0c0c0')};
  }
`;

export const FloorText = styled.p`
margin: 0;
  color: ${(props) =>
    props.selected
      ? '#fff'
      : props.selectedLocation === 'main' && props.floor === props.selectedFloor
      ? '#8bde22'
      : 'var(--gray-400, #969696)'};
`;

export const MainContent = styled.div`
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
`;

export const FloorLocation = styled.div`
  display: flex;
  width: 37.5rem;
  justify-content: space-between;
`;

export const Location = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0;
`;

export const Floorlist = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const MainLocation = styled(FloorButton)`
  background: ${(props) =>
    props.selected
      ? '#8bde22'
      : props.selectedLocation === 'main'
      ? '#f0f1f2'
      : '#fff'};
  color: ${(props) =>
    props.selected
      ? '#fff'
      : props.selectedLocation === 'main'
      ? '#8bde22'
      : 'var(--gray-400, #969696)'};

  transition: all 0.25s linear;

  &:hover {
    background-color: ${(props) => (props.selected ? '' : '#e8e8e8')};
    color: ${(props) => (props.selected ? '' : '#c0c0c0')};
  }
`;

export const ServLocation = styled(FloorButton)`
  background: ${(props) =>
    props.selected
      ? '#8bde22'
      : props.selectedLocation === 'serv'
      ? '#f0f1f2'
      : '#fff'};
  color: ${(props) =>
    props.selected
      ? '#fff'
      : props.selectedLocation === 'serv'
      ? '#8bde22'
      : 'var(--gray-400, #969696)'};

  transition: all 0.25s linear;

  &:hover {
    background-color: ${(props) => (props.selected ? '' : '#e8e8e8')};
    color: ${(props) => (props.selected ? '' : '#c0c0c0')};
  }
`;

export const MainLocationText = styled(FloorText)``;

export const ServLocationText = styled(FloorText)``;

export const Floor1 = styled(FloorButton)``;

export const Floor2 = styled(FloorButton)``;

export const Floor3 = styled(FloorButton)``;

export const Floor4 = styled(FloorButton)``;

export const Floor1Text = styled(FloorText)``;

export const Floor2Text = styled(FloorText)``;

export const Floor3Text = styled(FloorText)``;

export const Floor4Text = styled(FloorText)``;

export const RemainToiletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`

export const RemainToilet = styled.button`
  display: flex;
  width: 37.5rem;
  padding: 1rem 0rem;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 0.625rem;
  border: 1.5px solid ${(props) => (props.noData ? 'var(--gray-400, #969696)' : props.gender === 'female' ? '#E05555' : '#514EEC')};
  cursor: ${(props) => (props.noData ?  '': 'pointer') };
  background-color: ${(props) => (props.noData ?  '': '#fff') };
  color: ${(props) => (props.noData ? 'var(--gray-400, #969696)' : props.gender === 'female' ? '#E05555' : '#514EEC')};

  font-size: 1rem;

  position: relative;
  transition: all 0.25s linear;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: ${(props) => (props.noData ? '' : props.gender === 'female' ? '#E05555' : '#514EEC')};

    transition: all 0.3s ease;
  }

  &:before {
    top: 0;
    left: 0;
  }

  &:after {
    bottom: 0;
    right: 0;
  }

  &:hover {
    transform: ${(props) => (props.noData ? '' : 'scale(1.02)')};
    background-color: ${(props) => (props.noData ? '' : 'transparent')};
    font-size: ${(props) => (props.noData ? '' : props.gender === 'female' ? '1.02rem' : '1.05rem')};
    border: ${(props) => (props.noData ? '' : '1.5px solid transparent')};

    &:before {
      width: 100%;
    }

    &:after {
      width: 100%;
    }
  }
`;



export const RemainText = styled.p`
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-left: 1rem;
`;

export const RemainNum = styled.p`
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-right: 1rem;
`

export const DangerousContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`

export const DangerousText = styled.p`
  color: #D01313;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`

export const DangerousIconBox = styled.div`
  display: flex;
  width: 1.5rem;
  padding: 0.125rem 0.125rem 0.25rem 0.125rem;
  justify-content: center;
  align-items: center;
`

export const ComplainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  flex-shrink: 0;
  fill: #fff;
  filter: drop-shadow(1px 1px 6px rgba(172, 172, 172, 0.30));
  position: relative;
`

export const ComplainGrayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 24.875rem;
  height: 29.375rem;
  overflow-y: auto;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #F0F1F2;
  gap: 1.2rem;
  padding-top: 1.2rem;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.5;
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border: #D9D9D9;
    border-radius: 0.625rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: gray;
  }
  &::-webkit-scrollbar-track {
    padding-left: 1.25rem;
    padding-bottom: 0.5rem;
  }
`

export const ComplainInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24.875rem;
  height: 29.375rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #F0F1F2;
`

export const ComplainWhiteBox = styled.div`
  display: flex;
  justify-content: center;
  width: 20.875rem;
  height: 25.375rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.10);
`

export const ComplainContent = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
  width: 22rem;
  height: 3.5rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.10);
`

export const ComplainTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.5rem;
`

export const ComplainBoxText = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0;
  margin: 0;
`

export const WriteBox = styled.div`
  padding-top: 1rem;
  align-items: center;
  width: 23.75rem;
  display: flex;
  justify-content: center;
  background: #F0F1F2;
  position: sticky;
  bottom: 0;
  z-index: 1;
`

export const ComplainWrite = styled.button`
  display: inline-flex;
  padding: 1rem;
  width: 50%;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: none;
  background: #fff;
  color: #000;
  font-weight: 550;
  border-radius: 0.625rem;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.10);
  margin-bottom: 1rem;
  cursor: pointer;

  transition: all 0.3s ease;

  :hover {
    background-color: #F0F1F2;
    font-weight: 600;
    font-size: 0.9rem;
    box-shadow: none;
    border: 0.5px solid #000
  }
`

export const WriteText = styled.p`
  font-size: 0.8rem;
  font-weight: 550;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.04rem;
  margin: 0;
`

export const CalanderText = styled.p`
  color: #B8B8B8;
  text-align: center;
  font-family: Inter;
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const CalenderBox = styled.div`
  display: flex;
  flex-shrink: 0;
`

export const JustBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
export const InputLine = styled.textarea`
  display: flex;
  width: 18.3125rem;
  height: 20rem;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  color: black;
  font-family: Mulish;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  margin: 0;
  border: none;
  white-space: pre-wrap;
  resize: none;
  outline: none;
`

export const FinishWrite = styled.button`
  display: inline-flex;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  border: none;
  background: #ebebeb;
  cursor: pointer;
  border-radius: 0.625rem;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.10);

  transition: all 0.3s ease;

  :hover {
    background-color: #fff;
    font-weight: 600;
    font-size: 0.9rem;
    box-shadow: none;
    border: 0.5px solid #000
  }
`

export const FinishText = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.04rem;
  font-size: 0.8rem;
  font-weight: 550;
  margin: 0;
`

export const FinishDirection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 23rem;
  padding-top: 1rem;
`

export const RemainToiletBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
`

export const ToiletImg = styled.img`
  height: 1.05rem;
  
`