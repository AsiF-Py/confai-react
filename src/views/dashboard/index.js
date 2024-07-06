import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCalls = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    axios
      .get('https://confai-web-app.azurewebsites.net/api/all_calls/?format=json')
      .then((response) => {
        setData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        setLoading(false); // Set loading to false after data is fetched
      });
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">All Calls</Card.Title>
            </Card.Header>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Symbol</th>
                      <th>Year</th>
                      <th>Quarter</th>
                      <th>Date</th>
                      <th>Sentiment</th>
                      <th>Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((call, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <Link to={`/call-detail/${call.symbol}/${call.year}/${call.quarter}/`}>{call.symbol}</Link>
                        </td>
                        <td>{call.year}</td>
                        <td>{call.quarter}</td>
                        <td>{call.date}</td>
                        <td>{call.weighted_average_sentiment.toFixed(2)}</td>
                        <td>{call.summary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AllCalls;
