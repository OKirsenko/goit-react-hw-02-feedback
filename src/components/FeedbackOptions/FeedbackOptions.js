import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onGood, onNeutral, onBad }) {
  return (
    <div className="container">
      <button className={s.btn} onClick={onGood}>
        Good
      </button>
      <button className={s.btn} onClick={onNeutral}>
        Neutral
      </button>
      <button className={s.btn} onClick={onBad}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
