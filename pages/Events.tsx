
import { InlineForm } from 'react-tinacms-inline';

import Setup from '../helpers/setup';
import Header from '../components/Head';
import NavBar from '../components/NavBar';
import ParallaxWrapper from '../components/Parallax';
import Content from '../components/Content';
import { GetStaticProps } from 'next';
import SetupContent from '../helpers/content';
import Footer from '../components/Footer';
import { useCMS } from 'tinacms';
import { EditLink } from './_app';

export default function Home({ file }) {
  const pageName = 'Events';
  const bgImage = '/images/forth.jpg';

  const {form, data} = Setup(file);

  const cms = useCMS();

  return (
    <html>
        <Header pageName={pageName} />

        <NavBar pageName={pageName} />

        <ParallaxWrapper pageName={pageName} bgImage={bgImage} />

        <InlineForm form={form}>
            <Content data={data} />
        </InlineForm>

        <div className="text-center">
          <EditLink cms={cms} />
        </div>

        <Footer />
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