const util = require('util');
const path = require('path');
const fs = require('fs');

const run = async () => {
  const root = path.resolve('./');
  const readFile = util.promisify(fs.readFile);
  const writeFile = util.promisify(fs.writeFile);

  console.log('Packager: STARTING ... ');

  const data = await readFile(path.join(root, 'package.json'));
  const { version, name } = JSON.parse(data.toString());

  const UPLOAD_ARTIFACT = `${name.replace('@', '').replace('/', '-')}-${version}.tgz`;
  console.log('Packager: publish.json artifact ', UPLOAD_ARTIFACT);

  const publish = {
    artifacts: [
      {
        UPLOAD_ARTIFACT,
      },
    ],
  };

  await writeFile(path.join(root, 'publish.json'), JSON.stringify(publish, null, 2));

  console.log('Packager: DONE');
};

run();
