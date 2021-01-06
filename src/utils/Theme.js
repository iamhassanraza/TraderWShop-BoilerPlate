import {Dimensions, Platform, PixelRatio} from 'react-native';

export const colors = {
  primary: 'rgb(79,32,158)',
  secondary: 'rgb(36,62,92)',
  third: '#2c2e33',
  background: 'white',
  button: '#7b4df8',
  darkBackground: '#24292e',
  lightBackground: 'rgb(248,248,248)',
  grey: '#a3a3a3',
  error: '#A62122',
  yellow: 'rgb(254,239,93)',
  borderColor: 'grey',
  lightGrey: 'rgb(245,245,245)',
  darkGray: 'rgb(216,216,216)',
  rating: '#ffdd65',
  blue: 'rgb(57,198,192)',
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const metrics = {
  width: width,
  height: height,
  defaultMargin: Dimensions.get('window').width * 0.05,
  smallMargin: width * 0.03,
  largeMargin: width * 0.08,
};

export const scaleFont = (size) => size * PixelRatio.getFontScale();

export const fonts = {
  primary: Platform.select({
    android: '',
    ios: 'Avenir-Medium',
  }),
  primaryBold: Platform.select({
    android: '',
    ios: 'MyanmarSangamMN-Bold',
  }),
  secondary: Platform.select({
    android: '',
    ios: 'Avenir-Medium',
  }),
  secondaryBold: Platform.select({
    android: '',
    ios: 'Avenir-Medium',
  }),
};

export const text = {
  largeheading: {
    fontSize: 25,
    fontWeight: '700',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: metrics.defaultMargin,
    marginTop: metrics.defaultMargin,
    marginBottom: metrics.smallMargin,
    color: colors.secondary,
  },
  subheading: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
};
