import React from 'react';

const AddedFeature = props => {

  handleClick = (e) => {
    e.preventDefault();
    console.log("I was clicked");
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
