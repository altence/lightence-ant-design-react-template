import styled from 'styled-components';
import VerificationInput from 'react-verification-input';
import { FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';

export const CodeInput = styled(VerificationInput)`
  display: flex;
  gap: 0.625rem;

  .character {
    line-height: 5rem;
    font-size: ${FONT_SIZE.xxl};
    font-weight: ${FONT_WEIGHT.bold};
    color: var(--text-main-color);
    border: 3px solid var(--lightgrey);
    border-radius: 0.625rem;
    width: 3.4375rem;
    height: 5rem;
  }

  .character--inactive {
    border: 3px solid var(--lightgrey);
  }

  .character--selected {
    border: 3px solid var(--primary-color);
  }

  @media only screen and ${media.xs} {
    gap: 0.4375rem;
    .character {
      width: 2.5625rem;
      height: 3.75rem;
    }
  }

  @media only screen and ${media.md} {
    gap: 0.625rem;
    .character {
      width: 3.4375rem;
      height: 5rem;
    }
  }

  @media only screen and ${media.xl} {
    gap: 0.625rem;
    .character {
      width: 3.4375rem;
      height: 5rem;
    }
  }
`;
