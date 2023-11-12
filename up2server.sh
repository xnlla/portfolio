#!/bin/bash
cd $(dirname $0)
git branch --contains | grep main
[[ $? -ne 0 ]] && echo "mainブランチでのみ実行が許可されます。" && exit 1;

FILELIST=$(pwd)/putlist
PAAS_URL=ftp.lolipop.jp

cd $(dirname $0)/docs
# settings at .netrc

# create filelist
echo "binary" > $FILELIST
echo "prompt" >> $FILELIST

# 二階層までのファイルを全て削除
# 空のディレクトリの処理は出来ないため、あくまでアップロードがメイン
echo "mdel */*" >> $FILELIST
echo "mdel *" >> $FILELIST

for d in `find . -type d`;do
    if [[ $d != "." ]];then
        echo mkdir $d >> $FILELIST;
    fi
    for f in `find $d -maxdepth 1 -type f`;do
        echo put $f >> $FILELIST;
    done 
done
echo put ../.htaccess >> $FILELIST
echo put ../robots.txt >> $FILELIST

ftp -p $PAAS_URL < $FILELIST
rm -f $FILELIST

echo "Complete."