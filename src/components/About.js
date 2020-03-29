import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="m-20">
        This is a simple Employee database app created using React.
        <p className="mt-2">Technologies used:</p>
        <ul className=" m-4 list-disc">
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>
        <p className="mt-2">React concepts involved in this app:</p>
        <ul className=" m-4 list-disc">
          <li>Function components</li>
          <li>Class components</li>
          <li>State</li>
          <li>Handling events</li>
          <li>Conditional rendering</li>
          <li>Routing</li>
          <li>Http - API Invocation</li>
        </ul>
      </div>
    );
  }
}

export default About;
