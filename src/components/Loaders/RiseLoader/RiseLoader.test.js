import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RiseLoader from './index'

test('Render RiseLoader without crashing', () => {
  const { getByTestId } = render(
    <RiseLoader />
  )

  const riseLoader = getByTestId('rise-loader')
  expect(riseLoader).toBeInTheDocument()
  expect(riseLoader).toBeVisible()
})
