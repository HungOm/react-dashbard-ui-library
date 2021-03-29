import React, { Component } from 'react'
import styles from './Loader.module.scss'

class Loader extends Component {
  async componentWillUnmount() {
    await new Promise(resolve => 
      setTimeout(() => resolve(), 5000)
    )
  }

  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.Spinner}>
          <div className={'spinner-border text-primary ' + styles.SpinnerEl} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Loader
