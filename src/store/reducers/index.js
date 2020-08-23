// Imports: Dependencies
import { combineReducers } from "redux";

// Imports: Reducers
import permanentReducer from "./permanentReducer";
import temporaryReducer from "./temporaryReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  permanent: permanentReducer,
  temporary: temporaryReducer,
});

// Exports
export default rootReducer;
