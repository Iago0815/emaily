//SurveyNew shows SurveyForm and SurveyFormReviewed

import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  constructor(props) {
    super(props);

    this.state = { showFormReview: false };
  }

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview />;
    }

    return (
      <SurveyForm onSurveySubmit={this.setState({ showFormReview: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
