const getEvents = state => (
  state.events && state.events.eventList ? state.events.eventList : []
);

const getOpenEnrolState = state => (
  state.events && state.events.dialogInfo ? state.events.dialogInfo.enrol : false
);

const getOpenCreateState = state => (
  state.events && state.events.dialogInfo ? state.events.dialogInfo.create : false
);

const getSnackBarState = state => state.events && state.events.snackBarData;

const getOpenEnrollments = state => (
  state.events && state.events.dialogInfo ? state.events.dialogInfo.enrollments : false
);
const getEnrollments = state => state.events && state.events.enrollments;

const selectors = {
  getEvents,
  getOpenEnrolState,
  getOpenEnrollments,
  getOpenCreateState,
  getEnrollments,
  getSnackBarState,
};

export default selectors;
