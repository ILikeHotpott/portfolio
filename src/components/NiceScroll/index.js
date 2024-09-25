import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const SectionWipes2Styled = styled.div`
  overflow: hidden;

  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }

  .panel span {
    position: relative;
    display: block;
    font-size: 80px;
  }
  
  .panel.blue {
    background-color: #3883d8;
  }
  
  .panel.turqoise {
    background-color: #38ced7;
  }
  
`;

const SectionWipes2 = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue">
            <span>
              <img className="" src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/mypic1.jpg"
                   alt="nothing"></img>
            </span>
          </section>
          <Tween
              from={{x: '-100%'}}
              to={{x: '0%'}}
          >
          <section className="panel turqoise">
              <img className="" src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/mypic2.jpg" alt="nothing"></img>
            </section>
          </Tween>

        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default SectionWipes2;