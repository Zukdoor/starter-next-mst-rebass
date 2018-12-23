import {Box, Card, Flex, Image, Heading, Text} from 'rebass'

const notFound = '/static/images/404.png'

export default () => (
  <div>
    <Box p={2} width={[1, 3 / 4, 1 / 2]} css={{margin: '0 auto'}}>
      <Card p={1} borderRadius={2} boxShadow="0 0 16px rgba(0, 0, 0, .25)">
        <Image width={1} src={notFound} />
        <Box p={1}>
          <Heading as="h3" textAlign="center">
            Sorry, we cannot find this page.
          </Heading>
          <Text fontSize={0} textAlign="center">
            Feel free to contact us.
          </Text>
        </Box>
      </Card>
    </Box>
  </div>
)
