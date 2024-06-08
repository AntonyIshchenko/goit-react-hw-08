import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { Link } from 'react-router-dom';

export default function Profile() {
  const user = useSelector(selectUser);

  const avatarUrl = user.avatar.startsWith('http')
    ? user.avatar
    : 'http://localhost:8000' + user.avatar;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <img src={avatarUrl} alt="user avatar" width="200" height="200" />
      <Link to="update">Update profile</Link>
    </div>
  );
}
