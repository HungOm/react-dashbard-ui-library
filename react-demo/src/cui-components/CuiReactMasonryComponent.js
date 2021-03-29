import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import styled from 'styled-components'

const ItemDiv = styled.div`
  width: ${props => props.width || 160}px;
  height: ${props => props.height || 120}px;
  float: left;
  background: rgba(0,0,0,.05);
  border: 2px solid rgba(0,0,0,.05);
  border-radius: 5px;
`

const itemList = [
  { title: 'Item 1' },
  { title: 'Item 2', height: 200, width: 320 },
  { title: 'Item 3', height: 260 },
  { title: 'Item 4', height: 200 },
  { title: 'Item 5', width: 480 },
  { title: 'Item 6' },
  { title: 'Item 7' },
  { title: 'Item 8', height: 200 },
  { title: 'Item 9', height: 260, width: 320 },
  { title: 'Item 10' },
  { title: 'Item 11', height: 200 },
  { title: 'Item 12',  },
  { title: 'Item 13', height: 200, width: 320 },
  { title: 'Item 14', width: 320 },
  { title: 'Item 15' },
  { title: 'Item 16', height: 200 },
  { title: 'Item 17' },
  { title: 'Item 18' },
  { title: 'Item 19', height: 260 },
  { title: 'Item 20', height: 200 },
  { title: 'Item 21' },
  { title: 'Item 22' },
  { title: 'Item 23', height: 200 }
]

const masonryOptions = {
  transitionDuration: '0.3s',
  itemSelector: '.masonry-item',
  columnWidth: 160,
  originLeft: true
}

class CuiReactMasonryComponent extends Component {
  render() {
    const childElements = itemList.map(item => {
      return (
        <ItemDiv className="masonry-item" width={item.width} height={item.height} key={item.title}>
          {item.title}
        </ItemDiv>
      )
    })

    // RTL direction
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
    if (isRTL) {
      masonryOptions.originLeft = false
    }

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-masonry-component</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/eiriklv/react-masonry-component" className="ui-block-description">https://github.com/eiriklv/react-masonry-component</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <Masonry options={masonryOptions}>
            {childElements}
          </Masonry>
        </div>
      </div>
    )
  }
}

export default CuiReactMasonryComponent
