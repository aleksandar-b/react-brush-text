# react-brush-text

> Background for your text

[![NPM](https://img.shields.io/npm/v/react-brush-text.svg)](https://www.npmjs.com/package/react-brush-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-brush-text
```

## Example
![img_1.png](img_1.png)

#### 8 different types
![img.png](img.png)

```jsx
import React, { Component } from 'react'

import { Brush } from 'react-brush-text'

class Example extends Component {
  render() {
    return (<>
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
    </>
  }
}
```

## License

MIT © [aleksandar-b](https://github.com/aleksandar-b)
