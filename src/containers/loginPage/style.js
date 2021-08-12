
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin:40px 0px 40px 0px;
  align-items: center;
  // border: 1px solid black;
  .cartdiv {
    border: 1px solid #e7e7e7;
    padding: 30px 25px 30px 25px;
    background-color: white;

  }

  .flexdiv {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .addspace {
    margin-bottom: 6px;
    
  }

  .login_buton {
    margin: 7px;
    width: 250px;
    hight: 50px;
    background-color: rgb(255, 235, 0);
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 3px;

  }
  .input-css {
    background-color: #f7f7f7;
    width: 250px;
    hight: 50px;
    padding: 7px;
    border: 1px solid #e7e7e7;
    border-radius: 3px;
    font-size: 12px;
  }
  .Logotext {
    font-size: 42px;
    font-family: 'Style Script', cursive;
  }
  .line-css {
    color: black;
  }
  .forgot-password {
    font-size: 12px;
    color: #999999;
  }
`;

