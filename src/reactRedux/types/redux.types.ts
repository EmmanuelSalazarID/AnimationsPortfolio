import { Action, AnyAction } from '@reduxjs/toolkit';
import { RootState } from 'reactRedux/reducers';
import { ThunkAction } from 'redux-thunk';
import { SessionInterface } from './session.types';

export type ThunkActionType = ThunkAction<Promise<void>, RootState, unknown, AnyAction>;
export type Dispatcher = (action: ThunkActionType | Action) => void;

export type RootReducer = {
  session: SessionInterface;
};
