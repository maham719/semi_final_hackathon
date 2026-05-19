import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from ".axios"
import { useAuth } from '../context/AuthContext.jsx'
const Header = () => {
     const {auth,setAuth} =useAuth()
    const navigate=useNavigate()
    const handleLogut=async()=>{
        try {
            await axios.post("https://semi-final-hackathon-backend-qsyq.vercel.app/api/auth/logout",{} , {withCredentials:true})
            setAuth(null)
            navigate("/login")
        } catch (error) {
            console.log("logout failed") ,error
        }
    }
  return (
     <div className="bg-base-100 border-base-content/20 sticky top-0 z-50 flex border-b lg:ps-75">
    <div className="mx-auto w-full max-w-7xl">
      <nav className="navbar py-2">
        <div className="navbar-start gap-2">
          <button
            type="button"
            className="btn btn-soft btn-square btn-sm lg:hidden"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="layout-toggle"
            data-overlay="#layout-toggle"
          >
            <span className="icon-[tabler--menu-2] size-4.5" />
          </button>
          {/* Search  */}
          <button
            type="button"
            className="max-sm:btn max-sm:btn-text max-sm:btn-sm max-sm:btn-square flex items-center gap-2 text-sm"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="search-modal"
            data-overlay="#search-modal"
          >
            <span className="icon-[tabler--search] text-base-content size-4.5" />
            <span className="text-base-content/50 max-sm:hidden">
              Type to Search...
            </span>
          </button>
        </div>
        <div className="navbar-end gap-6">
          <div className="flex items-center">
            {/* Theme Dropdown */}
            <div className="dropdown relative inline-flex [--offset:24]">
              <button
                id="dropdown-theme"
                type="button"
                className="dropdown-toggle btn btn-sm btn-square btn-text"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <span
                  id="icon-system"
                  className="icon-[tabler--sun-moon] size-4.5"
                />
              </button>
              <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden w-full max-w-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-theme"
              >
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-text w-full justify-start"
                    aria-label="Light"
                    defaultValue="light"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-text w-full justify-start"
                    aria-label="Dark"
                    defaultValue="dark"
                  />
                </li>
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-text w-full justify-start"
                    aria-label="System"
                    defaultValue="default"
                  />
                </li>
              </ul>
            </div>
         
            {/* Activity Dropdown */}
           
            {/* Notification Dropdown */}
            
          </div>
          {/* Profile Dropdown */}
          <div className="dropdown relative inline-flex [--offset:21]">
            <button
              id="profile-dropdown"
              type="button"
              className="dropdown-toggle avatar"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <span className="rounded-field size-9.5">
                <img
                  src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png"
                  alt="User Avatar"
                />
              </span>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden w-full max-w-75 space-y-0.5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="profile-dropdown"
            >
              <li className="dropdown-header mb-1 gap-4 px-5 pt-4.5 pb-3.5">
                <div className="avatar avatar-online-top">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="text-base-content mb-0.5 font-semibold">
                    Mitchell Johnson
                  </h6>
                  <p className="text-base-content/80 font-medium">Influencer</p>
                </div>
              </li>
              <li>
                <a className="dropdown-item px-3" href="#">
                  <span className="icon-[tabler--user] size-5" />
                  My account
                </a>
              </li>
           
             
              <li className="dropdown-footer p-2 pt-1">
                <a onClick={handleLogut} 
                  className="btn btn-text btn-error btn-block h-11 justify-start px-3 font-normal"
                  href="#"
                >
                  <span className="icon-[tabler--logout] size-5" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  )
}

export default Header
