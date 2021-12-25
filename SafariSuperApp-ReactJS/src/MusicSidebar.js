import React from 'react'
import SidebarRow from './SidebarRow'
import './MusicSidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

function MusicSidebar({userName}) {
    return (
        <div className="music__sidebar">
        <SidebarRow selected Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={SearchIcon} title="Search"/>
        <SidebarRow Icon={LibraryMusicIcon} title="Your Library"/>
        <br />
        <br />
        <SidebarRow Icon={PlaylistPlayIcon} title="Create Playlist"/>
        <SidebarRow Icon={FavoriteIcon} title="Liked Songs"/>
        <hr />
        <SidebarRow Icon={PersonIcon} title="My Collection"/>
    </div>
    )
}

export default MusicSidebar
