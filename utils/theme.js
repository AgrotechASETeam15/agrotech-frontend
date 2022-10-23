import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const dark = '#232323';
const light = '#E5E5E5';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode(light, dark)(props),
      },
    }),
  },
  components: {
    Modal: {
      baseStyle: () => ({
        dialog: {
          width: ['auto', 'auto', '95%', '100%'],
          bg: '#1F1F1F',
          color: 'white',
        },
      }),
    },
  },
});

export default theme;
