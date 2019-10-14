// Imports: Dependencies
import { call, takeEvery } from 'redux-saga/effects';

// Imports: Firebase Collection + Atomic Incrementers
import reduxSagaFirebase from '../../firebase/firebase';
import { atomicIncrement, atomicDecrement } from '../../firebase/firebase';

// Redux Saga: Increase Counter
function* increaseCounter() {
  try {
    // Update Data: Increment Counter By 1
    yield call(reduxSagaFirebase.firestore.updateDocument, 'counter/counter', {
      counter: atomicIncrement,
    });
  }
  catch (error) {
    console.log(error);
  }
};

// Redux Saga: Decrease Counter
function* decreaseCounter() {
  try {
    // Update Data: Decrement Counter By 1
    yield call(reduxSagaFirebase.firestore.updateDocument, 'counter/counter', {
      counter: atomicDecrement,
    });
  }
  catch (error) {
    console.log(error);
  }
};

// Generator: Watch Increase Counter
export function* watchIncreaseCounter() {
  // Take Every Action
  yield takeEvery('INCREASE_COUNTER', increaseCounter);
};

// Generator: Watch Decrease Counter
export function* watchDecreaseCounter() {
  // Take Every Action
  yield takeEvery('DECREASE_COUNTER', decreaseCounter);
};
