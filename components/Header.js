import React from 'react'
import {inject, observer} from 'mobx-react'
import {Flex, Text} from 'rebass'
import MenuItem from './MenuItem'

@inject('store')
@observer
class Header extends React.Component {
  render() {
    return (
      <div style={{marginBottom: 20}}>
        <Flex>
          <MenuItem href="/" width={1 / 6}>
            Home
          </MenuItem>
          <Text width={1 / 3} />
          <MenuItem href="/about" width={1 / 6}>
            About
          </MenuItem>
          <MenuItem href="/forever" width={1 / 6}>
            Forever
          </MenuItem>
          <MenuItem href="/404" width={1 / 6}>
            404
          </MenuItem>
        </Flex>
      </div>
    )
  }
}

export default Header
