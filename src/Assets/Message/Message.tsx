import React from 'react';
import { StyledSvgMessage, StyledSvgMessageText } from './Message.styles';
import colors from '../../color-palette';

export interface MessageProps {
  size?: number;
  color?: string;
  counter?: number;
  onClick?: () => void;
}

const Message = ({ size, color, counter, onClick: handleClick }: MessageProps) => {
  return (
    <StyledSvgMessage
      width={size ? size : 29}
      viewBox="0 0 29 25"
      data-testid="Message"
      fill="none"
      onClick={handleClick}
    >
      <path
        d="M19.9835 4.4165H5.98352C4.65793 4.41796 3.38708 4.90131 2.44974 5.76054C1.5124 6.61977 0.985108 7.78471 0.983521 8.99984L0.983521 19.9998C0.985108 21.215 1.5124 22.3799 2.44974 23.2391C3.38708 24.0984 4.65793 24.5817 5.98352 24.5832H19.9835C21.3091 24.5817 22.58 24.0984 23.5173 23.2391C24.4546 22.3799 24.9819 21.215 24.9835 19.9998V8.99984C24.9819 7.78471 24.4546 6.61977 23.5173 5.76054C22.58 4.90131 21.3091 4.41796 19.9835 4.4165ZM5.98352 6.24984H19.9835C20.5823 6.25092 21.167 6.41623 21.6625 6.72449C22.1579 7.03276 22.5414 7.46987 22.7635 7.97959L15.1055 15.0003C14.5419 15.5149 13.7789 15.8038 12.9835 15.8038C12.1881 15.8038 11.4251 15.5149 10.8615 15.0003L3.20352 7.97959C3.42567 7.46987 3.80913 7.03276 4.30457 6.72449C4.8 6.41623 5.38474 6.25092 5.98352 6.24984ZM19.9835 22.7498H5.98352C5.18787 22.7498 4.42481 22.4601 3.8622 21.9444C3.29959 21.4287 2.98352 20.7292 2.98352 19.9998V10.3748L9.44752 16.2965C10.3861 17.1547 11.6578 17.6367 12.9835 17.6367C14.3093 17.6367 15.5809 17.1547 16.5195 16.2965L22.9835 10.3748V19.9998C22.9835 20.7292 22.6674 21.4287 22.1048 21.9444C21.5422 22.4601 20.7792 22.7498 19.9835 22.7498Z"
        fill={color || colors.neutrals.black}
      />
      <rect x="17.9835" y="0.416504" width="11" height="12" rx="5.5" fill={colors.primary.red} />
      <StyledSvgMessageText x={counter && counter > 9 ? '19.7' : '21.5'} y="8.7" fill={colors.neutrals.white}>
        {counter || 0}
      </StyledSvgMessageText>
    </StyledSvgMessage>
  );
};

export default Message;
