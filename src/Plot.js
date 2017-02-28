/**
 * This component should render a plot with Plotly, taking these three props:
 *
 * - xData: the data to be rendered on the x-axis as an array
 * - yData: The data to be rendered on the y-axis as an array
 * - type:  The type of plot we want Plotly to render
 *
 * To see an example of how you should use Plotly look at the index.html file in the public/ folder.
 * (and feel free to delete the code in there)
 */
import React, {Component} from 'react';
import Plotly from 'plotly.js/dist/plotly.js';
import styles from './plot.css';

class Plot extends Component {
    componentDidMount() {
        this.drawPlot();
    }

    componentDidUpdate() {
        this.drawPlot();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.xData !== nextProps.xData || this.props.yData !== nextProps.yData;
    }

    drawPlot = () => {
        Plotly.newPlot(this.div, [
            {
                x: this.props.xData,
                y: this.props.yData,
                type: this.props.type
            }
        ], {
            margin: {
                t: 0,
                r: 0,
                l: 30
            },
            xaxis: {
                gridcolor: 'transparent'
            }
        }, {displayModeBar: false});
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div ref={comp => this.div = comp}/>
            </div>
        )
    }
}

export default Plot;
