import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import _ from 'lodash'
import './Button.css';


const ButtonLayout = () => {
  const [gridLayout, setGridLayout] = useState(false);
  const [cssStyle, setcssStyle] = useState([1, 2, 3])
  const [cssStyle2, setcssStyle2] = useState([1, 2, 3])

  const handleLeftPosition = () => {
    const arr = (_.reverse(cssStyle2))
    setcssStyle2([...arr])

  }


  const handleRandomPosition = () => {
    const arr = (_.shuffle(cssStyle))
    setcssStyle([...arr])
  };

  const handleGridPosition = () => {
    setGridLayout(!gridLayout)
  }





  return (
    <>
      {gridLayout ? <><div>
        <Button onClick={handleRandomPosition}> Random Position</Button>
      </div>
        <Row gutter={[16, 16]} justify="space-around" align="middle">
          {cssStyle && cssStyle.map((div, index) => (<Col key={index}>
            <div className={`c--${div}`}>{div}</div>
          </Col>))}
        </Row>
        <div>
          <Button onClick={handleLeftPosition} > Move </Button>
        </div>
        <Row gutter={[16, 16]} justify="space-around" align="middle">
          {cssStyle2 && cssStyle2.map((div, index) => (<Col key={index}>
            <div className={`c--${div}`}>{div}</div>
          </Col>))}
        </Row></> : <>

        <div>
          <Button onClick={handleLeftPosition} > Move </Button>
        </div>
        <Row gutter={[16, 16]} justify="space-around" align="middle">
          {cssStyle2 && cssStyle2.map((div, index) => (<Col key={index}>
            <div className={`c--${div}`}>{div}</div>
          </Col>))}
        </Row>
        <div>
          <Button onClick={handleRandomPosition}> Random Position</Button>
        </div>
        <Row gutter={[16, 16]} justify="space-around" align="middle">
          {cssStyle && cssStyle.map((div, index) => (<Col key={index}>
            <div className={`c--${div}`}>{div}</div>
          </Col>))}
        </Row></>}

      <div>
        <Button onClick={handleGridPosition} > Grid Layout </Button>
      </div>
    </ >

  );
};

export default ButtonLayout;
