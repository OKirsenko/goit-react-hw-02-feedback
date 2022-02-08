import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onFeedback }) {
  return (
    <div className="container">
      {/* <button className={s.btn} onClick={onGood}>
        Good
      </button>
      <button className={s.btn} onClick={onNeutral}>
        Neutral
      </button>
      <button className={s.btn} onClick={onBad}>
        Bad
      </button> */}
      {options.map(option => {
        return (
          <button
            className={s.btn}
            key={option}
            name={option}
            onClick={onFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedback: PropTypes.func.isRequired,
};
