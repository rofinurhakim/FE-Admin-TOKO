  
import React, { Component, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useForm, LogoutData } from "../../../pages/Pages/service/auth";

const UserDropdown = (props) => {
  
  const history = useHistory()
  const [user, setUser] = useState(null)
  const [menu, setMenu] = useState([
    {
      link: "/feature/profile",
      icode: "far fa-user",
      title: "Profile",
    },

    {
      link: "/feature/activities",
      icode: "fas fa-bolt",
      title: "Activities",
    },
    {
      link: "/feature/Settings",
      icode: "fas fa-cog",
      title: "Settings",
    },
  ])

  useEffect(() => {
    // Update the document title using the browser API
      const dataUser = JSON.parse(localStorage.getItem('user'))
      console.log(dataUser)
      setUser(dataUser)
  }, []);

  const onLogout = () => {
    LogoutData(routeLogout)
    routeLogout()
  } 

  const routeLogout = () => {
    history.push('/auth/login')
    history.go()
  }

    return (
      
      <li className="dropdown">
        <a
          href="#"
          data-toggle="dropdown"
          className="nav-link dropdown-toggle nav-link-lg nav-link-user"
        >
          {/* <img
            alt="image"
            src={userDetail.userImg}
            className="rounded-circle mr-1"
          /> */}
          <div className="d-sm-none d-lg-inline-block">
            Hi, {user ? user.nama_lengkap : ""}
          </div>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-title">
            {/* Logged in {userDetail.logTime} ago */}
          </div>

          {menu.map((data, idata) => {
            return (
              <NavLink
                key={idata}
                to={data.link}
                activeStyle={{
                  color: "#6777ef",
                }}
                exact
                className="dropdown-item has-icon"
              >
                <i className={data.icode} /> {data.title}
              </NavLink>
            );
          })}

          <div className="dropdown-divider" />
          <a
            href="#"
            className="dropdown-item has-icon text-danger"
            onClick={() => onLogout()}
          >
            <i className="fas fa-sign-out-alt" /> Logout
          </a>
        </div>
      </li>
    );
  }


export default UserDropdown;