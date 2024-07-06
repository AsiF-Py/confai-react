import React, { useEffect, useRef } from 'react';

const FinancialsCard = ({ symbol }) => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    if (!widgetContainerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      isTransparent: false,
      largeChartUrl: '',
      displayMode: 'regular',
      width: '100%',
      height: '100%',
      colorTheme: 'light',
      symbol: symbol,
      locale: 'en'
    });

    widgetContainerRef.current.appendChild(script);

    return () => {
      widgetContainerRef.current.innerHTML = ''; // Clear the container on unmount
    };
  }, [symbol]);

  return (
    <div className="card mb-4" style={{ height: '1000px' }}>
      <div className="card-header">
        <h2 className="card-title">Financials</h2>
      </div>
      <div className="card-body">
        <div className="tradingview-widget-container" ref={widgetContainerRef}>
          <div id="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/?utm_source=localhost&utm_medium=widget_new&utm_campaign=chart&utm_term=STZ"
              rel="noopener nofollow"
              target="_blank"
            >
              <span className="blue-text">Track all markets on TradingView</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialsCard;
