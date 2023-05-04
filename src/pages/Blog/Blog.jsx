const Blog = () => {
  return (
    <div>
      <h4>
        Tell us the differences between uncontrolled and controlled components.
      </h4>
      <p>
        In software engineering, uncontrolled components are those that can be
        modified directly by any part of the system, while controlled components
        can only be modified through a defined interface or protocol. This
        provides greater reliability, security, and maintainability to the
        system, as changes to controlled components are managed and validated.
      </p>
      <br />
      <h4>How to validate React props using PropTypes.</h4>
      <p>
        To validate React props using PropTypes, first import the PropTypes
        library from the prop-types package. Then, define the expected prop
        types as properties of the component and set them equal to the
        corresponding PropTypes validator functions. Finally, pass the props to
        the component and PropTypes will validate that they match the expected
        types, logging a warning message to the console if they do not.
      </p>
      <br />
      <h4>Tell us the difference between nodejs and express js.</h4>
      <p>
        Node.js is a JavaScript runtime that allows developers to run JavaScript
        on the server-side. Express.js is a web application framework built on
        top of Node.js that provides a set of features and tools for building
        web applications, such as routing, middleware, and templating.
        Essentially, Node.js is the platform and runtime, while Express.js is a
        framework that runs on top of Node.js to simplify the process of
        building web applications.
      </p>
      <br />
      <h4>What is a custom hook, and why will you create a custom hook?</h4>
      <p>
        A custom hook is a function in React that allows you to reuse stateful
        logic across multiple components. You would create a custom hook to
        abstract complex logic into a reusable function that can be shared
        across components, improving code reuse and reducing duplication. Custom
        hooks can also make code more readable and easier to maintain
      </p>
    </div>
  );
};

export default Blog;
