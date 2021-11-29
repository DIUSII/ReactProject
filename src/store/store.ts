import { configureStore } from '@reduxjs/toolkit';
import CounterSlice, {ICounter} from './components/CounterSlice';

export interface IStore {
  counter: ICounter,
}

export default configureStore({
  reducer: {
    counter: CounterSlice,
  }
});