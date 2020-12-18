import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ stats }) {
  let statRender = [];
  for (let key in stats) {
    statRender.push(
      <li key={key}>
        <span className={s.label}>{key[0].toUpperCase(0) + key.slice(1)}</span>
        <span className={s.quantity}>{stats[key]}</span>
      </li>,
    );
  }

  return <ul className={s.stats}>{statRender}</ul>;
}
export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};
