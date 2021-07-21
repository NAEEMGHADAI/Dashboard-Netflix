import React from 'react'
import "./sidebar.css"
import {LineStyle,Timeline,TrendingUp , PermIdentity, Storefront, AttachMoney, Equalizer, MailOutline,DynamicFeed, ChatBubbleOutline, EventNote,Report} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem active" >
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                       <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Quick Menu</div>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem " >
                            <PermIdentity className="sidebarIcon"/>
                            User
                        </li>
                       <li className="sidebarListItem">
                            <Storefront className="sidebarIcon"/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <Equalizer className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Notifications</div>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem " >
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>
                       <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Staff</div>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem " >
                            <EventNote className="sidebarIcon"/>
                            Manage
                        </li>
                       <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
