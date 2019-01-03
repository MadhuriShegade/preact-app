import {
    Component,
    h,
} from 'preact';

import Graph from '../../components/graph';
import style from './style';

export default class Svg_Graph extends Component {

    render() {
        return ( <
            div class = {
                style.graph
            } >
            <
            h3 > GRAPH < /h3> <
            div class = {
                style.svg
            } >
            <
            Graph data = {
                [{
                    x: 0,
                    y: 500
                }, {
                    x: 40,
                    y: 300
                }, {
                    x: 60,
                    y: 800
                }, {
                    x: 80,
                    y: 1000
                }]
            } > < /Graph> < /
            div > <
            /div>
        );
    }
}









{
    /* <svg viewBox="0 0 315 160" >
    <line x1="20" y1="20" x2="315" y2="20" stroke="black" />
    <line x1="20" y1="50" x2="315" y2="50" stroke="black" />
    <line x1="20" y1="80" x2="315" y2="80" stroke="black" />
    <line x1="20" y1="110" x2="315" y2="110" stroke="black" />
    <line x1="20" y1="140" x2="315" y2="140" stroke="black" />

    <g class={style.textGroup} text-anchor="end"  >
      <text x="19" y="20" alignment-baseline="middle">100%</text>
      <text x="19" y="50" alignment-baseline="middle" >80%</text>
      <text x="19" y="80" alignment-baseline="middle">60%</text>
      <text x="19" y="110" alignment-baseline="middle">40%</text>
      <text x="19" y="140" alignment-baseline="middle">20%</text>
    </g>

    <polygon points="40,140 80,50 120,45 160,60 200,65 240,100 280,140"
      stroke="blue" />

    </svg> */
}


{
    /*  <svg viewBox="0 0 315 160" >
                <line x1="20" y1="20" x2="315" y2="20" stroke="black" />
                <line x1="20" y1="45" x2="315" y2="45" stroke="black" />
                <line x1="20" y1="70" x2="315" y2="70" stroke="black" />
                <line x1="20" y1="95" x2="315" y2="95" stroke="black" />
                <line x1="20" y1="120" x2="315" y2="120" stroke="black" />
                <line x1="20" y1="145" x2="315" y2="145" stroke="black" />


                <g class={style.textGroup} text-anchor="end"  >
                  <text x="19" y="20" alignment-baseline="middle">1000</text>
                  <text x="19" y="45" alignment-baseline="middle" >800</text>
                  <text x="19" y="70" alignment-baseline="middle">600</text>
                  <text x="19" y="95" alignment-baseline="middle">400</text>
                  <text x="19" y="120" alignment-baseline="middle">200</text>
                  <text x="19" y="145" alignment-baseline="middle">0</text>
                </g>

                <polygon points="40,140 80,50 120,45 160,60 200,65 240,100 280,140"
                  stroke="blue" />

              </svg> */
}