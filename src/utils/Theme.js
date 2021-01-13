import {Dimensions, Platform, PixelRatio, StyleSheet} from 'react-native';

export const colors = {
  primary: '#ea6c6c',
  secondary: '#fefdfe',
  third: 'rgb(245,245,245)',
  background: 'rgb(249,226,234)',
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
    // marginHorizontal: metrics.defaultMargin,
    marginTop: metrics.defaultMargin,
    marginBottom: metrics.smallMargin,
    // color: colors.secondary,
  },
  subheading: {
    fontSize: 18,
    // color: colors.primary,
    fontWeight: 'bold',
  },
};

export const commonstyles = {
  VerticalListContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    justifyContent: 'center',
    minHeight: 180,
    marginBottom: '5%',
    marginHorizontal: metrics.smallMargin,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  xxlText: {
    fontSize: 35,
    fontWeight: '700',
  },
  xlText: {
    fontSize: 25,
    fontWeight: '700',
  },
  largeText: {
    fontSize: 25,
    fontWeight: '600',
  },
  smallText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  xsText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: metrics.smallMargin,
  },
};
