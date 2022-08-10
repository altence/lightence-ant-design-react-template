import styled from 'styled-components';
import { Button } from 'antd';
import { media } from '@app/styles/themes/light/lightTheme';

export const Description = styled.div`
  margin-bottom: 1.875rem;
  color: var(--text-main-color);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);

  @media only screen and ${media.xs} {
    font-size: var(--font-size-xxs);
  }

  @media only screen and ${media.md} {
    font-size: var(--font-size-xs);
  }
`;

export const SubmitButton = styled(Button)`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  width: 100%;
  margin-top: 1.125rem;
  margin-bottom: 1rem;
`;
