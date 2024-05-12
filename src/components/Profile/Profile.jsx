import './Profile.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <img
          className="avatar-image"
          src={image}
          alt="User avatar"
          width="100"
        />
        <p className='av-name'>{name}</p>
        <p className='av'>@{tag}</p>
        <p className='av'>{location}</p>
      </div>

      <ul className="stats-list">
        <li className="stats-stats">
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className="stats-stats">
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className="stats-stats">
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;