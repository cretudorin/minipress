/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Document, {
  Html, Main, NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}