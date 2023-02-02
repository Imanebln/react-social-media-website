import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Topbar() {
  const {user} = useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration: 'none'}}>
            <span className='logo'>Ignitesocial</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className='searchIcon' />
            <input placeholder='Search for friend, post or video' className="searchInput" />
          </div>
        </div>
        {/* right bar for notifs, msgs..  */}
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Tiemline</span>
          </div>
          {/* icons  */}
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatIcon />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBadge">3</span>
            </div>
          </div>
          <Link to={`/profile/${user.username}`} style={{textDecoration: 'none'}}>
            <img 
            src={user.profilePicture 
            ? publicFolder+user.profilePicture
            : publicFolder+"person/noAvatar.png" } 
            alt="" className="topbarImg" />
          </Link>
        </div>
    </div>
  )
}

export default Topbar