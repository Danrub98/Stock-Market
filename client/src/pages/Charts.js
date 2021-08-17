// We have to import react
import React from "react";



// Import tradingview chart wisget
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Charts = () => {
  return (
    <main>
      <section className="widgets-chart">
        <div className="test">
            <h1 className="text-center">Live Charts</h1>
          <TradingViewWidget
            symbol="NASDAQ:AAPL"
            theme={Themes.DARK}
            locale="fr"
            autosize
          />
        </div>

        <div className="test">
          <TradingViewWidget
            symbol="NASDAQ:PYPL"
            theme={Themes.DARK}
            locale="fr"
            autosize
          />
        </div>

        <div className="test">
          <TradingViewWidget
            symbol="NASDAQ:FB"
            theme={Themes.DARK}
            locale="fr"
            autosize
          />
        </div>

        <div className="test">
          <TradingViewWidget
            symbol="NYSE:TWTR"
            theme={Themes.DARK}
            locale="fr"
            autosize
          />
        </div>

        <div className="test">
          <TradingViewWidget
            symbol="NASDAQ:AMZN"
            theme={Themes.DARK}
            locale="fr"
            autosize
          />
        </div>

        <div className="test">
          <TradingViewWidget
            symbol="NASDAQ:FB"
            theme={Themes.DARK}
            locale="fr"
            autosize
          />
        </div>
      </section>
    </main>
  );
};

// Export the footer
export default Charts;
