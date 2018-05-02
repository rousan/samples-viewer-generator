import React from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';

const CodeHighLighter = (props) => {
  const codeHightLighted = Prism.highlight(props.code, Prism.languages[props.language]);
  const style = Object.assign({}, {
    boxSizing: 'border-box',
    margin: 0,
    overflow: 'scroll',
    background: 'rgb(247, 248, 249)',
  }, props.style);
  return (
    <pre style={style} className={`language-${props.language}`}><code dangerouslySetInnerHTML={{ __html: codeHightLighted }} /></pre>
  );
};

CodeHighLighter.propTypes = {
  style: PropTypes.instanceOf(Object).isRequired,
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeHighLighter;
