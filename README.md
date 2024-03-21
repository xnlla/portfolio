# N//A 

Welcome to source code!  
This is [@NllA.uk](https://bsky.app/profile/nlla.uk)(X.com -> leaved)'s website [N//A.uk](https://nlla.uk/) source code.

## How it builded?

This site is build by Astro.js.

### Setup 

Lauch on ubuntu 22.04 (on Hyper-V windows11)
```sh
npm install
```

build on docker 
```sh
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 4321:4321 -it node:18.17.1 /bin/bash
npm install
```

### Build

Start dev server for debugging.
```sh
npm run dev
```

SSR build.
```sh
npm run build
```

### Deploy

This site is powerd by Cloudflare pages.

### Convenience tools

`convertimgs.sh` helps .png on repository compress by pngquant.
```sh
./convertimgs.sh
```

`convertcard.sh` helps images resize OGP card.
```sh
./convertcard.sh <Image path, output to public/cards/>
```

`putshape02.sh` is downloader `shape02` font customized by [@NllA.uk](https://bsky.app/profile/nlla.uk) (X.com -> leaved)
```sh
./putshape02.sh
```