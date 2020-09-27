
import { InlineForm } from 'react-tinacms-inline';

import Setup from './helpers/setup';
import Header from './components/Head';
import NavBar from './components/NavBar';
import ParallaxWrapper from './components/Parallax';
import Content from './components/Content';
import { GetStaticProps } from 'next';
import preview from './api/preview';
import SetupContent from './helpers/content';

export default function Home({ file }) {
  const pageName = 'Events';
  const bgImage = '/images/second.png';

  const {form, data} = Setup(file);

  return (
    <html>
        <Header pageName={pageName} />

        <NavBar pageName={pageName} />

        <ParallaxWrapper pageName={pageName} bgImage={bgImage} />

        <InlineForm form={form}>
            <Content data={data} />
        </InlineForm>
    </html>
  )
}

export const getStaticProps: GetStaticProps = async function({
    preview,
    previewData,
  }) {

    // Gets the Props
    return SetupContent(
      'content/events.json',
      preview,
      previewData,
    );

};