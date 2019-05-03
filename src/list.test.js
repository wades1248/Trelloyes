import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';

describe('list component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header='list' cards={[{},{}]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const tree = renderer
            .create(<List header='list' cards={[{},{}]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});