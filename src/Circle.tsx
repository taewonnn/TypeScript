import styled from "styled-components";

interface ContainerProps {
  bgColor : string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
  bgColor : string;
  // ? 붙이면 required가 아님!
  borderColor?: string;
  text?: string;
}

export default function Circle ({bgColor, borderColor, text = 'default text'}: CircleProps) {
  return (
  <Container bgColor={bgColor} borderColor={borderColor ?? 'black'}>
    {text}
  </Container>
  );
  // borderColor ?? 'black'  => borderColor가 있으면 사용하고, 없다면 'black'을 사용해줘
}




// interface 예시
interface PlayerShape {
  name: string,
  age: number
}

const sayHello = (playerObj:PlayerShape) =>
  `Hello ${playerObj.name}, you are ${playerObj.age} years old`
