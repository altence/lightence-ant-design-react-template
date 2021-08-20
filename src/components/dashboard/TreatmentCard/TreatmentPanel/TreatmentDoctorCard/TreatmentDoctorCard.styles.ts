import styled from 'styled-components';
import { Rate, Typography, Avatar as AntAvatar, Button as AntButton, Modal as AntModal } from 'antd';
import theme from '../../../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: calc(60% - 0.25rem);
  flex-shrink: 0;
  padding: 0.375rem;

  @media only screen and ${theme.media.xxl} {
    padding: 0.5rem;
  }
`;

export const Title = styled(Typography.Text)`
  font-size: 0.625rem;
  display: block;

  color: ${(props) => props.theme.colors.primary};

  @media only screen and ${theme.media.xxl} {
    font-size: 0.75rem;
  }
`;

export const Text = styled(Typography.Text)`
  font-weight: 500;
  font-size: 0.625rem;

  @media only screen and ${theme.media.xxl} {
    font-size: 0.875rem;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Avatar = styled(AntAvatar)`
  width: 100%;
  max-width: 3rem;
  height: 100%;
  margin-right: 0.875rem;

  @media only screen and ${theme.media.xxl} {
    max-width: 4rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;

  & ${Text} {
    margin-left: 0.875rem;
  }
`;

export const Rating = styled(Rate)`
  @media only screen and ${theme.media.xxl} {
    font-size: 1rem;
  }
`;

export const DiagnosisWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & ${Title} {
    margin-bottom: 0.375rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 120%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 1px;
      width: 100%;

      background-color: ${(props) => props.theme.colors.basicLight};
    }
  }
`;

export const VisitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Button = styled(AntButton)`
  font-size: 0.75rem;

  @media only screen and ${theme.media.xxl} {
    font-size: 1rem;
  }
`;

export const WarningText = styled(Typography.Text)`
  font-size: 1rem;
`;

export const Modal = styled(AntModal)`
  & .ant-modal-close {
    display: none;
  }
`;
