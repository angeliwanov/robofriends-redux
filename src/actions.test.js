import * as actions from './actions';
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from "./constants";
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to search robots', ()=>{
    const text = 'whoo';
    const expextedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expextedAction)
})

it('handles requesting robots API', ()=>{
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expextedAction = {
        type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expextedAction)
})