import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqContainer } from "../containers/faq";
import { HeaderContainer } from "../containers/header";
import FeatureWrap from "../containers/featurewrap";

function Home() {
  return (
    <React.Fragment>
      <HeaderContainer>
        <FeatureWrap></FeatureWrap>
      </HeaderContainer>
      <JumbotronContainer></JumbotronContainer>
      <FaqContainer></FaqContainer>
      <FooterContainer></FooterContainer>
    </React.Fragment>
  );
}

export default Home;
