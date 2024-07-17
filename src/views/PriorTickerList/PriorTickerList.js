import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PriorTickerList = () => {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get('https://confai-web-app.azurewebsites.net/api/prior_ticker_list/?format=json')
      .then((response) => {
        setData(response.data.results);
        setDisplayedData(response.data.results.slice(0, itemsPerPage));
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, []);

  const [todayData, setTodayData] = useState([]);
  const [todayLoading, setTodayLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://confai-web-app.azurewebsites.net/api/ticker_list/?format=json')
      .then((response) => {
        setTodayData(response.data.ticker_data_today);
        setTodayLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        setTodayLoading(false);
      });
  }, []);

  const loadMore = () => {
    const nextIndex = currentIndex + itemsPerPage;
    const newItems = data.slice(nextIndex, nextIndex + itemsPerPage);
    setDisplayedData([...displayedData, ...newItems]);
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    displayedData.forEach((item, index) => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: item.symbol,
        width: 350,
        isTransparent: false,
        colorTheme: 'light',
        locale: 'en'
      });
      document.getElementById(`tradingview-widget-${index}`).appendChild(script);
    });
  }, [displayedData]);

  return (
    <React.Fragment>
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
                <Link to={`/symbol-detail/${item.symbol}/`}>
                  <Card className="card-social">
                    <Card.Body className="border-bottom">
                      <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                          <h3>{item.symbol}</h3>
                        </div>
                        <div className="col text-end">
                          <h5 className="text-c-purple mb-0">{item.sentiment_category}</h5>
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
                      <div id={`tradingview-widget-${index}`} className="tradingview-widget-container"></div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Card.Body>
        )}
      </Row>
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
                <Row xs={2} md={4} lg={6}>
                  {displayedData.map((item, index) => (
                    <Col key={index} sm={2} md={2} xl={6} xxl={4}>
                      <Link to={`/symbol-detail/${item.symbol}/`}>
                        <Card className="card-social">
                          <Card.Body className="border-bottom">
                            <div className="row align-items-center justify-content-center">
                              <div className="col-auto">
                                <Link to={`/symbol-detail/${item.symbol}/`}>
                                  <h3>{item.symbol}</h3>
                                </Link>
                              </div>
                              <div className="col text-end">
                                <h5 className="text-c-purple mb-0">{item.sentiment_category}</h5>
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
                                <h6 className="text-center m-b-5">
                                  <span className="text-muted m-r-2">Weighted Average Sentiment:</span>
                                  {item.weighted_average_sentiment.toFixed(2)}
                                </h6>
                              </div>
                            </div>
                            <div id={`tradingview-widget-${index}`} className="tradingview-widget-container"></div>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  ))}
                </Row>
                {displayedData.length < data.length && (
                  <Button onClick={loadMore} className="mt-4">
                    Load More
                  </Button>
                )}
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PriorTickerList;
