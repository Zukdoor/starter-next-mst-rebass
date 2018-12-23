import {Card, Text} from 'rebass'
import Link from 'next/link'

export default props => {
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
