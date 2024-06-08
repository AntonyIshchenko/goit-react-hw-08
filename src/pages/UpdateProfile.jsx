import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from '../redux/auth/operations';

export default function UpdateProfile() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateAvatar(file));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button>Upload</button>
      </form>
    </div>
  );
}
