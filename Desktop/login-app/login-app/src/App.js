import React from 'react';
import{GlobalStyle,Background,LoginForm,InputWrapper,InputsWrapper,Input,Submit} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faUser,faLock} from '@fortawesome/free-solid-svg-icons';

function App() {
    return (
      <div className="App">
      <GlobalStyle/>
      <Background>
      <LoginForm>
      <InputsWrapper>
      <InputWrapper>
      <FontAwesomeIcon icon={faUser}/>
      <Input placeholder='UserName'/>
      </InputWrapper>
      <InputWrapper>
      <FontAwesomeIcon icon={faLock}/>
      <Input type="Password" placeholder="Password"/>
      </InputWrapper>
      <InputWrapper noUnderline={true}>
      <Submit type="SUBMIT" placeholder= "Password"/>
      </InputWrapper>
      </InputsWrapper>
      </LoginForm>
      </Background>

      </div>

    );
  }
  
  export default App;
  


