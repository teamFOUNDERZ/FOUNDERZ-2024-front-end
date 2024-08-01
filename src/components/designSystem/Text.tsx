import { ComponentProps } from 'react';
import { Colors, colorsKeyOfType } from '../../styles/colors';
import { Fonts, fontsKeyOfType } from '../../styles/fonts';

type Props = ComponentProps<'span'> & {
  font?: fontsKeyOfType;
  color?: colorsKeyOfType;
};

export const Text = ({
  font = 'BodyMedium',
  color = 'Black',
  style,
  children,
  ...props
}: Props) => {
  return (
    <span style={{ ...Fonts[font], color: Colors[color], ...style }}>
      {children}
    </span>
  );
};
