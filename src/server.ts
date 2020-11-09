import { env } from 'process';
import APP from './app';
import {dotEnv} from './utils/env';

APP.listen(dotEnv.PORT, () => {
    console.log("Server listening on port: " + dotEnv.PORT);
});