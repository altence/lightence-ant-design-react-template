import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import styled from 'styled-components';

export const Header = styled.div`
  padding: 1.5rem 3.5rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryBackground};
`;

export const AvatarWrapper = styled.div`
  width: 2rem;
  margin-right: 1.25rem;
`;

export const Text = styled(BaseTypography.Text)`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const ContentWrapper = styled.div`
  padding: 1rem 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: 1px solid rgba(${({ theme }) => theme.rgb.primary}, 0.3);
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

export const Subtitle = styled(BaseTypography.Text)`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.primary};
`;

export const DetailsWrapper = styled.div`
  padding: 0.8rem;
  text-align: center;
`;
