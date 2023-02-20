import { Component } from 'react';
import { FeedbackOptions } from './Buttons/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static status = 'false';

  updateState = feedback => {
    this.setState(prevState => {
      switch (feedback) {
        case 'good':
          this.status = 'true';
          return { good: prevState.good + 1 };
        case 'neutral':
          this.status = 'true';
          return { neutral: prevState.neutral + 1 };
        case 'bad':
          this.status = 'true';
          return { bad: prevState.bad + 1 };
        default:
          throw new Error(`Unknown value of ${feedback}`);
      }
    });
  };

  countTotalFeedback(good, neutral, bad) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(good, total) {
    return (100 / total) * good;
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            updateState={this.updateState}
          />
        </Section>
        <Section title="Statistics">
          {this.status === 'true' ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback}
              feedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
