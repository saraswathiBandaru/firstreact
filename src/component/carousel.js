import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '',
};
const Slider = () => (
  <Carousel autoplay>
    <div style={{height:"30rem",all:'unset'}}>
      <h3 style={contentStyle}><img src="	https://reactstorefronts.com/static/img/slider/shop-default/2.jpg" style={{width:'100%',heigth:"30rem"}} alt=""/></h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Slider;