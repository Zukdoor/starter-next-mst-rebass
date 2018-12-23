import React from 'react'
import {inject, observer} from 'mobx-react'
import {Card, Flex, Text} from 'rebass'
import Link from 'next/link'

const MenuItem = props => {
  const {href, width, ...textProps} = props
  return (
    <Link href={href}>
      <Card boxShadow="0 0 16px rgba(0, 0, 0, .15)" width={width}>
        <Text
          {...textProps}
          fontSize={['10px', 2, 3]}
          fontFamily="arial, monaco, monospace"
          p={3}
          pt={1}
          textAlign="center"
          css={{
            'background-color': 'white',
            color: 'darkgrey',
            'border-top': '2px solid white',
            // 'border-bottom': '2px solid lightgrey',
            margin: '0 auto',
            // 'position': 'fixed',
            // 'opacity': 0.5,
            '&:hover': {
              color: '#88cb7f',
              'border-top': '2px solid #88cb7f',
              cursor: 'pointer',
            },
            '&:active': {
              color: 'white',
              'background-color': 'darkgrey',
            },
          }}
        />
      </Card>
    </Link>
  )
}

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
