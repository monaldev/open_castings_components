import React from 'react';

function kFormatter(num) {
  return num > 999 ? `${(num / 1000).toFixed(1)}k` : num;
}

const SocialFollowersTemplate = ({ socialIcon, count, width = 40 }) => (
  <div
    style={{
      padding: '0',
      minWidth: `${width}px`,
      fontSize: '11px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textTransform: 'uppercase',
      textAlign: 'center',
      margin: `0 ${width * 0.1}px`,
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: `${width * 0.8}px`,
        height: `${width * 0.8}px`,
        padding: '0px',
        textDecoration: 'none',
        textAlign: 'center',
        color: '#fff',
        fontSize: `${width * 0.5}px`,
        fontWeight: 'normal',
        background: '#283445',
        borderRadius: `${width * 0.8}px`,
        margin: 'auto',
      }}
    >
      {socialIcon}
    </div>
    <div
      style={{
        position: 'relative',
        marginTop: '10px',
        color: 'white',
      }}
    >
      <div
        style={{
          background: '#31b5ff',
          position: 'relative',
          padding: '3px',
        }}
      >
        <div
          style={{
            fontSize: `${width * 0.3}px`,
          }}
        >
          {kFormatter(count)}
        </div>
      </div>
      <div
        style={{
          bottom: '100%',
          left: '50%',
          border: 'solid transparent',
          height: 0,
          width: 0,
          position: 'absolute',
          pointerEvents: 'none',
          borderBottomColor: '#31b5ff',
          borderWidth: '10px 5px',
          marginLeft: '-5px',
        }}
      />
    </div>
  </div>
);

SocialFollowersTemplate.propTypes = {
  socialIcon: React.PropTypes.object,
  count: React.PropTypes.number,
  width: React.PropTypes.string,
};

export default SocialFollowersTemplate;
