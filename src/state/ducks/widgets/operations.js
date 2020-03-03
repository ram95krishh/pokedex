import {
  openAddWidgetAction,
  closeAddWidgetAction,
  openEditWidgetAction,
  closeEditWidgetAction,
  openTruncateWidgetAction,
  closeTruncateWidgetAction,
} from './actions';

const openAddWidget = dispatch => () => dispatch(openAddWidgetAction());

const closeAddWidget = dispatch => () => dispatch(closeAddWidgetAction());

const openEditWidget = dispatch => () => dispatch(openEditWidgetAction());

const closeEditWidget = dispatch => () => dispatch(closeEditWidgetAction());

const openTruncateWidget = dispatch => () => dispatch(openTruncateWidgetAction());

const closeTruncateWidget = dispatch => () => dispatch(closeTruncateWidgetAction());

const operations = {
  openAddWidget,
  closeAddWidget,
  openEditWidget,
  closeEditWidget,
  openTruncateWidget,
  closeTruncateWidget,
};

export default operations;
