import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

const DetailsRecipeList = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const notify = () => {
    toast.success("Thank you for liking.");
    setIsButtonDisabled(true);
  };

  return (
    <Card className="mb-4" style={{ width: "100%" }}>
      <Card.Img
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        variant="top"
        src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
      />
      <Card.Body>
        <Card.Title>Recipe name</Card.Title>
        <Card.Text>Indridents</Card.Text>
        <Card.Text>Cooking method</Card.Text>
        <Card.Text>Rating</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button disabled={isButtonDisabled} onClick={notify} variant="primary">
          Favourite
        </Button>
      </Card.Footer>
      <Toaster />
    </Card>
  );
};

export default DetailsRecipeList;
