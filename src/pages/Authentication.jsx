import styled from "styled-components"
import LogoImg from '../utils/Images/Logo.png';
import AuthImage from '../utils/Images/AuthImage.jpg';
import { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";


const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Logo = styled.img`
  position: absolute;
  width: 70px;
  top: 40px;
  left: 60px;
  z-index: 10;
`;
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;


function Authentication() {

    const [login, setLogin] = useState(false)
    return (
        <Container>
            <Left>
                <Logo src={LogoImg} />
                <Image src={AuthImage} />
            </Left>
            <Right>
                {login ? (<>
                       <Login />
                    <Text>Dont have a account ? <TextButton onClick={()=>setLogin(false)}>SignUp</TextButton> </Text></>

                    ) :(<>
                    <Signup />
                    <Text>Already have a account ? <TextButton onClick={()=>setLogin(true)} >Login</TextButton> </Text>
                    </>)}
            </Right>
        </Container>
    )
}

export default Authentication