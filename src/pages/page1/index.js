import React from 'react'
import ReactDom from 'react-dom'
import './index.scss' // es6 module本身并不会import css，但是有了webpack加持后，you know that means~

export default class Page1 extends React.Component {
  render() {
    return (
      <div className="page-wrap">
        This is page 啊~
      </div>
    )
  }
}