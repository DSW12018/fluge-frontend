import { all, takeEvery } from 'redux-saga/effects';
import ObserverBase from './base';

class FilterObserver extends ObserverBase {

  *handleFilter(update) {
    // Filter Flights
    console.log(update);
  }

  *watchApplyFilter() {
    yield takeEvery('APPLY_FILTER', this.handleFilter);
  }

  *handleUpdate() {
    yield all([
      this.watchApplyFilter()
    ]);
  }
}


const filterObserver = new FilterObserver();

export default filterObserver.handleUpdate;
