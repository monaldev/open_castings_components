import React from 'react';
import ReactSlider from 'react-slider';
import sliderStyles from './oc_dual_slider.scss';

const OCDualSlider = ({
  ...props,
}) => (
  <ReactSlider
    {...props}
    withBars
    barClassName={sliderStyles.bar}
  >
    <div
      style={{
        width: '15px',
        height: '15px',
        margin: '-50%',
        backgroundColor: 'black',
      }}
    />
    <div
      style={{
        width: '15px',
        height: '15px',
        margin: '-50%',
        backgroundColor: 'black',
      }}
    />
  </ReactSlider>
);

export default OCDualSlider;
