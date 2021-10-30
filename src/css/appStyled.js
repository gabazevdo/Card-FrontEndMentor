import styled from "styled-components";
import backgroundCurve from "../images/pattern-background-desktop.svg";
import backgroundMusic from "../images/illustration-hero.svg";



export const Body = styled.body`
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCard = styled.div`
  height: 80%;
  width: 50%;
  min-width: 440px;

  box-shadow: 1px 10px 15px #ccc;

  background-color: #e0e8ff;
  background-image: url(${backgroundCurve});

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  height: 80%;
  width: 30%;
  min-width: 420px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 1px 10px 15px #ccc;

  display: flex;
  flex-direction: column;
`;

export const DivImage = styled.div`
  height: 35%;
  width: 100%;
  background-color: #0000ff;

  background-image: url(${backgroundMusic});
  background-size: cover;

  border-radius: 20px 20px 0 0;
`;

export const InfoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const OrderSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  margin: 5px 0;

  width: 80%;
  height: 12vh;

  h2 {
    color: hsl(223, 47%, 23%);
    font-weight: 900;
  }

  p {
    text-align: center;
    color: hsl(224, 23%, 55%);
    font-weight: 500;
  }
`;

export const CardPrice = styled.div`
  width: 80%;
  height: 8vh;
  border-radius: 10px;
  background-color: #f8f9fe;

  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 20px 0;

  h3 {
    color: hsl(223, 47%, 23%);
    font-weight: 900;
  }

  p {
    color: hsl(224, 23%, 55%);
  }


:nth-child(2){
    color:red;
};


`;

export const ProcessedPay = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    color: #99a1b6;
    font-weight: 900;
    cursor: pointer;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 5vh;
  border: none;
  border-radius: 10px;
  background-color: #382ae1;
  box-shadow: 1px 5px 15px #e0e6fc;
  color: #e0e6fc;
  font-weight: 900;
  cursor: pointer;
  margin: 10px 0 20px 0;
`;

export const ImgMusic = styled.img`
  display: flex;
  align-self: center;
  justify-self: center;
  height: 50px;
`;
