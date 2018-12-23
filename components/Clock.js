import {Box, Text} from 'rebass'

export default props => {
  return (
    <div>
      <Box
        p={1}
        width={[1, 3 / 4, 1 / 2]}
        color="yellow"
        css={{margin: '0 auto'}}
      >
        <Text
          fontSize={2}
          textAlign="center"
          width={1 / 2}
          css={{
            font: '50px menlo, monaco, monospace',
            'background-color': props.light ? 'lightgrey' : 'darkgrey',
            margin: '0 auto',
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
