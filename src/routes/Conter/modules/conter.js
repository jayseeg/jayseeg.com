// ------------------------------------
// Constants
// ------------------------------------
export const CONTER_INCREMENT = 'CONTER_INCREMENT'
export const CONTER_RESET = 'CONTER_RESET'
export const CONTER_DOUBLE_ASYNC = 'CONTER_DOUBLE_ASYNC'
export const CONTER_EXPONENT_ASYNC = 'CONTER_EXPONENT_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : CONTER_INCREMENT,
    payload : value
  }
}

export function reset () {
  return { type: CONTER_RESET }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : CONTER_DOUBLE_ASYNC,
          payload : getState().conter
        })
        resolve()
      }, 333)
    })
  }
}

export const exponentAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : CONTER_EXPONENT_ASYNC,
          payload : getState().conter
        })
        resolve()
      }, 666)
    })
  }
}

export const actions = {
  increment,
  reset,
  doubleAsync,
  exponentAsync,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CONTER_INCREMENT]:      (state, action) => state + action.payload,
  [CONTER_RESET]:          () => 0,
  [CONTER_DOUBLE_ASYNC]:   (state, action) => state * 2,
  [CONTER_EXPONENT_ASYNC]: (state, action) => state * state,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function conterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
