import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import './i18n';

test('renders react app', () => {
    render(<App />);
    const linkElement = screen.getByText('App');
    expect(linkElement).toBeInTheDocument();
});
