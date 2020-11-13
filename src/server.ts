import https from 'https';
import fs from 'fs';
import path from 'path';

import APP from './app';
import {dotEnv} from './utils/env';

const httpsCredentials = {
    key: fs.readFileSync(path.resolve(__dirname, "../certificates/key.pem")),
    cert: fs.readFileSync(path.resolve(__dirname, "../certificates/cert.pem"))
}

https.createServer(httpsCredentials, APP).listen(dotEnv.PORT, () => {
    console.log("Server listening on port: " + dotEnv.PORT);
});