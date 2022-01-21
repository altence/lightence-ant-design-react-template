import styled from 'styled-components';

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;

  & > div {
    margin-bottom: 1.25rem;

    @media only screen and ${(props) => props.theme.media.xl} {
      margin-bottom: 1.5rem;
    }

    @media only screen and ${(props) => props.theme.media.xxl} {
      margin-bottom: 2.5rem;
    }
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 4.2rem;
`;
