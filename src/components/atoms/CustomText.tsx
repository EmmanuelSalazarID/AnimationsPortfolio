import React, { ReactNode } from 'react';
import {
  Text, TextStyle, StyleProp, NativeSyntheticEvent, TextLayoutEventData,
} from 'react-native';
import { typographyLightStyle } from './textStyles';

export type TypographyTypes = 'header' | 'title' | 'subtitle' | 'body' | 'caption';

export interface CustomTextProps {
  text?: string;
  children?: ReactNode;
  textAlign?: TextStyle['textAlign'];
  textColor?: TextStyle['color'];
  typography?: TypographyTypes;

  fontWeight?: TextStyle['fontWeight'];
  fontSize?: number;
  numberOfLines?: number;
  transform?: TextStyle['textTransform'];
  underline?: boolean;
  allowFontScaling?: boolean;
  spacing?: number;
  lineHeight?: number;

  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  adjustsFontSizeToFit?: boolean;
  onPress?: () => void;
  onTextLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  children,
  typography = 'body',
  textColor,
  textAlign,
  fontWeight,
  fontSize,
  numberOfLines,
  transform,
  underline,
  allowFontScaling,
  spacing,
  lineHeight,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  marginHorizontal,
  marginVertical,
  adjustsFontSizeToFit,
  onPress,
  onTextLayout,
}: CustomTextProps) => {
  const style = typographyLightStyle;

  const textStyle: StyleProp<TextStyle> = [];
  switch (typography) {
    case 'header': textStyle.push(style.header); break;
    case 'title': textStyle.push(style.title); break;
    case 'subtitle': textStyle.push(style.subtitle); break;
    case 'body': textStyle.push(style.body); break;
    case 'caption': textStyle.push(style.caption); break;
    default: break;
  }

  if (fontSize) textStyle.push({ fontSize });
  if (textColor) textStyle.push({ color: textColor });
  if (fontWeight) textStyle.push({ fontWeight });

  return (
    <Text
      style={[textStyle, {
        textAlign,
        textTransform: transform,
        textDecorationLine: underline ? 'underline' : 'none',
        letterSpacing: spacing,
        lineHeight,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        marginHorizontal,
        marginVertical,
      }]}
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling ?? false}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      onPress={onPress}
      onTextLayout={onTextLayout}
    >
      {text || children}
    </Text>
  );
};

export { CustomText };
