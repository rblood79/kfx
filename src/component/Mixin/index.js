import { useEffect, useState, } from 'react';
import _ from 'lodash';

export function getColor(percent, start, end) {
    var a = percent / 100,
        b = (end - start) * a,
        c = b + start;
    return 'hsl(' + c + ', 60%, 48%)';
}

export function byKeys(obj, keys = []) {
    const filtered = {}
    keys.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            filtered[key] = obj[key]
        }
    })
    return filtered
}

export function useData(arr, num, checkList) {
    const [data, setData] = useState({
        data: undefined
    });
    const customizer = ((obj, src) => {
        if (obj === 'N') {
            return 0;
        } else {
            wAverage += src;
        };
    });
    let wAverage = 0;
    useEffect(() => {
        const keyArray = _.keys(arr[num].기준정보);
        const weight = arr[num].가중치;
        const used = _.cloneDeep(checkList);
        const weightFix = _.mergeWith(used, weight, customizer);
        const lists = _.cloneDeep(arr[num].호수추천);
        _.each(lists, (obj) => {
            let valueSum = 0;
            _.map(obj, (v, k) => {
                const findKey = keyArray.find(element => element === k);
                if (findKey) {
                    valueSum += (v * weightFix[k])
                }
            })
            obj.TOTAL = Number((valueSum / wAverage).toFixed(2));
        });

        const temp = _.sortBy(lists, 'TOTAL').reverse();
        setData({
            data: temp,
        });
    }, [arr, num, checkList, wAverage,]);
    return data;
}

export function useMove(type, count, grid, position) {
    const [move, setMove] = useState({
        x: 0,
    });
    useEffect(() => {
        let _x = 0;
        if (type === 'list') {
            _x = Math.round(position.x - ((grid.width + grid.gap) * count) - (grid.width * 0.5))
            //} else if (data.length > 15 && !base) {
        } else {
            _x = Math.round(position.x - ((grid.width + grid.gap) * count))
        };
        setMove({
            x: _x,
        });
    }, [type, count, grid, position]);
    return move;
}

export function usePosition(target, type, size) {
    const [position, setPosition] = useState({
        x: 0,
    });
    useEffect(() => {
        if (target.current === null) {
            return position;
        }
        setPosition({
            x: type === 'list' ? Math.round(target.current.clientWidth * 0.5) : 0,
        });
    }, [target, type, size,]);
    return position;
}

export function useGridNum(target, total, type) {
    const [gridNum, setGridNum] = useState({
        col: undefined,
        row: undefined,
        end: undefined,
        gap: undefined,
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        if (!total) {
            return gridNum;
        }
        const targetWidth = Math.round(target.current.clientWidth);
        const count = Math.floor(targetWidth / 360);
        
        let _row = 1;
        let _col = total;
        let _end = total - 1;
        let _gap = 96;

        let _width = type === 'list' ? 360 : Math.round((targetWidth - (16 * (count - 1))) / count);
        //let _width = 360;
        let _height = 160;

        let rowNum = Math.round(targetWidth / _width);
        let colNum = Math.ceil(total / rowNum);
        let colMin = Math.min(colNum, 3)

        if (type === 'grid') {
            if (colNum > 3) {
                _row = colMin;
                _col = Math.ceil(total / _row);
            } else {
                _row = colMin;
                _col = rowNum;
            };
            _gap = 16;
            _end = _col - Math.round(targetWidth / _width);
        };
        setGridNum({
            col: _col,
            row: _row,
            end: _end,
            gap: _gap,
            width: _width,
            height: _height,
        });
    }, [total, type,]);
    return gridNum;
}

/*export function useGridNum(target, total, type, setWidth) {
    const [gridNum, setGridNum] = useState({
        col: undefined,
        row: undefined,
        end: undefined,
        gap: undefined,
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        if (!total) {
            return gridNum;
        };
        const targetWidth = Math.round(target.current.clientWidth);
        const count = Math.floor(targetWidth / 360);

        let _row = 1;
        let _col = total;
        let _end = total - 1;
        let _gap = 96;
        let _width = Math.round((targetWidth - (16 * (count - 1))) / count);
        let _height = 160;

        let rowNum = Math.round(targetWidth / _width);
        let colNum = Math.ceil(total / rowNum);
        let colMin = Math.min(colNum, 3);
        
        if (type === 'grid') {
            if (colNum > 3) {
                _row = colMin;
                _col = Math.ceil(total / _row);
            } else {
                _row = colMin;
                _col = rowNum;
            };
            _gap = 16;
            _end = _col - Math.round(targetWidth / _width);
        };
        setWidth(_width)
        setGridNum({
            col: _col,
            row: _row,
            end: _end,
            gap: _gap,
            width: _width,
            height: _height,
        });
    }, [total, type,]);
    return gridNum;
}*/

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export function shuffle(dataSet) {
    const array = dataSet.slice();
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}