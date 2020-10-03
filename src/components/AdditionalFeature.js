import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/actions';

const mapStateToProps = (props) => {
  console.log(props)
  return {
    nameAsProps: props.additionalFeatures.name,
    priceAsProps: props.additionalFeatures.price,
    carAsProps: props.additionalFeatures.car
  }
}

const AdditionalFeature = props => {
  console.log(props)

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(mapStateToProps, {})(AdditionalFeature);
