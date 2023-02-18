import styled from 'styled-components';
import { media } from '@app/styles/themes/constants';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';

interface FullnessLineProps {
  width: number;
}

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  width: 6.9375rem;
  margin: 0 auto 1.25rem auto;
  display: flex;
  justify-content: center;
  border-radius: 50%;

  background: conic-gradient(
    from -35.18deg at 50% 50%,
    #006ccf -154.36deg,
    #ff5252 24.13deg,
    #ffb155 118.76deg,
    #006ccf 205.64deg,
    #ff5252 384.13deg
  );

  @media only screen and ${media.xl} {
    width: 11.125rem;
    margin: 0 auto 2rem auto;
  }

  & > span {
    margin: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);

    @media only screen and ${media.xl} {
      margin: 7px;
    }
  }
`;

export const Title = styled(BaseTypography.Text)`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media only screen and ${media.xl} {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled(BaseTypography.Text)`
  margin-bottom: 2rem;

  @media only screen and ${media.xl} {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
`;

export const FullnessWrapper = styled.div`
  border-radius: 50px;
  height: 1.875rem;
  margin-bottom: 0.625rem;

  background-color: rgba(var(--warning-rgb-color), 0.5);

  @media only screen and ${media.xl} {
    height: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const FullnessLine = styled.div<FullnessLineProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-right: 0.625rem;
  border-radius: 50px;

  width: ${(props) => props.width}%;

  background: linear-gradient(90deg, var(--warning-color) 0%, var(--error-color) 100%);

  color: var(--text-secondary-color);

  @media only screen and ${media.xl} {
    font-size: 1rem;
    font-weight: 600;
    padding-right: 0.875rem;
  }
`;

export const Text = styled(BaseTypography.Text)`
  font-size: 0.75rem;
  text-align: left;

  color: var(--text-main-color);

  @media only screen and ${media.md} {
    text-align: center;
  }

  @media only screen and ${media.xl} {
    font-size: 0.875rem;
    text-align: left;
  }
`;
