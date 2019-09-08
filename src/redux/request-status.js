// State of fetch requests in redux store.
export const RequestStatus = {
   NOT_STARTED: 'NOT_STARTED',
   LOADING: 'LOADING',
   SUCCESS: 'SUCCESS',
   FAILURE: 'FAILURE',
};

export const GetRequestStatusForView = (status) => ({
   loading: status === RequestStatus.NOT_STARTED || status === RequestStatus.LOADING,
   haveProducts: status === RequestStatus.SUCCESS,
   isError: status === RequestStatus.FAILURE,
});
