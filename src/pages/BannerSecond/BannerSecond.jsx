const BannerSecond = () => {
  return (
    <div style={{ height: "600px", overflow: "hidden", position: "relative" }}>
      <img
        className="img-fluid w-100"
        src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt="Banner"
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          textAlign: "center",
          color: "white",
        }}
      >
        <h1>Welcome to our website</h1>
        <p>Learn more about our products and services</p>
        <button className="btn btn-light">Learn more</button>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.5,
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};

export default BannerSecond;
