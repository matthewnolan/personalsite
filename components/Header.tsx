import React from 'react';
import Link from 'next/link';
import { globals } from '../globals';

export const Header: React.FC = () => (
      <nav className="navbar navbar-expand-sm -navbar-light mb-4">
        <Link href={`/`} className="navbar-brand">
          {globals.siteName}
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="-collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href={`/blog`} className="nav-link">Posts</Link>
            </li>
            <li className="nav-item">
              <Link href={`/about`} className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://x.com/CryptoDiscoFun"><i className="fa fa-twitter fa-1x"></i></a>
            </li>
          </ul>
        </div>

      </nav>
);