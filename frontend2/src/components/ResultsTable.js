import React from "react";
import { Table, Form } from "react-bootstrap";

function ResultRow(props) {
  return (
    <tr>
      <td>{props.row.documentName}</td>
      <td>{props.row.cik}</td>
      <td>{props.row.companyName}</td>
      <td>{props.row.ticker}</td>
      <td>
        <Form.Check />
      </td>
    </tr>
  );
}

function getSearchResults() {
  return [
    {
      documentName: "test1.txt",
      cik: "12345",
      companyName: "Apple",
      ticker: "aapl",
    },
    {
      documentName: "test2.txt",
      cik: "2345",
      companyName: "pear",
      ticker: "aapl",
    },
    {
      documentName: "test3.txt",
      cik: "1234gjdfksl;jgk5",
      companyName: "Orange",
      ticker: "aapl",
    },
  ];
}

function ResultRows(props) {
  const results = getSearchResults();
  let rows = [];
  for (let i = 0; i < results.length; i++) {
    rows.push(<ResultRow row={results[i]} />);
  }

  return <tbody>{rows}</tbody>;
}

class ResultsTable extends React.Component {
  render() {
    return (
      <div className="ResultsTable">
        <div>
          <h4>Search Results</h4>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Document Name</th>
              <th>CIK</th>
              <th>Company Name</th>
              <th>Ticker</th>
              <th>Upload to Tagtog</th>
            </tr>
          </thead>
          <ResultRows />
        </Table>
      </div>
    );
  }
}

export default ResultsTable;
