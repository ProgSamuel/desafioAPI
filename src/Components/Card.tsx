import styled from 'styled-components';

interface informationsProp {
  name: string;
  isPlanet: string;
  gravity: string;
  discoveredBy: string;
  discoveryDate: string;
  bodyType: string;
}

const CardStyled = styled.div`
  border: 1px solid white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: fit-content;
  padding: 1rem 2rem;
  margin: auto;
  z-index: 1;
  h3 {
    margin-top: 0;
  }
  p {
    margin: 0;
  }
  i{
    margin-right:.7rem;
    width: 1rem;
    height: 1rem;
  }
`;

export default function CardStar(props: informationsProp) {
  return (
    <CardStyled>
      <h3>Name: {props.name}</h3>
      <p> <i className="fa-solid fa-earth-americas"></i> Is Planet: {props.isPlanet}</p>
      <p> <i className="fa-brands fa-grav"></i> Gravity: {props.gravity}</p>
      <p> <i className="fa-solid fa-user"></i> Discovery By: {props.discoveredBy}</p>
      <p> <i className="fa-regular fa-calendar"></i> Discovery date: {props.discoveryDate}</p>
      <p> <i className="fa-solid fa-layer-group"></i> Body Type: {props.bodyType}</p>
    </CardStyled>
  );
}
