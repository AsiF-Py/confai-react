import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Card, Spinner, Image, Button, Collapse } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import FinancialsCard from './FinancialsCard';

const Symbol = () => {
  const [isBasic, setIsBasic] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { ticker_symbol } = useParams();
  useEffect(() => {
    axios
      .get(`https://confai-web-app.azurewebsites.net/api/symbol/${ticker_symbol}/?format=json`)
      .then((response) => {
        console.log(response);
        setData(response.data); // Response should be response.data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [ticker_symbol]);
  if (loading || !data) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    ); // Render a loading message while fetching data
  }

  console.log(ticker_symbol);

  return (
    <React.Fragment>
      <Row>
        <h5>{data.symbol}</h5>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Latest Call</Card.Title>
          </Card.Header>
          <Card.Body>
            <h5>Year: {data.latest_call_info.year}</h5>
            <h5>Quarter: {data.latest_call_info.quarter}</h5>
            <h5>Date: {data.latest_call_info.date}</h5>
            <h5>Weighted Average Sentiment: {data.latest_call_info.weighted_average_sentiment.toFixed(2)}</h5>
            <hr />
            <h4>Negative Sentences</h4>
            {data.latest_call_info.negative_sentences.map((sentence, index) => (
              <ul key={index} className="mt-3">
                <li>
                  {parseFloat(sentence[0]).toFixed(2)}: {sentence[1]}
                </li>
              </ul>
            ))}
            <hr />
            <h4>Positive Sentences</h4>
            {data.latest_call_info.positive_sentences.map((sentence, index) => (
              <ul key={index} className="mt-3">
                <li>
                  {parseFloat(sentence[0]).toFixed(2)}: {sentence[1]}
                </li>
              </ul>
            ))}

            <h4>Summary</h4>
            <p>{data.latest_call_info.summary}</p>
            <h4>Full Text</h4>
            <div>
              <Button onClick={() => setIsBasic(!isBasic)}>Collapse</Button>
            </div>
            <Collapse in={isBasic}>
              <div id="basic-collapse">
                <Card.Body>
                  <Card.Text>
                    full_text
                    {data.latest_call_info.full_text}
                  </Card.Text>
                </Card.Body>
              </div>
            </Collapse>
          </Card.Body>
        </Card>

        <Card>
          
          <div style={{ height: '600px' }} className="p-5">
          <div className="card-header">
            <h2 className="card-title">Stock Chart</h2>
          </div>
            <TradingViewWidget
              locale="en"
              autosize
              interval="D"
              timezone="Etc/UTC"
              theme={Themes.LIGHT}
              style="3"
              enable_publishing="false"
              range="5D"
              backgroundColor="rgba(242, 242, 242, 1)"
              allow_symbol_change="true"
              calendar="false"
              support_host="https://www.tradingview.com"
              symbol={ticker_symbol}
            />
          </div>
          <div className="p-5">
            <FinancialsCard symbol={ticker_symbol} />
          </div>
        </Card>

        {data.news.map((newsItem, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title as="h3">{newsItem.title}</Card.Title>
              <Image className="py-3 rounded-sm" src={newsItem.image} fluid />
              <Card.Subtitle className="mb-2 text-muted">Published on: {newsItem.publishedDate}</Card.Subtitle>
              <Card.Text>{newsItem.text}</Card.Text>
              <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
              <div className="mt-2">
                <small>Source: {newsItem.site}</small>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Symbol;
