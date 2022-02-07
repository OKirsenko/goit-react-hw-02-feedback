import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  clickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  clickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <Feedback
          onGood={this.clickGood}
          onNeutral={this.clickNeutral}
          onBad={this.clickBad}
        />
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    );
  }
}
