import {Box, Card, Heading, Image, Text} from 'rebass'

const geek = '/static/images/geek.jpg'

export default () => (
  <div>
    <Box p={2} width={[1, 3 / 4, 1 / 2]} css={{margin: '0 auto'}}>
      <Card p={1} borderRadius={2} boxShadow="0 0 16px rgba(0, 0, 0, .25)">
        <Image width={1} src={geek} />
        <Box p={1}>
          <Heading as="h3" textAlign="center">
            We are a group of geeks that believe in remote collaboration.
          </Heading>
          <Text fontSize={0} textAlign="center">
            Join us: <a href="mailto:hr@bookwiki.site">hr@bookwiki.site</a>
          </Text>
        </Box>
      </Card>
    </Box>
  </div>
)
