'use strict';

const fs =  require('fs');
const path = require('path');

module.exports = () => {
  const filePath = path.resolve(__dirname, './db.json');
  const dbFileContent = fs.readFileSync(filePath);
  return JSON.parse(dbFileContent);
}
