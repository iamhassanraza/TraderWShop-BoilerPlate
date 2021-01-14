import Toast from 'react-native-root-toast';
import {colors} from './Theme';

export default (msg) => {
  Toast.show(msg, {
    backgroundColor: colors.error,
    textColor: 'white',
    opacity: 1,
    position: -60,
  });
};
