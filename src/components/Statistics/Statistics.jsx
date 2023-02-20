import { StatList } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  feedbackPercentage,
}) => {
  const total = countTotalFeedback(good, neutral, bad);
  return (
    <StatList>
      <ul>
        <li>
          Good <span>{good}</span>
        </li>
        <li>
          Neutral <span>{neutral}</span>
        </li>
        <li>
          Bad <span>{bad}</span>
        </li>
        <li>
          Total <span>{total}</span>
        </li>
        {total > 0 ? (
          <li>
            Positive feedback:{' '}
            <span>{feedbackPercentage(good, total).toFixed()}%</span>
          </li>
        ) : null}
      </ul>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  feedbackPercentage: PropTypes.func.isRequired,
};
