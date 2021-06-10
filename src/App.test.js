import React from 'react';
import { render } from '@testing-library/react';
import { Details } from './components/Details/index';
import {store} from './redux/store';

test('getData test',()=>{
    const state = store.getState.Details;

})
