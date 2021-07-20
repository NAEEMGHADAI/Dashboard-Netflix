import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language,Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Dashboard Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language />
                        <span className="topIconBadge">5</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings />   
                    </div>
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
