const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "HANDLE_INPUT_VALUES":
      return {
        ...state,
        [action.field]: +action.payload,
      };

    case "RESET":
      return { ...state, ...action.payload };
  }
};

export default formReducer;
