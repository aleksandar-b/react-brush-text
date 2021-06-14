import React from 'react'

import { Brush } from 'react-brush-text'
import 'react-brush-text/dist/index.css'

const App = () => {
  return (
    <div
      id="test-content"
      style={{
        padding: '25px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Brush style={{ padding: '17px 58px' }} type={1}>
        <span style={{ color: 'white' }}>Your text goes here 😄</span>
      </Brush>
      <Brush style={{ padding: '17px 58px' }} type={2}>
        <span style={{ color: 'white' }}>Your text goes here 😄</span>
      </Brush>
      <Brush style={{ padding: '17px 58px' }} type={3}>
        <span style={{ color: 'white' }}>Your text goes here 😄</span>
      </Brush>
      <Brush
        style={{
          padding: '7px 58px',
          paddingBottom: '15px',
          paddingTop: '34px'
        }}
        type={4}
      >
        <span style={{ color: 'white' }}>Your text goes here 😄</span>
      </Brush>
      <Brush style={{ padding: '17px 78px', paddingBottom: '30px'}} type={5}>
        <span style={{ color: 'white' }}>Your text goes here 😄</span>
      </Brush>
      <Brush style={{ padding: '17px 58px' }} type={6}>
        <span style={{ color: 'white' }}>Your text goes here 😄</span>
      </Brush>
      <Brush style={{ padding: '17px 58px' }} type={7}>
        <span style={{ color: 'white' }}>Your text goes here 😄</span>
      </Brush>
      <Brush style={{ padding: '17px 58px', paddingBottom: '35px',
        paddingTop: '20px' }} type={8}>
        <span style={{ color: 'white' }}>Your text goes here 😄</span>
      </Brush>
    </div>
  )
}

export default App
