import React from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';
import highlight from 'highlight.js';

const NotesReader = (props) => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight(code) {
      return highlight.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });

  const html = marked(props.data);

  return (
    <div className="notes-reader markdown-body" style={props.style} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

NotesReader.propTypes = {
  style: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.string.isRequired,
};

export default NotesReader;
