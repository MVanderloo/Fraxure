import React from "react";
import ResultsTable from "../components/ResultsTable";

class ResultsPage extends React.Component {
  render() {
    return (
      <div className="ResultsPage">
        <div>
          <h2>Results Page</h2>
        </div>
        <ResultsTable />
      </div>
    );
  }
}

export default ResultsPage;
