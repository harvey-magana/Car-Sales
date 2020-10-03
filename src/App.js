import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    carAsProps: state.car,
    additionalFeaturesAsProps: state.additionalFeatures,
    additionalPriceAsProps: state.additionalPrice
  }
}

const App = ({ carAsProps, additionalFeaturesAsProps, additionalPriceAsProps }) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={carAsProps} />
        <AddedFeatures car={carAsProps} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeaturesAsProps} />
        <Total car={carAsProps} additionalPrice={additionalPriceAsProps} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, {})(App);
