#!/bin/bash
cd $(dirname $0)

apt list --installed 2>/dev/null | grep imagemagick >/dev/null
[[ $? -ne 0 ]] && sudo apt install imagemagick -y

CARDS_SRC="./public/cards"
for filepath in "$@";do 
    echo "$filepath" | grep "images/" 
    [[ $? -ne 0 ]] && continue;
    FNAME=$(basename $filepath)
    if [[ ! -e "${CARDS_SRC}/${FNAME}" ]];then
        echo "create card of $filepath";
            convert "$filepath" -background white -alpha remove -alpha off -resize 1200x1200 - \
            | convert - -crop 1200x600+0+200 "${CARDS_SRC}/${FNAME}"
            pngquant --ext .png --force "${CARDS_SRC}/${FNAME}"
    else
        echo "already exists.. ${CARDS_SRC}/${FNAME}"
    fi
done