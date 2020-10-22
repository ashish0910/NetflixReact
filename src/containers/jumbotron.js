import React from "react";
import jumboData from "../static-data/jumbo";
import { Jumbotron } from "../components";

export function JumbotronContainer() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map((jumbo) => (
          <Jumbotron key={jumbo.id} direction={jumbo.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{jumbo.subTitle}</Jumbotron.Subtitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image
                alt={jumbo.alt}
                src={jumbo.image}
              ></Jumbotron.Image>
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}

export default JumbotronContainer;
