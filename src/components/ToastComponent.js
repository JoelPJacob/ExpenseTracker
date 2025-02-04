import Toast from 'react-native-simple-toast';

const ToastComponent = (message, duration = Toast.SHORT, position = Toast.BOTTOM) => {
  Toast.showWithGravity(message, duration, position);
};

export default ToastComponent;
