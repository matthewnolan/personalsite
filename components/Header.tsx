import React from 'react';
import { globals } from '../globals';
import Link from 'next/link';

// import '../../global.css';


export const Header: React.FC = () => (

      <nav className="navbar navbar-expand-sm navbar-light bg-light">

        <Link href={`/`}><a className="navbar-brand">{globals.siteName}</a></Link>

        {/*
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        */}

        <div className="-collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link href={`/about`}><a className="nav-link">About</a></Link>
            </li>

            <li className="nav-item">
              <Link href={`/contact`}><a className="nav-link">Contact</a></Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://twitter.com/ImMatthewNolan">Twitter</a>
            </li>


          </ul>
        </div>

      </nav>

);
