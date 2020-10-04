import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/actions';

const mapStateToProps = (props) => {
  console.log(props)
  return {
    nameAsProps: props.additionalFeatures.name
  }
}

const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(mapStateToProps, {removeFeature})(AddedFeature);