#!/usr/bin/env node

import * as yargs from 'yargs'
import { watch } from '../server'
import scaffold from './commands/scaffold'

function run() {
  yargs
    .usage('Usage: $0 <command> [options]')
    .command(
      'dev',
      'Start the server in dev mode',
      // @ts-ignore
      () => {},
      () => watch(),
    )
    .command(
      'scaffold',
      'Scaffold a new GraphQL type',
      () => {},
      () => scaffold(),
    )
    .help('h')
    .alias('h', 'help')
    .version().argv
}

// Only call run when running from CLI, not when included for tests
if (require.main === module) {
  run()
}
