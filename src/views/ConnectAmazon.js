import React from 'react';
import styled from '@emotion/styled';

import { 
  Button,
  Heading,
  DotProgress,
  ButtonTertiary,
} from 'components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
  
const Shell = styled.div`
  height: 100vh; 
  padding-top: 63px;
  display: flex;
  flex-direction: column;
`;

const DotProgressWrapper = styled.div`
  width: 500px;
  margin-bottom: 60px;
`;

//specify a different growth for each element
const HeadingButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const HeadingStyled = styled(Heading)`
  margin-bottom: 24px;
`;

const BackButton = styled(ButtonTertiary)`
  display: flex;
  justify-self: flex-end;
`;

export default () =>
  <Wrapper>
    <Shell>
      <DotProgressWrapper>
        <DotProgress
          totalSteps={3}
          activeStep={1}
        />
      </DotProgressWrapper>
      <HeadingButtonWrapper>
        <HeadingStyled>Connect Your Seller Account</HeadingStyled>
        <Button>Connect</Button>
      </HeadingButtonWrapper>
      <BackButton>back</BackButton>
    </Shell>
  </Wrapper>