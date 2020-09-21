import Head from 'next/head';

import { usePlugin, useCMS, usePlugins } from 'tinacms';
import { useGithubJsonForm, useGithubToolbarPlugins, useGithubMarkdownForm } from 'react-tinacms-github';
import { InlineForm, InlineTextField, InlineTextarea, InlineText, InlineImage } from 'react-tinacms-inline';
import { HtmlFieldPlugin, MarkdownFieldPlugin } from 'react-tinacms-editor'
import { Parallax, Background } from 'react-parallax';
import ReactMarkdown from 'react-markdown'

import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { GetStaticProps } from 'next';

import { InlineWysiwyg } from 'react-tinacms-editor'

export default function Home({ file }) {
  const formOptions = {
    label: 'Blog Post',
    fields: [
      {
        name: 'body',
        component: 'html',
      },
    ],
  };
  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugins([form, MarkdownFieldPlugin, HtmlFieldPlugin]);

  useGithubToolbarPlugins();

  return (

    <InlineForm form={form}>
      <Head>
          <title>PSGS</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous" />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet" />
      </Head>

      <html style={{
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
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
            <li className="nav-item">
              <a className="nav-link" href="#">By Laws</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="h-25 border-white mr-4 ml-4">
        <Parallax
              blur={4}
              bgImage="/images/second.png"
              strength={400}
          >
              <div style={{ height: '250px' }} className="d-flex justify-content-center">
                <div className="align-self-center">
                    <h3 className="display-4 mb-4 text-center">
                      About
                    </h3>
                </div>
              </div>
        </Parallax>

        <div className="mt-5">
            <div className="d-flex justify-content-center">
              <div className="lead w-75 align-self-center">
                <InlineWysiwyg 
                    name="body" 
                    format="markdown" 
                    imageProps={{
                      parse: (filename) => `images/about/${filename}`,
                      directory: 'public/images/about/',
                    }}
                    sticky
                >
                  <ReactMarkdown source={data.body} />
                </InlineWysiwyg>
              </div>
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
