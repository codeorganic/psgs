import Head from 'next/head';

import { usePlugin, useCMS } from 'tinacms';
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github';
import { InlineForm, InlineTextField, InlineTextarea, InlineText } from 'react-tinacms-inline';
import { Parallax, Background } from 'react-parallax';
import { InlineWysiwyg } from 'react-tinacms-editor'

import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { GetStaticProps } from 'next';

export default function Home({ file }) {
   const formOptions = {
       label: 'Home Page',
        fields: [{ name: 'title', component: 'text' }],
  };
  const cms = useCMS();
  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();

  return (

    <InlineForm form={form}>
      <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous" />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet" />
      </Head>

      <html style={{
        fontFamily: "'Cabin', sans-serif"
      }}>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Membership</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="h-25 border-white mr-4 ml-4">
        <Parallax
              blur={2}
              bgImage="https://images.unsplash.com/photo-1566122454526-251a106f7756?auto=format&q=80"
              strength={400}
          >
              <div style={{ height: '500px' }} className="d-flex justify-content-center">
                <div className="align-self-center">
                  <div className="card text-center border rounded" style={{
                    background: 'rgba(255,255,255,.7)',
                    minWidth: '350px',
                    minHeight: '200px',
                  }}>
                    <div className="card-body align-items-center">
                      <h5 className="card-title">
                        <InlineText name="title" />
                      </h5>
                      <div>
                        <hr className="w-25 border border-4 border-dark" />
                      </div>
                      <InlineText name="byline" />
                    </div>
                  </div>
                </div>
              </div>
        </Parallax>

        <div className="text-center mt-5">
          <h3>
            <InlineText name="bodyHeadline" />
          </h3>
            <div className="d-flex justify-content-center">
              <p className="lead w-75 text-center align-self-center">
                <InlineWysiwyg name="body" format="html" >
                  {data.body}
                </InlineWysiwyg>
              </p>
          </div>
        </div>

      </div>


      </html>
    </InlineForm>
  )
}

export const getStaticProps: GetStaticProps = async function({
  preview,
  previewData,
  }) {
    if (preview) {
      return getGithubPreviewProps({
        ...previewData,
        fileRelativePath: 'content/home.json',
        parse: parseJson,
      })
    }
    return {
      props: {
        sourceProvider: null,
        error: null,
        preview: false,
        file: {
          fileRelativePath: 'content/home.json',
          data: (await import('../content/home.json')).default,
        },
      },
    }
  }
