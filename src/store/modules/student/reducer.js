import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  name: null,
  email: null,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.id = action.payload.student.id;
        draft.name = action.payload.student.name;
        draft.email = action.payload.student.email;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.id = null;
        draft.name = null;
        draft.email = null;
        break;
      }

      default:
    }
  });
}
