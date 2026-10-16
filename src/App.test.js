// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SketchChronicle title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SketchChronicle/i);
    expect(titleElement).toBeInTheDocument();
});
