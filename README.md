# Loader Hook issue demonstration

This shows an issue of unknown source when an ES loader hook is run on worker threads.

## Testing

Run `npm install` to install `test-exclude`, then:
```sh
node --experimental-loader=./loader.js test.js
```

Debug messages will be printed to stderr before printing `ok` plus the URL's of `file*.js`
to stdout.

Run the same thing but using the `node` binary built from
https://github.com/nodejs/node/commit/c4f2cf9fd25e76e61712dd1143ced08cfc1d9530 (https://github.com/nodejs/node/pull/31229).
This will show that the process just dies, I'm unable to determine a reason.  I was able to reduce
the issue to just calling `test-exclude` which is used by `@istanbuljs/esm-loader-hook` to
decide if a file gets coverage or not.
