// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';

// Increase Counter
function* increaseCounterAsync() {
  try {
    // Update Data: Increment Counter By 1
    yield call(reduxSagaFirebase.firestore.updateDocument, `counter/counter`, {
      counter: FieldValue.increment(1),
    });
  }
  catch (error) {
    console.log(error);
  }
}

// Decrease Counter Async
function* decreaseCounter() {
  try {
    // Update Data: Decrement Counter By 1
    yield call(reduxSagaFirebase.firestore.updateDocument, `counter/counter`, {
      counter: FieldValue.increment(-1),
    });
  }
  catch (error) {
    console.log(error);
  }
}

// Generator: Watch Increase Counter
export function* watchIncreaseCounter() {
  // // Take Every Action
  // yield takeEvery('INCREASE_COUNTER', increaseCounterAsync);

  // Take Last Action
  yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
};

// Generator: Watch Decrease Counter
export function* watchDecreaseCounter() {
  // // Take Every Action
  // yield takeEvery('DECREASE_COUNTER', decreaseCounter);

  // Take Last Action
  yield takeLatest('DECREASE_COUNTER', decreaseCounter);
};
