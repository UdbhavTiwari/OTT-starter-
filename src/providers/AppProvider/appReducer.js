export function appReducer(state, action) {
  switch (action.type) {
    case "create-profile":
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    case "create-new-user":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}
