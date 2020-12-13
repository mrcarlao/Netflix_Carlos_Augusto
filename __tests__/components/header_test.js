import React from 'react';
import render from 'react-test-renderer';
import Header from '../../components/Header';


test('renders correctly', () => {
    const tree = render.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});