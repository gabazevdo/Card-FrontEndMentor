import {
  Body,
  ContainerCard,
  Card,
  DivImage,
  InfoCard,
  OrderSummary,
  CardPrice,
  Button,
  ProcessedPay,
  ImgMusic,
} from "./css/appStyled";

import iconMusic from "./images/icon-music.png";

function App() {


const Click = () =>{
  alert("You clicked")
}

  return (
    <>
      <Body>
        <ContainerCard>
          <Card>
            <DivImage />
            <InfoCard>
              <OrderSummary>
                <h2>Order Summary</h2>

                <p>
                  You can now listn to millions of songs, audiobooks, and
                  poodcasts on any device anywhere you like!
                </p>
              </OrderSummary>

              <CardPrice>
                <span>
                  <ImgMusic src={iconMusic} />
                </span>

                <span>
                  <h3>Annual Plan</h3>
                  <p>$ 59.99/year</p>
                </span>

                <span>
                  <a href="#" onClick={Click}>Change</a>
                </span>

              </CardPrice>
            </InfoCard>

            <ProcessedPay>
              <Button onClick={Click}>Processed to payment</Button>
              <a href="#" onClick={Click}>Cancel order</a>
            </ProcessedPay>
          </Card>
        </ContainerCard>
      </Body>
    </>
  );
}

export default App;
