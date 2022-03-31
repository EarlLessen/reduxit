export const CREATE_NAME = 'CREATE_NAME';
export const createName = (text: string) => ({
  type: CREATE_NAME,
  payload: {text},
});

export const CLEAR = 'CLEAR';
export const clear = () => ({
  type: CLEAR,
  payload: {},
});
