import {Box, Text} from 'rebass'

export default props => {
  return (
    <div>
      <Box
        p={1}
        width={[1, 3 / 4, 1 / 2]}
        color="#fef263"
        css={{
          margin: '0 auto',
        }}
      >
        <Text
          textAlign="center"
          fontFamily="menlo, monaco, monospace"
          fontSize={[1, 3, 5]}
          width={[1 / 4, 1 / 3, 1 / 2]}
          css={{
            'background-color': props.light ? 'lightgrey' : 'darkgrey',
            margin: '0 auto',
            'border-radius': '15px',
          }}
        >
          {format(new Date(props.lastUpdate))}
        </Text>
      </Box>
    </div>
  )
}

const format = t =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = n => (n < 10 ? `0${n}` : n)
