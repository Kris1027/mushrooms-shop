import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import { AppDispatch, RootState } from './store';

export const useCartDispatch: () => AppDispatch = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
