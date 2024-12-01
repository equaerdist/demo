import {
  ReducerType,
  SHOULD_AUTOBATCH,
  TaskAbortError,
  Tuple,
  actionTypes_default,
  addListener,
  applyMiddleware,
  asyncThunkCreator,
  autoBatchEnhancer,
  bindActionCreators,
  buildCreateSlice,
  clearAllListeners,
  combineReducers,
  combineSlices,
  compose,
  configureStore,
  createAction,
  createActionCreatorInvariantMiddleware,
  createAsyncThunk,
  createDraftSafeSelector,
  createDraftSafeSelectorCreator,
  createDynamicMiddleware,
  createEntityAdapter,
  createImmutableStateInvariantMiddleware,
  createListenerMiddleware,
  createReducer,
  createSelector,
  createSelectorCreator,
  createSerializableStateInvariantMiddleware,
  createSlice,
  createStore,
  current,
  findNonSerializableValue,
  formatProdErrorMessage,
  freeze,
  isAction,
  isActionCreator,
  isAllOf,
  isAnyOf,
  isAsyncThunkAction,
  isDraft,
  isFSA,
  isFulfilled,
  isImmutableDefault,
  isPending,
  isPlain,
  isPlainObject,
  isRejected,
  isRejectedWithValue,
  legacy_createStore,
  lruMemoize,
  miniSerializeError,
  nanoid,
  original,
  prepareAutoBatched,
  produce,
  removeListener,
  unwrapResult,
  weakMapMemoize
} from "./chunk-M2QZNOAH.js";
import {
  ReactReduxContext,
  createDispatchHook,
  useDispatch
} from "./chunk-BGYESXUY.js";
import "./chunk-TWJRYSII.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@reduxjs/toolkit/dist/react/redux-toolkit-react.modern.mjs
var createDynamicMiddleware2 = () => {
  const instance = createDynamicMiddleware();
  const createDispatchWithMiddlewareHookFactory = (context = ReactReduxContext) => {
    const useDispatch2 = context === ReactReduxContext ? useDispatch : createDispatchHook(context);
    function createDispatchWithMiddlewareHook2(...middlewares) {
      instance.addMiddleware(...middlewares);
      return useDispatch2;
    }
    createDispatchWithMiddlewareHook2.withTypes = () => createDispatchWithMiddlewareHook2;
    return createDispatchWithMiddlewareHook2;
  };
  const createDispatchWithMiddlewareHook = createDispatchWithMiddlewareHookFactory();
  return {
    ...instance,
    createDispatchWithMiddlewareHookFactory,
    createDispatchWithMiddlewareHook
  };
};
export {
  ReducerType,
  SHOULD_AUTOBATCH,
  TaskAbortError,
  Tuple,
  actionTypes_default as __DO_NOT_USE__ActionTypes,
  addListener,
  applyMiddleware,
  asyncThunkCreator,
  autoBatchEnhancer,
  bindActionCreators,
  buildCreateSlice,
  clearAllListeners,
  combineReducers,
  combineSlices,
  compose,
  configureStore,
  createAction,
  createActionCreatorInvariantMiddleware,
  createAsyncThunk,
  createDraftSafeSelector,
  createDraftSafeSelectorCreator,
  createDynamicMiddleware2 as createDynamicMiddleware,
  createEntityAdapter,
  createImmutableStateInvariantMiddleware,
  createListenerMiddleware,
  produce as createNextState,
  createReducer,
  createSelector,
  createSelectorCreator,
  createSerializableStateInvariantMiddleware,
  createSlice,
  createStore,
  current,
  findNonSerializableValue,
  formatProdErrorMessage,
  freeze,
  isAction,
  isActionCreator,
  isAllOf,
  isAnyOf,
  isAsyncThunkAction,
  isDraft,
  isFSA as isFluxStandardAction,
  isFulfilled,
  isImmutableDefault,
  isPending,
  isPlain,
  isPlainObject,
  isRejected,
  isRejectedWithValue,
  legacy_createStore,
  lruMemoize,
  miniSerializeError,
  nanoid,
  original,
  prepareAutoBatched,
  removeListener,
  unwrapResult,
  weakMapMemoize
};
//# sourceMappingURL=@reduxjs_toolkit_react.js.map
