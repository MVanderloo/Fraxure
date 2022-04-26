import React from "react";
import { Card } from "react-bootstrap";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h2>About Us</h2>
        <div>
          Fraxure is a tool we designed to enhance the speed at which a person
          can analyze 10-K forms from the SEC in order to pull out information
          which is difficult to do programatically, such as named people and
          geographical locations.
        </div>
        <br />
        <div>
          This tool is used to gather information about US fracking companies,
          who share the common requirement of submitting 10-K forms annually. By
          gathering this information, we learn more about where fracking is
          being done and can study the environmental impact.
        </div>
      </div>
    );
  }
}

export default AboutPage;
