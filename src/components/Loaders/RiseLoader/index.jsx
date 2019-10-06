import React from 'react'
import { css } from '@emotion/core'
import { RiseLoader } from 'react-spinners'
import './index.css'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`

export default (props) => {
  const loading = props.loading
  
  return (
    <div data-testid="rise-loader" className='sweet-loading' id="box">
      <RiseLoader
        css={ override }
        sizeUnit={"px"}
        size={15}
        color={'#71c9ce'}
        loading={loading}
      />
    </div> 
  )
}
