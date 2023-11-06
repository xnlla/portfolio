# portfolio

ポートフォリオ用サイト（Profileサイト）のソースコード

# 実行方法

```
# init
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 4321:4321 -it node:lts npm install
# debug
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 4321:4321 -it node:lts npm run dev
```
