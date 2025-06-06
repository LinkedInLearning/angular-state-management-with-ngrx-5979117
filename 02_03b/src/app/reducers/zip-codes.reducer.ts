import { createReducer, on } from '@ngrx/store';
import { ZipCodeActions } from '../actions/zip-code.actions';

export const zipCodesFeatureKey = 'zipCodes';

export type ZipCodeState = string[];


export const initialState: ZipCodeState = [];

export const zipCodeReducer = createReducer(
  initialState,
);

