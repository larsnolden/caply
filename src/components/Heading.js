import React from 'react';
import styled from  '@emotion/styled';

import styles from 'style_variables';

const HeadingWrapper = styled.div`
  color: ${styles.primary_color[8]};
  font-size: ${styles.font_size[5]}px;
  font-weight: 900;
  font-family: ${styles.headline_font};
  letter-spacing: 0.05em;
`;

export default ({ children }) =>
  <HeadingWrapper>
    { children }
  </HeadingWrapper>
