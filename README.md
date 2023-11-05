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

- about.astroの変換にて、build後 `docs/about/index.html`へ出力されるが、埋め込みCSSのURLが修正されず、URLのパスが誤った状態になる。  
    - `astro-relative-links`は感知しない様子。
    - 絶対パスを設定。画像は `public`に配置して対応。

## OGPカードが表示されない

- metaタグのOGPが機能していない。
    - metaタグを追加して対応中。

## 404ページの画像が表示されない場合がある

- 404ページの画像・Homeリンク画像が表示されない場合がある。
    - 二階層以上下の存在しないページを参照しようとすると発生。
    - 404ならびに関連コンポーネントのパス指定を絶対パスで設定して対応。

## 404ページのHomeボタンからホームに戻れない場合がある

- 404ページのHomeリンクからホームに戻れない場合がある。
    - 二階層以上下の存在しないページを参照しようとすると発生。
    - Homeリンクを絶対パスで指定して対応。
