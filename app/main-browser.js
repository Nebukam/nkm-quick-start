//
// This code will be at the root of the browserify bundle.
// Since it's not a class, it will be executed as soon as the bundle is loaded
// It emulate/compensate for what ElectronApp usually does when run in Electron.
//
//  This obviously assume the execution environement has no node capabilities.
//
//

const U = require(`./js/com/util.js`);
const ENV = require(`./js/com/environment.js`);
const PATH = require(`./js/com/path.js`);

ENV.instance.node = false;
// Prepare the app wrapper BEFORE setting environment infos.
require(`./js/app.js`).instance.Prepare();

var paths = {};

paths.exe = '';
paths[PATH.APP_CONTEXT]='';
paths[PATH.HOME]='';
paths[PATH.APP_DATA]='';
paths[PATH.USER_DATA]='';
paths[PATH.TEMP]='';
paths[PATH.DESKTOP]='';
paths[PATH.DOCUMENTS]='';
paths[PATH.DOWNLOADS]='';
paths[PATH.MUSIC]='';
paths[PATH.PICTURES]='';
paths[PATH.VIDEOS]='';
paths[PATH.LOGS]='';

//
// Bootstrap the environment.
// This will trigger app deployement in the webpage.
//

// TODO : argv should be the parsed URL.

ENV.instance.Bootstrap({ paths:paths, argv:[] });