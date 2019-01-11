import React from 'react';
import styled from '@emotion/styled';

import Checkmark from './Checkmark';
import styles from 'style_variables';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: none;
  flex-grow: 1;
`;

const DotWrapper = styled.div`
  width: 26px;
  height: 26px;
  border-color: ${props => props.state !== 'untouched' ? styles.primary_color[6] : styles.neutral_color[5]};
  background: ${props => props.state !== 'untouched' ? styles.primary_color[2] : styles.neutral_color[2]};
  border-width: 2px;
  border-style: solid;
  box-shadow: ${styles.box_shadow[2]}, ${styles.box_shadow[3]};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 50%;
`;

const ConnectionLine = styled.div`
  border-style: solid;
  border-width: 4px;
  border-color: ${styles.neutral_color[2]};
  flex-grow: 1;
  margin: 0 5px 0 5px;
`;

const Dot = ({ state }) =>
  <DotWrapper state={state} >
    {state === 'completed'
      && <Checkmark width={12} height={9} />
    }
  </DotWrapper>
;

const computeDotState = (
  index,
  active
) => {
  const sum = active - index;
  switch(true) {
    case (sum > 0):
      return 'completed';
    case (sum < 0):
      return 'untouched';
    default:
      return 'current';
  }
}

export default ({
  activeStep,
  totalSteps
}) =>
  <FlexWrapper>
    {
      [...Array(totalSteps)].map((empty, index) => {
        const stepIndex = index + 1;
        const isLast = stepIndex < totalSteps;
          return (
            <FlexWrapper >
              <Dot state={computeDotState(stepIndex, activeStep)}/>
              { isLast && <ConnectionLine /> }
            </FlexWrapper>
          )
      }
      )
    }
  </FlexWrapper>
  ;