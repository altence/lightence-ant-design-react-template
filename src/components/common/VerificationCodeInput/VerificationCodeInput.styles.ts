import styled from 'styled-components';
import VerificationInput from 'react-verification-input';
import theme from 'styles/theme';

export const CodeInput = styled(VerificationInput)`
  display: flex;
  gap: 0.625rem;

  .character {
    line-height: 5rem;
    font-size: ${(props) => props.theme.commonFontSizes.xxl};
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
    color: ${(props) => props.theme.colors.text.main};
    border: ${(props) => `3px solid${props.theme.commonColors.lightgrey}`};
    border-radius: 0.625rem;
    width: 3.4375rem;
    height: 5rem;
  }

  .character--inactive {
    border: ${(props) => `3px solid${props.theme.commonColors.lightgrey}`};
  }

  .character--selected {
    border: ${(props) => `3px solid${props.theme.colors.main.primary}`};
  }

  @media only screen and ${theme.media.xs} {
    gap: 0.4375rem;
    .character {
      width: 2.5625rem;
      height: 3.75rem;
    }
  }

  @media only screen and ${theme.media.md} {
    gap: 0.625rem;
    .character {
      width: 3.4375rem;
      height: 5rem;
    }
  }

  @media only screen and ${theme.media.xl} {
    gap: 0.625rem;
    .character {
      width: 3.4375rem;
      height: 5rem;
    }
  }
`;
