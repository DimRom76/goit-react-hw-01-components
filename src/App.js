import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <hr />
      <Statistics title="Upload stats" stats={statisticalData} />
      <hr />
      <Statistics stats={statisticalData} />
      <hr />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
