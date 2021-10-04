import styled from 'styled-components';

interface PaymentCardProps {
  background: string;
}

export const Wrapper = styled.div<PaymentCardProps>`
  & > .rccs > .rccs__card--unknown > div {
    background: ${(props) => (props.background.includes('http') ? `url(${props.background})` : props.background)};
    background-size: cover;
    transition: all 0.5s ease;
  }

  & > .rccs > .rccs__card {
    & > .rccs__card--front {
      & > .rccs__issuer {
        left: 0;
        right: unset;
      }
    }

    & > div {
      color: ${(props) => props.theme.colors.text.secondary};

      & > .rccs__chip {
        display: none;
      }

      & > div {
        &:first-of-type {
          background: ${(props) => (props.background.includes('http') ? `url(${props.background})` : props.background)};
          background-size: cover;
          transition: all 0.5s ease;
        }
      }
    }
  }
`;
