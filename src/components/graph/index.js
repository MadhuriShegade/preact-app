import { Component, h } from 'preact';

import style from "./style";

class Graph extends Component {
    getMinX() {
        const { data } = this.props;
        console.log("Minx111", data[0].x);
        return data[0].x;
    }
    getMaxX() {
        const { data } = this.props;
        console.log("Max x222", data[data.length - 1].x);
        return data[data.length - 1].x;
    }
    // GET MAX & MIN Y
    getMinY() {
        const { data } = this.props;
        console.log("MinY" + data.reduce((min, p) => p.y < min ? p.y : min, data[0].y))
        return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
    }
    getMaxY() {
        const { data } = this.props;
        console.log("MaxY" + data.reduce((max, p) => p.y > max ? p.y : max, data[0].y))
        return data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
    }

    getSvgX(x) {
        const { svgWidth } = this.props;
        // console.log("svgx", (x / this.getMaxX() * svgWidth))
        return ((x / this.getMaxX() * svgWidth));
    }
    getSvgY(y) {
        const { svgHeight } = this.props;
        //  console.log("svgy",svgHeight - (y / this.getMaxY() * svgHeight))
        return (svgHeight - (y / this.getMaxY() * svgHeight));
    }

    makePolygon() {
        const { data, color } = this.props;
        let pathD = " ";
        var r = data.map((point, i) => {
            var d = this.getSvgX(point.x) + "," + this.getSvgY(point.y) + " ";
            console.log("d11111", d);
            pathD = pathD + ' ' + d;
            //        console.log(typeof(d));
            return i;
        });
        //     console.log(pathD);
        return (
            <polygon points={pathD}
                stroke="blue" />
        );
    }

    render() {
        const { svgHeight, svgWidth } = this.props;
        return (
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} >
                {this.makePolygon()}
                <line x1="0" y1="0" x2="315" y2="0" stroke="black" />
                <line x1="0" y1="30" x2="315" y2="30" stroke="black" />
                <line x1="0" y1="60" x2="315" y2="60" stroke="black" />
                <line x1="0" y1="90" x2="315" y2="90" stroke="black" />
                <line x1="0" y1="120" x2="315" y2="120" stroke="black" />
                <line x1="0" y1="150" x2="315" y2="150" stroke="black" />
                <line
                    x1="0" y1="150"
                    x2="0" y2="0" stroke="black" />
            </svg>
        );
    }
}

Graph.defaultProps = {
    data: [],
    color: '#2196F3',
    svgHeight: 160,
    svgWidth: 315
}

export default Graph;