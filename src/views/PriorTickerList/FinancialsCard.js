import React, { useEffect, useRef } from 'react';

const FinancialsCard = ({ symbol }) => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    // Ensure the ref is available before proceeding
    if (!widgetContainerRef.current) return;

    // Create a script element for embedding TradingView widget
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      colorTheme: 'light',
      isTransparent: false,
      largeChartUrl: '',
      displayMode: 'regular',
      width: '100%',
      height: '100%',
      locale: 'en'
    });

    // Append the script to the widget container
    widgetContainerRef.current.appendChild(script);

    // Cleanup function to remove script and clear container on unmount
    return () => {
      widgetContainerRef.current.innerHTML = ''; // Remove any remaining content
      script.remove(); // Remove the script element
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
              rel="noreferrer"
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
