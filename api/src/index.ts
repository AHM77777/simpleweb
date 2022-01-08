import 'reflect-metadata';
import * as bodyParser from 'body-parser';

import * as e from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import { resolve } from 'path';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

import './controllers/github.controller';

import GithubService from './services/github.service';

dotenv.config({
  path: resolve(__dirname, '.env')
});

const container: Container = new Container();
container.bind<GithubService>(GithubService).toSelf();

// Bind ENV vars into container
const env_keys: Array<string> = Object.keys(process.env);
env_keys.map((key: string) => {
  const match = key.match(/^APP_/g);
  if (match && match.length > 0) {
    container.bind(key).toConstantValue(process.env[key]);

    // Remove var from general environment since it was already loaded in the container
    delete process.env[key];
  }
});

const server: InversifyExpressServer = new InversifyExpressServer(container);
server.setConfig((app: any) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(cors({
    origin: 'http://localhost:8080'
  }));
});

const app: e.Application = server.build();
app.listen(3000);
console.log('Starting application in port 3000');
