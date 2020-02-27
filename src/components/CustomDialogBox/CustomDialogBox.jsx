import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class CustomDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClose() {
    const { type, handleClose } = this.props;
    if (type) {
      handleClose(type);
    }
    handleClose();
  }

  render() {
    const { component, title, ...other } = this.props;

    return (
      <Dialog aria-labelledby="simple-dialog-title" onClose={() => this.handleClose()} {...other}>
        <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {component}
        </DialogContent>
      </Dialog>
    );
  }
}

CustomDialog.defaultProps = {
  type: '',
  title: '',
};

CustomDialog.propTypes = {
  component: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
};

const CustomDialogBox = withStyles(styles)(CustomDialog);

export default CustomDialogBox;
