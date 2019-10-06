import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GridLoader from '.'

test('Render GridLoader without crashing', () => {
  const { getByTestId } = render(
    <GridLoader />
  )

  const gridLoader = getByTestId('grid-loader')
  expect(gridLoader).toBeInTheDocument()
  expect(gridLoader).toBeVisible()
})
