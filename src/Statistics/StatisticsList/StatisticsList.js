import PropTypes from 'prop-types';
import s from './StatisticsList.module.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
  var red = getRandomInt(255);
  var green = getRandomInt(255);
  var blue = getRandomInt(255);

  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function StatisticsList({ stats }) {
  return (
    <ul className={s.stat_list}>
      {stats.map(el => {
        return (
          <li
            key={el.id}
            className={s.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default StatisticsList;
