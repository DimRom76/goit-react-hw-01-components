import PropTypes from 'prop-types';
import s from './Card.module.css';

function Card({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.description}>
      <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Card;
