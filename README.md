# ipfs-store

This is an [olojs] document store based on IPFS.



## Getting started
Install via npm:

```
npm install @onlabsorg/ipfs-store
```

Create an IPFS store:

```js
const IPFS = require('ipfs-core');
const ipfs = await IPFS.create();

const {IPFSStore} = require('..');
const store = new IPFSStore(ipfs, CID);       // CID is a valid IPFS directory content id
```

Read the IPFS store content:

```js
const source = await store.read('/path/to/doc');    // returns ipfs://<CID>/path/to/doc
const items = await store.list('/path/to/dir');     // returns the array of child names of ipfs://<CID>/path/to/dir/
```

Of course `write`, `delete` and `deleteAll` operations are not allowed, being
the files stored on IPFS read-only. In order to modify an IPFS store, you can
clone it to an olojs [MemoryStore], modify it and add it again to IPFS.

```js
const clone = await store.clone('/');    // you can clone just a subdir if you want
const newCID = await IPFSStore.create(ipfs, clone);
```

> Notice that cloning+adding does not modify the original directory, but it
> creates a new one instead.



## License
This software is released under the [ISC](https://opensource.org/licenses/ISC) 
license.



## Related projects
* [olojs] is a distributed content management system
* [olowiki] is a web interface that allows creating and modifying olojs
  documents
* [stilo] is a command-line interface written in NodeJS that allows you to
  create and mange local olojs document repositories.



[olojs]: https://github.com/onlabsorg/olojs/blob/master/README.md
[js-ipfs]: https://github.com/ipfs/js-ipfs/blob/master/README.md
[olowiki]: https://github.com/onlabsorg/olowiki
[stilo]: https://github.com/onlabsorg/stilo/blob/main/README.md
[MemoryStore]: https://github.com/onlabsorg/olojs/blob/master/docs/api/memory-store.md
