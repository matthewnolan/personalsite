import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Code from './Code';
// import { globals } from '../globals';

export const Markdown: React.FC<{ source: string }> = (props) => {
  // console.log(props.source);

  return (
    <div style={{ width: '100%' }} className="devii-markdown">
      <ReactMarkdown
        key="content"
        source={props.source}
        renderers={{
          code: Code,
          link: props => <a href={props.href} target="_blank">{props.children}</a>
        }}
        escapeHtml={false}
      >
      </ReactMarkdown>
    </div>
  );
};
