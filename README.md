README.md
# 管理方法  

## astroのセットアップ
- nodeのバージョンはCloudflareと合わせること。
```sh
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 80:4321 -it node:18.17.1 npm install
```

## astroの実行方法

環境設定値を`.env.template`に沿って作成する。

node.jsコンテナを起動
- nodeのバージョンはCloudflareと合わせ18を指定。
```sh
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 80:4321 -it node:18.17.1 /bin/bash
```

nodejs実行方法
```sh
# 仮想DOM実行(astro SSRモード起動)
npm run dev
# 静的サイトジェネレート(astro SSG build)
npm run build
```

## デプロイ方法

Cloudflareで自動でビルドされるため、サーバへのアップロードは不要。