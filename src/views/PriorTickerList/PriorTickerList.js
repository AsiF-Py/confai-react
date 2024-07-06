import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PriorTickerList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    axios
      .get('https://confai-web-app.azurewebsites.net/api/prior_ticker_list/?format=json')
      .then((response) => {
        setData(response.data.results);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);
  

  const [todayData, setTodayData] = useState([]);
  const [todayLoading, setTodayLoading] = useState(true); // State for loading

  useEffect(() => {
    axios
      .get('https://confai-web-app.azurewebsites.net/api/ticker_list/?format=json')
      .then((response) => {
        setTodayData(response.data.ticker_data_today);
        setTodayLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        setTodayLoading(false); // Set loading to false even if there's an error
      });
  }, []);
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Prior Ticker List</Card.Title>
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
                    <th>Weighted Average Sentiment</th>
                    <th>Percentile</th>
                    <th>Sentiment Category</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                          <Link to={`/symbol-detail/${item.symbol}/`}>{item.symbol}</Link>
                        </td>
                      {/* <td>{item.symbol}</td> */}
                      <td>{item.weighted_average_sentiment.toFixed(2)}</td>
                      <td>{item.percentile.toFixed(2)}%</td>
                      <td>{item.sentiment_category}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
      <Row>
      <h3>Today Ticker Data</h3>
            {todayLoading ? (
              <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <Card.Body>
                {todayData.map((item, index) => (
                  <Col key={index} xl={6} xxl={4}>
                    <Card className="card-social">
                      <Card.Body className="border-bottom">
                        <div className="row align-items-center justify-content-center">
                          <div className="col-auto">
                          <h3>{item.symbol}</h3>
                          </div>
                          <div className="col text-end">
                            
                            <h5 className="text-c-purple mb-0">
                            {item.sentiment_category}
                            </h5>
                          </div>
                        </div>
                      </Card.Body>
                      <Card.Body>
                        <div className="row align-items-center justify-content-center card-active">
                          <div className="col-6">
                            <h6 className="text-center m-b-5">
                              <span className="text-muted m-r-2">Percentile:</span>
                              {item.percentile.toFixed(2)}%
                            </h6>
                            
                          </div>
                          <div className="col-6">
                            <h6 className="text-center  m-b-5">
                              <span className="text-muted m-r-2">Weighted Average Sentiment:</span>
                              {item.weighted_average_sentiment.toFixed(2)}
                              
                            </h6>
                      
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Card.Body>
            )}
      </Row>
    </React.Fragment>
  );
};

export default PriorTickerList;
