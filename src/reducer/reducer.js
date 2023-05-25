const initialState = {
  isShowQuickAccessModal: false,
  isShowMessageModal: false,
  isShowNotificationsModal: false,
  isShowSidebar: false,
  isShowMenuModals: false,
  isShowAdminDetailModal: false,
  loadingTime: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "CLOSE_ALL_MODAL":
      return {
        ...state,
        isShowQuickAccessModal: false,
        isShowMessageModal: false,
        isShowNotificationsModal: false,
        isShowSidebar: false,
        isShowMenuModals: false,
        isShowAdminDetailModal: false,
      };

    case "FINISH_LOADING_TIME":
      return { ...state, loadingTime: false };
    case "SET_MODAL_STATUS":
      return { ...state, [action.payload.modalName]: action.payload.status };
    default:
      return state;
  }
}

export { initialState, reducer };
