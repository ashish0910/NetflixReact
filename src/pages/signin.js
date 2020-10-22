import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { validateEmail, validatePassword } from "../util";
import * as ROUTES from "../static-data/routes";

function SignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const isInvalid = !validateEmail(emailAddress) || password === "";
  const handleSignin = (e) => {
    e.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <React.Fragment>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-in"
            >
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </React.Fragment>
  );
}

export default SignIn;
