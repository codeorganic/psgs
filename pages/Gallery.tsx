
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
import Gallery from 'react-photo-gallery';
import React from 'react';


const photos = [
  {src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x600', width:4, height:3},
  {src: 'https://source.unsplash.com/Dm-qxdynoEc/800x800', width:1, height:1},
  {src: 'https://source.unsplash.com/qDkso9nvCg0/600x800', width:3, height:4},
  {src: 'https://source.unsplash.com/iecJiKe_RNg/600x800', width:3, height:4},
  {src: 'https://source.unsplash.com/epcsn8Ed8kY/600x800', width:3, height:4},
  {src: 'https://source.unsplash.com/NQSWvyVRIJk/800x600', width:4, height:3},
  {src: 'https://source.unsplash.com/zh7GEuORbUw/600x800', width:3, height:4},
  {src: 'https://source.unsplash.com/PpOHJezOalU/800x600', width:4, height:3},
  {src: 'https://source.unsplash.com/I1ASdgphUH4/800x600', width:4, height:3}
];

export default function Home({ file }) {
  const pageName = 'Gallery';
  const bgImage = '/images/forth.jpg';

  const {form, data} = Setup(file);

  const cms = useCMS();

  const [open, setOpen] = React.useState(false);

  return (
    <html>
        <Header pageName={pageName} />

        <NavBar pageName={pageName} />

        <ParallaxWrapper pageName={pageName} bgImage={bgImage} />

        <div className="mb-5"></div>

        <div className="m-5">
          <Gallery photos={photos} />
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
      'content/gallery.json',
      preview,
      previewData,
    );

};