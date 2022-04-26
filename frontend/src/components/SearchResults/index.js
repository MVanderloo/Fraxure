import React, { Component } from "react";
import Box from "@mui/material/Box";

class SECResultBox extends Component {
  render() {
    return "inside box";
  }
}

export class SECResultRow extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Results</h1>
        </div>
        {/* <Box display="flex">
          {this.props.details.map((detail) => {
            return <SECResultBox key={detail.id} {...detail} />;
          })}
        </Box> */}
      </div>
    );
  }
}
