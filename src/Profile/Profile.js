import s from './Profile.module.css';
import Card from './Card/Card';
import Statistics from './Statistics/Statistics';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <Card name={name} tag={tag} location={location} avatar={avatar} />
      <Statistics stats={stats} />
    </div>
  );
}

export default Profile;
