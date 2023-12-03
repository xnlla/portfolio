README.md
# 管理方法  

## astroの実行方法

- astroのセットアップ
```
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 80:4321 -it node:lts npm install
```

- node.jsコンテナを起動
```
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 80:4321 -it node:lts /bin/bash
```

- nodejs実行方法
```
# 仮想DOM実行(astro SSRモード起動)
npm run dev
# 静的サイトジェネレート(astro SSG build)
npm run build
```

## デプロイ方法

Cloudflareで自動でビルドされるため、サーバへのアップロードは不要になった。