import { Container, Button, Col, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import Movies from './Components/Movies';
import LoginForm from './Components/LoginForm';
import store from './Redux/store';

function App() {

  /***********************USERS************************* */

  /*Default values*/
  const adminUser = {
    email: "asd@asd.com",
    password: "123"
  }
  /*************************/

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  /*Login user*/
  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Loged in");

      /*Add user to login*/
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else {
      console.log("details do not match");

      setError("Details do not match!");
    }
  }
  /****************************/

  /*Logout user*/
  const Logout = () => {
    console.log("Logout");

    setUser({ name: "", email: "" });
  }

  /************************************************************* */

  return (
    <Provider store={store}>
      <Container className="p-1 mb-2 bg-dark text-dark">

        {(user.email !== "") ? (
          <div>
            <Row>
              <Col>
                <h2 className="text-white">Welcome -- <span className="text-success">{user.name}</span> --</h2>
              </Col>

              <Col>
                <Button variant="danger" className="mb-4 mt-1" onClick={Logout}>Logout</Button>
              </Col>
            </Row>

            <Movies />
          </div>
        ) : (
            <LoginForm Login={Login} error={error} />
          )}

      </Container>
    </Provider>
  );
}

export default App;
