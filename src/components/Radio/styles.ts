import styled from 'styled-components';

import { Props } from './index';

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 34px;
  height: 22px;

  margin-bottom: 10px;

  cursor: pointer;
  user-select: none;

  color: #fff;
  font-size: 16px;

  &:hover span,
  input:checked ~ span {
    background-color: ${(props: Props) => props.color};
  }
`;

export const Radio = styled.input.attrs({
  type: 'radio',
})`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

export const Mark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;

  transition: 180ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: none;

    left: 6.8px;
    top: 3px;

    width: 4px;
    height: 8px;

    border: solid white;
    border-width: 0 3px 3px 0;

    transform: rotate(45deg);
  }
`;
