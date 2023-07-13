import styled from 'styled-components';
import { FontFamilyType } from '../../types';

export const Wrapper = styled.div<{ $disabled: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  opacity: ${(props) => (props.$disabled ? '0.5' : '1')};
`;

export const Label = styled.label<{ fontFamily: FontFamilyType; fontSize: string }>`
  font-family: ${(props) => props.fontFamily};
  font-size: 12px;
  margin-right: 8px;
`;

export const Switch = styled.label<{
  $isToggled: boolean;
  $toggleGuidePrimaryColor: string;
  $toggleGuideNeutralColor: string;
}>`
  position: relative;
  display: inline-block;
  height: 14px;
  background: ${(props) => (props.$isToggled ? props.$toggleGuidePrimaryColor : props.$toggleGuideNeutralColor)};
  border-radius: 100px;
  width: 42.272px;
`;

export const SliderRound = styled.span<{
  $isToggled: boolean;
  $togglePrimaryColor: string;
  $toggleNeutralColor: string;
}>`
  flex-shrink: 0;
  fill: var(--system-colors-scl-white, #fff);
  filter: drop-shadow(0px 1.0458389520645142px 2.0916779041290283px rgba(0, 0, 0, 0.2))
    drop-shadow(0px 0.10458389669656754px 0.3137516975402832px rgba(0, 0, 0, 0.1));
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  top: -6px;
  left: ${(props) => (props.$isToggled ? '19px' : '-2px')};
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  content: '';
  height: 26px;
  width: 26px;
  background-color: ${(props) => (props.$isToggled ? props.$togglePrimaryColor : props.$toggleNeutralColor)};
  -webkit-transition: 0.4s;
  transition: 0.4s;
`;
