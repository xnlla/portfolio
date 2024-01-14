import React, { useState, useEffect } from "react";
import here_png from "./images/here.png"
import here_webp from "./images/here.webp"
import none_png from "./images/none.png"
import none_webp from "./images/none.webp"
import eyes_png from "./images/eyes.png"
import eyes_webp from "./images/eyes.webp"
import watch_png from "./images/watch.png"
import watch_webp from "./images/watch.webp"

import noise01_png from "./images/noise01.png"
import noise01_webp from "./images/noise01.webp"
import noise02_png from "./images/noise02.webp"
import noise02_webp from "./images/noise02.webp"

type url = {
    png: ImageMetadata | null,
    webp: ImageMetadata | null,
    weight: number,
}
const urls: url[] = [
    { png: none_png, webp: none_webp, weight: 60 },
    { png: here_png, webp: here_webp, weight: 30 },
    { png: eyes_png, webp: eyes_webp, weight: 10 },
    { png: watch_png, webp: watch_webp, weight: 1 },
]
const noises: url[] = [
    { png: noise01_png, webp: noise01_webp, weight: 0 },
    { png: noise02_png, webp: noise02_webp, weight: 0 },
]


let totalweight: number = 0
urls.forEach((value) => {
    totalweight += value.weight;
})

export const Randomimg = () => {
    const choose = (): url => {
        const random = Math.round(Math.random() * totalweight)
        let current_value = 0
        for (let item of urls) {
            current_value += item.weight
            if (current_value >= random) {
                return item;
            }
        }
        return {
            png: null,
            webp: null,
            weight: -1,
        }
    }
    const [img, setImg] = useState<url>(noises[1])
    const imgchanger = () => {
        const pageInterval = 200
        for (let i = 0; i < noises.length; i++) {
            setTimeout(() => { setImg(noises[i]) }, i * pageInterval)
        }
        setTimeout(() => { setImg(choose()) }, noises.length * pageInterval);
    }

    useEffect(() => {
        imgchanger()
        setInterval(imgchanger, 10000)
    }, [])
    return (
        <React.StrictMode>
            <picture>
                <source srcSet={img.webp?.src} type="image/webp" />
                <img src={img.png?.src} decoding="sync" className="mdpreview" />
            </picture>
        </React.StrictMode>
    )
}