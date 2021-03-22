const todosReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_TODOS":
      return action.todos;
    case "ADD_TODO":
      return [
        ...state,
        {
          title: action.title,
          body: action.body,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.title !== action.title);
    default:
      return state;
  }
};

export default todosReducer;
