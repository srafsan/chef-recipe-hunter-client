import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Container } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Container className="pb-5">
        <NavigationBar />
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
