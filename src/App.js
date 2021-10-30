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
                  <a href="#">Change</a>
                </span>

              </CardPrice>
            </InfoCard>

            <ProcessedPay>
              <Button>Processed to payment</Button>
              <a>Cancel order</a>
            </ProcessedPay>
          </Card>
        </ContainerCard>
      </Body>
    </>
  );
}

export default App;
