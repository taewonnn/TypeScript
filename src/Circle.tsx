import styled from "styled-components";
import {useState} from "react";

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

  const [counter, setCounter] = useState(1);
  // 초깃값에 number가 들어갔기에 setCounter안에 숫자가 와야한다고 인식, 문자열을 넣으면 타입이 잘못되었다고 알려줌
  // setCounter('hello')

  // number 이외에 string 모두 적용하고 싶다면?!  => <string|number>
  const [value, setValue] = useState<string|number>(1)
  setValue(2)
  setValue('hello')



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
