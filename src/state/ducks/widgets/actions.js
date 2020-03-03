import {
  OPEN_ADD_WIDGET,
  CLOSE_ADD_WIDGET,
  OPEN_EDIT_WIDGET,
  CLOSE_EDIT_WIDGET,
  OPEN_TRUNCATE_WIDGET,
  CLOSE_TRUNCATE_WIDGET,
} from './types';

const openAddWidgetAction = () => ({
  type: OPEN_ADD_WIDGET,
});

const closeAddWidgetAction = () => ({
  type: CLOSE_ADD_WIDGET,
});

const openEditWidgetAction = () => ({
  type: OPEN_EDIT_WIDGET,
});

const closeEditWidgetAction = () => ({
  type: CLOSE_EDIT_WIDGET,
});

const openTruncateWidgetAction = () => ({
  type: OPEN_TRUNCATE_WIDGET,
});

const closeTruncateWidgetAction = () => ({
  type: CLOSE_TRUNCATE_WIDGET,
});

export {
  openAddWidgetAction,
  closeAddWidgetAction,
  openEditWidgetAction,
  closeEditWidgetAction,
  openTruncateWidgetAction,
  closeTruncateWidgetAction,
};
