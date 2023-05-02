/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn, signInGoogle, signInGithub } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogle = () => {
    signInGoogle();
  };

  const handleGithub = () => {
    signInGithub();
  };

  return (
    <Container className="mx-auto w-25">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don&apos;t Have an Account?
          <Link to="/register" className="text-danger">
            Register
          </Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>

        <div className="d-flex flex-column">
          <Button
            onClick={handleGoogle}
            className="my-3"
            variant="primary"
            type="submit"
          >
            Google
          </Button>
          <Button onClick={handleGithub} variant="primary" type="submit">
            Github
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
