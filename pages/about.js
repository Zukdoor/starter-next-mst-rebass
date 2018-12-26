import MainBox from '../components/MainBox'

const geek = '/static/images/geek.jpg'

export default () => (
  <div>
    <MainBox
      src={geek}
      heading="We are a group of geeks that believe in remote collaboration."
      subHeading={`Join us: <a href="mailto:hr@bookwiki.site">hr@bookwiki.site</a>`}
    />
  </div>
)
