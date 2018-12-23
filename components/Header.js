import React from 'react'
import {inject, observer} from 'mobx-react'
import {Flex, Text} from 'rebass'
import Link from 'next/link'

@inject('store')
@observer
class Header extends React.Component {
  render() {
    return (
      <div style={{marginBottom: 20}}>
        <Flex>
          <Link href="/">
            <a>
              <Text p={1}>Home</Text>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Text p={1}>About</Text>
            </a>
          </Link>
          <Link href="/forever">
            <a>
              <Text p={1}>Forever</Text>
            </a>
          </Link>
          <Link href="/non-existing">
            <a>
              <Text p={1}>Non Existing Page</Text>
            </a>
          </Link>
        </Flex>
      </div>
    )
  }
}

export default Header
