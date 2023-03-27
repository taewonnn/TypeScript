// import Circle from "./Circle";

import {useState} from "react";
import styled from "styled-components";



// TypeScript
// const plus = (a:number, b:number) => a + b

interface DummyProps {
  text: string;
  active?: boolean;
}
function Dummy({text, active = false}: DummyProps) {
  return <h1>{text}</h1>
}




const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
  `

const H1 = styled.h1`
  color: ${props => props.theme.textColor}
`


  function App() {

  const [value, setValue] = useState('')

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    const {
      currentTarget : {value},
    } = event;
    setValue(event.currentTarget.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value)
  }




  return (
    <div>
      <form onSubmit={onSubmit} >
        <input onChange={onChange} value = {value} type='text' placeholder='username'/>
        <button>LogIn</button>
      </form>
      <Container>
        <H1>protected</H1>
      </Container>
      <Dummy text="hello" active={true} />
    </div>

  );
}

export default App;



