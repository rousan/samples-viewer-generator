import React from 'react';

const PopupHelp = () => {
  const keyboardShortcuts = [
    {
      key: '↓',
      desc: 'Navigate to next sample',
    },
    {
      key: '↑',
      desc: 'Navigate to prev sample',
    },
    {
      key: '→',
      desc: 'Navigate to next tab',
    },
    {
      key: '←',
      desc: 'Navigate to prev tab',
    },
    {
      key: 'x',
      desc: 'Open or close the sidebar',
    },
    {
      key: 'r',
      desc: 'Refresh the chart',
    },
    {
      key: '?',
      desc: 'Bring up this help dialog',
    },
  ];

  return (
    <div className="popup-help">
      <table>
        <tbody>
          {
            keyboardShortcuts.map(ks => (
              <tr>
                <td className="key">
                  <kbd> {ks.key}</kbd>
                </td>
                <td className="key-desc"> {ks.desc} </td>
              </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default PopupHelp;
