import React from 'react';
import PropTypes from 'prop-types';
import FrameView from './FrameView';
import CodeHighLighter from '../components/CodeHighLighter';
import NotesReader from '../components/NotesReader';

const TabViewContent = (props) => {
  let content = null;

  switch (props.id) {
    case 'chart':
      content = (
        <FrameView
          style={{ width: '100%', height: '100%' }}
          url={props.content}
        />
      );
      break;
    case 'js':
      content = (
        <CodeHighLighter
          style={{ width: '100%', height: '100%' }}
          language="javascript"
          code={props.content}
        />
      );
      break;
    case 'html':
      content = (
        <CodeHighLighter
          style={{ width: '100%', height: '100%' }}
          language="html"
          code={props.content}
        />
      );
      break;
    case 'data':
      content = (
        <CodeHighLighter
          style={{ width: '100%', height: '100%' }}
          language="javascript"
          code={props.content}
        />
      );
      break;
    case 'notes':
      content = (
        <NotesReader
          style={{ width: '100%', height: '100%' }}
          data={props.content}
        />
      );
      break;
    default:
      content = null;
  }

  return (
    <div className={`tabview-content ${props.active ? 'active' : 'non-active'}`}>
      <div className="tabview-content-wrapper">
        { content }
      </div>
    </div>
  );
};


TabViewContent.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default TabViewContent;
