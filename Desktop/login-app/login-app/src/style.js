import styled, {createGlobalStyle,css} from 'styled-components';
import bgimage from './bgimage.jpg';

const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    overflow: hidden;
}
`;
const bg_stuff = css`
background-image: url(${bgimage});
background-position: left;
background-size: cover;
background-repeat:no-repeat;
`;

const transitionTime = '2000ms';

const Background = styled.div`
${bg_stuff}
display: flex;
width: 100vw;
height: 100vh;
align-items: center;
justify-content:center;
transition: background-position ${transitionTime};

  @media (min-width: 48.0em){
      background-position: center;
  }
`;

const LoginForm = styled.form`
 width: 60%;
 height: 60%;
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 overflow: hidden;
 transition: height ${transitionTime};
   &::after {
       content: '';
       ${bg_stuff}
       width: 100vw;
       height: 100vh;
       position: absolute;
       filter: blur(0.8125em);
       transition: background-position ${transitionTime};

       @media (min-width: 48.0em){
      background-position: center;
  }
   }
 `;

 const InputsWrapper = styled.div`
   width: 70%;
   display: flex;
   flex-direction: column;
   z-index: 1;
   align-items: center;
   justify-content: center;
 `;
 const InputWrapper = styled.div`
    width: 60%;
    display: flex;
    border-bottom:${props => props.noUnderline ? 'none' : '0.0625em solid black'};
    padding-top: 1.5em;
   
 `;

 const Input = styled.input`
  text-decoration: none;
  background: none;
  border: none;
  outline: none;
  padding-left: 0.5em;
  padding-bottom: 0.5em;
  transition: background-position ${transitionTime};
   
   @media (min-width: 48em){
       color:black;
    
   }


  &::placeholder {
      color: black;
      transition: color ${transitionTime};

      @media (min-width: 48em) {
          color: white;
      }
  }
 `;

 const Submit = styled(Input)`
    margin-left: .5em;
    transition: background-position ${transitionTime};
      &:hover {
          cursor: pointer;
          transform: scale(1.2);
      }
 `
export {
    GlobalStyle,
    Background,
    LoginForm,
    InputWrapper,
    InputsWrapper,
    Input,
    Submit
};
//in this part of code i using style componets and adding for font FONTAWESOME//