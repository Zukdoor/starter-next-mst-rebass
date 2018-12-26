import MainBox from '../components/MainBox'

const notFound = '/static/images/404.png'

export default () => (
  <div>
    <MainBox
      src={notFound}
      heading="Sorry, we cannot find this page."
      subHeading={`Feel free to contact us: <a href="mailto:contact@bookwiki.site">contact@bookwiki.site</a>`}
    />
  </div>
)
