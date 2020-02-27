import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
    error: red,
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
  },
});

export default theme;
