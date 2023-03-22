import styled from "styled-components";

interface ContainerProps {
  bgColor : string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor : string;
}

export default function Circle ({bgColor}: CircleProps) {
  return <Container bgColor={bgColor} />;
}




// interface 예시
interface PlayerShape {
  name: string,
  age: number
}

const sayHello = (playerObj:PlayerShape) =>
  `Hello ${playerObj.name}, you are ${playerObj.age} years old`
