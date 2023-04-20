import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from 'components/Section';
import Statistics from 'components/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = {
    good,
    neutral,
    bad,
  };

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return 0;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round(((total - neutral / 2 - bad) / total) * 100);
  };

  return (
    <>
      <h1>qwqweqwe</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          handleClick={onLeaveFeedback}
        />
      </Section>

      <Section>
        {good || neutral || bad ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback :(" />
        )}
      </Section>
    </>
  );
};
