import moduleAlias from 'module-alias/register';
import path from 'path';

const { PORT, NODE_ENV } = process.env;
if(NODE_ENV === 'production') {
  moduleAlias.addAliases({'@': __dirname, '@data': path.join(__dirname, '../data')});
}

import express  from 'express';
import * as Sentry from '@Sentry/node';

import { ErrorMiddleware } from '@middleware';