const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="fr-card">
      <img src={avatar} alt="Avatar" width="48" />
      <p className="fr-name">{name}</p>
      <p className={isOnline ? 'online' : 'offline'}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;