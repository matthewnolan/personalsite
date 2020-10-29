import React from 'react';
import { globals } from '../globals';

export const Footer: React.FC = () => (
  <div>

    <footer className="footer">
      <div className="container-fluid">
        <small className="text-muted">
          {`© ${globals.yourName} ${new Date().getFullYear()}`} -  <a href="/rss.xml" target="_blank">RSS</a>
        </small>
      </div>
    </footer>

  </div>
);
