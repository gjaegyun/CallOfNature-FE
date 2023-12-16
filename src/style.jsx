import styled from '@emotion/styled';

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
    height: 2rem;
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
    display: ${(props) => (props.showModal ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
`

export const Modal = styled.div`
    position: fixed;
    top: 31%;
    left: 52%;
    transform: translate(-50%, -50%);
    padding: 1.5rem;
    background-color: #fff;
    display: ${(props) => (props.showModal ? 'block' : 'none')};
    border-radius: 1rem;
    border-top-right-radius: 0;
    width: 17vw; 

    @media (max-width: 767px) {
        width: 90vw;
    }
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

  &:hover {
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

  &:hover {
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

  &:hover {
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

export const RemainToilet = styled.div`
  display: flex;
  width: 37.5rem;
  padding: 1rem 0rem;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 0.625rem;
  border: 1px solid ${(props) => (props.gender === 'female' ? 'red' : 'blue')};
  
  border: 1px solid ${(props) => (props.noData ? 'var(--gray-400, #969696)' : props.gender === 'female' ? 'red' : 'blue')};
`;

export const RemainText = styled.p`
  color: ${(props) => (props.gender === 'female' ? 'red' : 'blue')};
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-left: 1rem;

  color: ${(props) => (props.noData ? 'var(--gray-400, #969696)' : props.gender === 'female' ? 'red' : 'blue')};
`;

export const RemainNum = styled.p`
  color: ${(props) => (props.gender === 'female' ? 'red' : 'blue')};
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-right: 1rem;
`
