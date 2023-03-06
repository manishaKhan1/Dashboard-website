import React from 'react'
import './sidebar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';

import download from '../Image/download.png'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
       
        <div className='top'>
            <span className='logo'><img src={download}/></span>  
        </div>

        <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <HomeOutlinedIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">UI KIT</p>
          {/* <Link to="/users" style={{ textDecoration: "none" }}> */}
            <li>
              <AppShortcutOutlinedIcon className="icon" />
              <span>App</span>
            </li>
          {/* </Link> */}
          {/* <Link to="/products" style={{ textDecoration: "none" }}> */}
            <li>
              < FilterNoneOutlinedIcon  className="icon" />
              <span>Bootstrap</span>
            </li>
          {/* </Link> */}
          <li>
            <ElectricBoltOutlinedIcon className="icon" />
            <span>Landing Page</span>
          </li>
          
          <p className="title">PRE-BUILD-PAGES</p>
          <li>
            <LayersOutlinedIcon className="icon" />
            <span>Pages</span>
          </li>
          <li>
            <LocalMallOutlinedIcon className="icon" />
            <span>E-Commerce</span>
          </li>
          <li>
            <FolderOutlinedIcon className="icon" />
            <span>File Manager</span>
          </li>
          <p className="title">MISC PAGES</p>
          <li>
            <PeopleAltOutlinedIcon className="icon" />
            <span>Authentication</span>
          </li>
          
          <p className="title">GENERAL</p>
          <li>
            <PlaceOutlinedIcon className="icon" />
            <span>Maps</span>
          </li>
          <li>
            <BarChartOutlinedIcon className="icon" />
            <span>Charts</span>
          </li>
          <li>
            <AirOutlinedIcon className="icon" />
            <span>Icon</span>
          </li>
          
        </ul>
    </div>
    {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  )
}
