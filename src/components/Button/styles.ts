import styled from 'styled-components';
import { lighten, darken, readableColor } from 'polished';

import { Props } from './index';

export const Container = styled.button<Props>`
  background-color: ${(props) =>
    props.outlined ? 'transparent' : props.backgroundColor};
  color: ${({ color }: Props) =>
    readableColor(color as string, '#fff', '#19181f')};

  padding: 18px 45px;
  text-transform: uppercase;
  font-weight: bold;

  border-radius: 4px;
  border: ${(props) =>
    props.outlined ? `2px solid ${props.backgroundColor}` : 'none'};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    background-color: ${(props) =>
      props.outlined
        ? props.backgroundColor
        : lighten(0.03, props.backgroundColor as string)};
  }

  :active:not(:disabled) {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    background-color: ${(props) =>
      darken(0.03, props.backgroundColor as string)};
  }
`;
