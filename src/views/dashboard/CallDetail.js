import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const CallDetail = () => {
  const [callData, setCallData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { ticker_symbol, year, quarter } = useParams(); // Access route params
  useEffect(() => {
    axios
      .get(`https://confai-web-app.azurewebsites.net/api/call_detail/${ticker_symbol}/${year}/${quarter}/?format=json`)
      .then((response) => {
        console.log(response);
        setCallData(response.data); // Response should be response.data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [ticker_symbol, year, quarter]);

  console.log(callData); // Check if callData is null

  if (loading || !callData) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    ); // Render a loading message while fetching data
  }
  console.log(callData);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Call Details</Card.Title>
            </Card.Header>

            <Card.Body>
              <h2>{`${callData.year} - Quarter ${callData.quarter}`}</h2>
              <p>Date: {callData.date}</p>
              <h3>Summary:</h3>
              <p>{callData.summary}</p>
              {/* Display all data */}
              <div>
                <h6>Overall Sentiment:</h6> {callData.overall_sentiment}
              </div>
              <div>
                <h6>Weighted Average Sentiment:</h6> {callData.weighted_average_sentiment.toFixed(2)}
              </div>
              <div>
                <h6>Percentile:</h6> {callData.percentile.toFixed(2)}%
              </div>
              <div>
                <h6>Sentiment Category:</h6> {callData.sentiment_category}
              </div>
              {/* Display extreme sentences */}
              <h3>Extreme Sentences:</h3>
              <div>
                <h5>Negative:</h5>
                {callData.extreme_sentences.negative.map((sentence, index) => (
                  <p key={index}>
                    {parseFloat(sentence[0]).toFixed(2)} - {sentence[1]}
                  </p>
                ))}
                <h5>Positive:</h5>
                {callData.extreme_sentences.positive.map((sentence, index) => (
                  <p key={index}>
                    {parseFloat(sentence[0]).toFixed(2)} - {sentence[1]}
                  </p>
                ))}
              </div>
              {/* Display average scores */}
              <div>
                <h3>Average Scores:</h3>
              </div>
              <ul>
                {callData.average_scores.map((score, index) => (
                  <li key={index}>{parseFloat(score).toFixed(2)}</li>
                ))}
              </ul>
              {/* Display full text */}
              <div>
                <h3>Full Text:</h3>
              </div>
              <p>{callData.full_text}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CallDetail;
