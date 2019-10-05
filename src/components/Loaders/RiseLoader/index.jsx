import React from 'react'
import { css } from '@emotion/core'
import { RiseLoader } from 'react-spinners'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`

export default (props) => {
  const loading = props.loading
  return (
    <div className='sweet-loading'>
      <RiseLoader
        css={override}
        sizeUnit={"px"}
        size={15}
        color={'#71c9ce'}
        loading={loading}
      />
    </div> 
  )
}
