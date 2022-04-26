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
        <br />
        {/* <div>
          The namesake of Fraxure comes from the Pókemon. According to the
          Pokedex:
          <Card>
            <Card.Body>
              <Card.Img src="Fraxure-2.webp" />
              <Card.Title>Fraxure</Card.Title>
              Fraxure is a bipedal, draconic Pokémon with long, gray tusks with
              red tips protruding from the sides of its mouth. These tusks are
              capable of breaking boulders. It has dark eyes with red irises, a
              gray face, and a cowl-like feature of green segments on its head,
              neck, back, and chest. Its arms have three red fingers, and its
              lower body is gray, with red speckles on the underbelly. It has
              red toes and a red tip on its tail. Fraxure is very violent and
              territorial. Fights over turf often break out between it and
              another Fraxure. After a fight, it sharpens its tusks on river
              rocks, as they do not regenerate. It lives alongside rivers.
              Fraxure engages in violent confrontations with Bisharp for the
              locations of sharping stones.
            </Card.Body>
          </Card>
        </div> */}
        <br />
      </div>
    );
  }
}

export default AboutPage;
