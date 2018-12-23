import React from 'react'
import {inject, observer} from 'mobx-react'
import Clock from './Clock'

@inject('store')
@observer
class Footer extends React.Component {
  componentDidMount() {
    this.props.store.start()
  }

  componentWillUnmount() {
    this.props.store.stop()
  }

  render() {
    return (
      <div>
        <Clock
          lastUpdate={this.props.store.lastUpdate}
          light={this.props.store.light}
        />
      </div>
    )
  }
}

export default Footer
