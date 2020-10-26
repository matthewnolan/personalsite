import React from 'react';
import { globals } from '../globals';

export const Footer: React.FC = () => (
  <div>

    <footer className="footer">
      <div className="container-fluid">
        <span className="text-muted">
          {`© ${globals.yourName} ${new Date().getFullYear()}`} -  <a href="/rss.xml" target="_blank">RSS</a>
        </span>
      </div>
    </footer>

  </div>
);
