# portfolio

ポートフォリオ用サイト（Profileサイト）のソースコード

# 実行方法

```
# init
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 4321:4321 -it node:lts npm install
# debug
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 4321:4321 -it node:lts npm run dev
```

# 現状の問題

## CSS中のリンクがbuildで変換処理されない

about.astroの変換にて、build後 `docs/about/index.html`へ出力されるが、埋め込みCSSのURLが修正されず、URLのパスが誤った状態になる。
→絶対パスを設定。画像は `public`に配置して対応。