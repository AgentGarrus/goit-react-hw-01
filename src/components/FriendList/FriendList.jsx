import FriendListItem from './FriendListItem.jsx';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className='friendlist'>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;