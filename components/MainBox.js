import {Box, Card, Flex, Heading, Image, Text} from 'rebass'

export default props => {
  return (
    <div>
      <Box p={2} width={[1, 3 / 4, 1 / 2]} css={{margin: '0 auto'}}>
        <Card p={1} borderRadius={2} boxShadow="0 0 16px rgba(0, 0, 0, .25)">
          <Flex>
            <Box width={1 / 8} />
            <Image width={3 / 4} height="100%" src={props.src} />
            <Box width={1 / 8} />
          </Flex>
          <Box p={1}>
            <Heading as="h3" textAlign="center">
              {props.heading}
            </Heading>
            <Text fontSize={0} textAlign="center">
              <div dangerouslySetInnerHTML={{__html: props.subHeading}} />
            </Text>
          </Box>
        </Card>
      </Box>
    </div>
  )
}
