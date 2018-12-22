import {Box, Card, Image, Heading, Text} from 'rebass'

const photo = '../static/images/photo.jpeg'

export default () => (
  <div>
    <Box width={768}>
      <Card p={1} borderRadius={2} boxShadow="0 0 16px rgba(0, 0, 0, .25)">
        <Image width={768} src={photo} />
        <Box p={1}>
          <Heading as="h3">Zukdoor Template: Next.js</Heading>
          <Text fontSize={0}>A template project based on Next.js</Text>
        </Box>
      </Card>
    </Box>
  </div>
)
