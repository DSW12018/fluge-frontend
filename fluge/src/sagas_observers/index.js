import { all } from 'redux-saga/effects';
import filterObserver from './filter';

class Subject {

  observers = [];

  add(observer) {
    this.observers = [ ...this.observers, observer ];
  }

  remove(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  *notify() {
    // const observers = this.observers.map(observer => observer());
    yield all([filterObserver()]);
  }

}

const subject = new Subject();
subject.add(filterObserver());

export default subject;
