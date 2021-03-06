
import React, { useRef, useEffect, useState } from 'react';
import _ from 'lodash';
import { getColor } from '../Mixin'

const App = (props) => {
    const canvasRef = useRef(null);
    const timeout = useRef(null);
    //
    const [canvas, setCanvas] = useState(null)
    const [context, setContext] = useState(null)
    const item = props.item;
    const aver = props.aver || [0, 0, 0, 0];
    const total = props.total;
    const def = Object.keys(aver).map(key => ({ key, value: aver[key] }));
    const now = Object.keys(item).map(key => ({ key, value: item[key] }));
    //
    const fillColor = getColor(total, 0, 240, 0.48);
    const strokeColor = getColor(total, 0, 240, 1);

    const width = Math.round(props.size * 1.414);
    const height = width - 144;//props.size - 16;
    const wCenter = width * 0.5;
    const hCenter = height * 0.5;
    const size = 20;
    const FPS = 60;
    const duration = 20;

    useEffect(() => {
        setCanvas(canvasRef.current);
        canvas && setContext(canvas.getContext('2d'));
        const curArr = [props.cur];
        const startArr = [props.cur];
        const endArr = [Object.keys(item).map(key => (item[key]))];
        const items = [def, now];
        //
        let complete = true;
        let delta;
        //
        const base = () => {
            context.strokeStyle = "#ccc";  // 선 색깔
            context.lineJoin = 'round';	// 선 끄트머리(?)
            context.lineWidth = 1;		// 선 굵기
            context.shadowBlur = 0;
            //세로
            context.beginPath();
            context.moveTo(wCenter, size);
            context.lineTo(wCenter, height - size);
            //가로
            context.moveTo(wCenter - (height * 0.5) + 20, hCenter);
            context.lineTo(wCenter + (height * 0.5) - 20, hCenter);
            context.closePath();
            //
            context.stroke();
            //
            let ss = ((height / 2) - size) / 5;
            let polygonPoints = [
                wCenter, hCenter - ss * 5, // 0
                wCenter + ss * 5, hCenter, // 1
                wCenter, hCenter + ss * 5, // 2
                wCenter - ss * 5, hCenter, // 3
            ];
            context.fillPolygon(polygonPoints, 'rgba(0,0,0,0.0)', '#a4a4a4');

            context.stroke();

            for (let i = 0; i < 5; i++) {
                const inSize = ss * i;
                let polygonPoints = [
                    wCenter, hCenter - inSize,
                    wCenter + inSize, hCenter,
                    wCenter, hCenter + inSize,
                    wCenter - inSize, hCenter,
                ];
                context.fillPolygon(polygonPoints, 'rgba(0,0,0,0)', '#dedede');
            }
            context.font = '400 12px Noto Sans KR';
            context.textAlign = 'center';
            context.textBaseline = 'top';
            context.fillStyle = '#898989';
            context.shadowBlur = 0;
            context.fillText(now[0].key, wCenter, 4);

            context.textAlign = 'left';
            context.textBaseline = 'middle';
            context.fillText(now[1].key, wCenter + (height * 0.5) - 16, hCenter);

            context.textAlign = 'center';
            context.textBaseline = 'bottom';
            context.fillText(now[2].key, wCenter, height - 4);

            context.textAlign = 'right';
            context.textBaseline = 'middle';
            context.fillText(now[3].key, wCenter - (height * 0.5) + 16, hCenter);
        }
        const draw = (arr) => {
            context.clearRect(0, 0, width, height);
            const ss = ((height / 2) - size) / 100;
            const setArray = [
                { stroke: 'rgba(0,0,0,0.16)', fill: 'rgba(0,0,0,0.16)', width: 1, shadow: 0 },
                { stroke: 'rgba(0,0,0,0.24)', fill: 'rgba(0,0,0,0.24)', width: 0.5, shadow: 0 },
            ]
            base();

            _.map(items, (item, i) => {
                let polygonPoints = [];
                if (i === 0) {
                    polygonPoints = [
                        wCenter, hCenter - ss * item[0].value,
                        wCenter + ss * item[1].value, hCenter,
                        wCenter, hCenter + ss * item[2].value,
                        wCenter - ss * item[3].value, hCenter,
                    ];
                    context.fillPolygon(polygonPoints,
                        setArray[i].fill,
                        setArray[i].stroke,
                        setArray[i].width,
                        setArray[i].shadow,
                    );
                } else {
                    /*polygonPoints = [
                        wCenter, hCenter - ss * arr[0],
                        wCenter + ss * arr[1], hCenter,
                        wCenter, hCenter + ss * arr[2],
                        wCenter - ss * arr[3], hCenter,
                    ];*/

                    polygonPoints = [
                        wCenter, hCenter,
                        wCenter + ss * arr[1], hCenter,
                        wCenter, hCenter - ss * arr[0],
                    ];
                    context.fillPolygon(polygonPoints,
                        getColor(total, 0, 240, 0.5),
                        setArray[i].stroke,
                        setArray[i].width,
                        setArray[i].shadow,
                    );

                    polygonPoints = [
                        wCenter, hCenter,
                        wCenter + ss * arr[1], hCenter,
                        wCenter, hCenter + ss * arr[2],
                    ];
                    context.fillPolygon(polygonPoints,
                        getColor(total, 0, 240, 0.6),
                        setArray[i].stroke,
                        setArray[i].width,
                        setArray[i].shadow,
                    );

                    polygonPoints = [
                        wCenter, hCenter,
                        wCenter, hCenter + ss * arr[2],
                        wCenter - ss * arr[3], hCenter,
                    ];
                    context.fillPolygon(polygonPoints,
                        getColor(total, 0, 240, 0.8),
                        setArray[i].stroke,
                        setArray[i].width,
                        setArray[i].shadow,
                    );

                    polygonPoints = [
                        wCenter, hCenter,
                        wCenter, hCenter - ss * arr[0],
                        wCenter - ss * arr[3], hCenter,
                    ];
                    context.fillPolygon(polygonPoints,
                        getColor(total, 0, 240, 0.6),
                        setArray[i].stroke,
                        setArray[i].width,
                        setArray[i].shadow,
                    );

                }
                /*context.fillPolygon(polygonPoints,
                    setArray[i].fill,
                    setArray[i].stroke,
                    setArray[i].width,
                    setArray[i].shadow,
                );*/
                if (i > 0 && props.numView) {
                    context.font = '500 12px GmarketSans';
                    context.textAlign = 'center';
                    context.textBaseline = arr[0] < 33 ? 'bottom' : 'top';
                    context.fillStyle = '#343434';
                    context.fillText(arr[0].toFixed(0), wCenter, hCenter + (arr[0] < 33 ? -4 : 8) - ss * arr[0]);

                    context.textBaseline = 'middle';
                    context.textAlign = arr[1] < 33 ? 'left' : 'right';
                    context.fillText(arr[1].toFixed(0), wCenter - (arr[1] < 33 ? -4 : 8) + ss * arr[1], hCenter);

                    context.textBaseline = arr[2] < 33 ? 'top' : 'bottom';
                    context.textAlign = 'center';
                    context.fillText(arr[2].toFixed(0), wCenter, hCenter - (arr[2] < 33 ? -4 : 8) + ss * arr[2]);

                    context.textBaseline = 'middle';
                    context.textAlign = arr[3] < 33 ? 'right' : 'left';
                    context.fillText(arr[3].toFixed(0), wCenter + (arr[3] < 33 ? -4 : 8) - ss * arr[3], hCenter);
                }
            })
        }
        const loop = () => {
            for (let i = 0; i < endArr.length; i += 1) {
                for (let t = 0; t < endArr[i].length; t += 1) {
                    delta = (endArr[i][t] - startArr[i][t]) / duration;
                    curArr[i][t] += delta;
                    if (delta) {
                        complete = false;
                    };
                };
            };
            //
            let temp0 = endArr.length - 1;
            let temp1 = endArr[temp0].length - 1;

            if (Math.round(endArr[temp0][temp1] * 10) / 10 === Math.round(startArr[temp0][temp1] * 10) / 10) {
                complete = true;
            };
            if (complete) {
                draw(endArr[0]);
                clearTimeout(timeout.current);
                //cancelAnimationFrame(loop);
            } else {
                draw(curArr[0])
                timeout.current = setTimeout(() => { loop() }, FPS / duration);
                //requestAnimationFrame(loop);

            };
        };
        if (context) {
            clearTimeout(timeout.current);
            loop();
            //requestAnimationFrame(loop);
        }
    }, [canvas, context, item, fillColor, hCenter, now, strokeColor, wCenter, def, total, props.cur, props.numView, height, width, props.size])

    return (
        <canvas ref={canvasRef} className="canvas" width={width} height={height} />
    );
}

export default App;

CanvasRenderingContext2D.prototype.fillPolygon = function (points, fillColor, strokeColor, lineWidth, shadow) {
    if (points.length <= 0) return;
    this.strokeStyle = strokeColor;  // 선 색깔
    this.lineJoin = 'round';	// 선 끄트머리(?)
    this.lineWidth = lineWidth || .5;		// 선 굵기
    this.fillStyle = fillColor;

    this.beginPath();
    this.moveTo(points[0], points[1]);
    for (let i = 2; i < points.length - 1; i += 2) {
        this.lineTo(points[i], points[i + 1]);
    }
    this.shadowColor = fillColor;
    this.shadowBlur = shadow || 0;
    this.closePath();
    this.stroke();
    this.fill();
}