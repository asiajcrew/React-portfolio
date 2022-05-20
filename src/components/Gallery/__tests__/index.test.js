// __tests__/Gallery.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'
const project2 = { name: "project2", description: "Bearly Tolerable Jokes" };


afterEach(cleanup)

describe('Gallery component', () => {

  it('renders', () => {
    render(<Gallery currentCategory={project2} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={project2} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('displays text', () => {
  const { getByTestId } = render(<Gallery currentCategory={project2} />)
  expect(getByTestId('h1tag')).toHaveTextContent('project2')
})