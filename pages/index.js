import {Box, Card, Flex, Image, Heading, Text} from 'rebass'
import styled from 'styled-components'
import SampleComponent from '../components/SampleComponent'

const photo = '/static/images/photo.jpeg'

const CenterBox = styled(Box)`
  margin: 0 auto;
`

export default () => (
  <div>
    <CenterBox p={2} width={[1, 3 / 4, 1 / 2]}>
      <Card p={1} borderRadius={2} boxShadow="0 0 16px rgba(0, 0, 0, .25)">
        <Image width={1} src={photo} />
        <Box p={1}>
          <Heading as="h3" textAlign="center">
            Zukdoor Template: Next.js
          </Heading>
          <Text fontSize={0} textAlign="center">
            A template project based on Next.js
          </Text>
        </Box>
      </Card>
    </CenterBox>
    <SampleComponent title="Current time" />
  </div>
)
