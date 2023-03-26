// import { render } from '@testing-library/react';
import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from 'components/Section';
import Statistics from 'components/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const {
      state: { good, neutral, bad },
    } = this;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const {
      state: { neutral, bad },
    } = this;

    const total = this.countTotalFeedback();
    return Math.round(((total - neutral / 2 - bad) / total) * 100);
  };

  render() {
    const {
      state: { good, neutral, bad },
    } = this;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          handleClick={this.onLeaveFeedback}
        />
        {good || neutral || bad ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback :(" />
        )}
      </Section>
    );
  }
}
