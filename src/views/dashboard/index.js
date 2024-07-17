import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Spinner, Table, Dropdown, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCalls = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState('date'); // Default sort criteria

  const incrementCount = () => {
    setCurrentPage(currentPage + 1);
  };

  const decrementCount = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://confai-web-app.azurewebsites.net/api/all_calls/?format=json&page=${currentPage}`)
      .then((response) => {
        setData(sortData(response.data, sortCriteria));
        // Here, we could set the total pages if the API provided it
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, [currentPage, sortCriteria]);

  const sortData = (data, criteria) => {
    switch (criteria) {
      case 'score':
        return [...data].sort((a, b) => b.weighted_average_sentiment - a.weighted_average_sentiment);
      case 'date':
        return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'name':
        return [...data].sort((a, b) => a.symbol.localeCompare(b.symbol));
      default:
        return data;
    }
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">All Calls</Card.Title>
              <Dropdown onSelect={handleSortChange}>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                  Sort by
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="score">Score</Dropdown.Item>
                  <Dropdown.Item eventKey="date">Date</Dropdown.Item>
                  <Dropdown.Item eventKey="name">Name</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
                        <th scope="row">{index + 1 + (currentPage - 1) * 10}</th> {/* Adjusting index for pagination */}
                        <td>
                          <Link to={`/call-detail/${call.symbol}/${call.year}/${call.quarter}/`}>{call.symbol}</Link>
                        </td>
                        <td>{call.year}</td>
                        <td>{call.quarter}</td>
                        <td>{call.date}</td>
                        <td>{call.weighted_average_sentiment.toFixed(2)}</td>
                        <td style={{ width: '4px' }}>{`${call.summary.slice(0, 30)}...`}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Pagination>
                  <Pagination.First onClick={decrementCount} disabled={currentPage === 1} />
                  <Pagination.Item>{currentPage}</Pagination.Item>
                  <Pagination.Next onClick={incrementCount} />
                </Pagination>
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AllCalls;
