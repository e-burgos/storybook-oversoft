import colors from '../../color-palette';

export type assetEnum = 'RightArrow' | 'LeftArrow' | 'Spinner' | 'Users';

export const assetArray: assetEnum[] = ['RightArrow', 'LeftArrow', 'Spinner', 'Users'];

export const bgColorDefault = (asset: assetEnum): string => {
  let color: string = colors.background;
  if (asset === 'Users') color = colors.secondary.greenLight;
  if (asset === 'Spinner') color = colors.secondary.yellowLight;
  return color;
};
