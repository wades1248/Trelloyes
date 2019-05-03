import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

describe('card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card title='card' content="card" />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const tree = renderer
            .create(<Card title="card" content="card" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});