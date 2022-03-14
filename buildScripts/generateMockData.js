/*
Generates mock data for local development
No need to point to an API in development
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

// Extend JSFaker with custom fakers
jsf.extend('faker', () => require('faker'));
const json = JSON.stringify(jsf.generate(schema), null, 2);

fs.writeFile('./src/api/db.json', json, err => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green('Mock data generated.'));
  }
});
