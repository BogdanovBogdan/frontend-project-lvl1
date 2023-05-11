#!/usr/bin/env node

import greeting from './cli.js';

export default function gameWrapper(game) {
  greeting();
  game();
}
