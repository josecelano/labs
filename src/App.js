import React, {Component} from 'react';
import Plot from './Plot';
import Title from './Title';
import styles from './app.css';

// Version 1
//function AppWrapper(props) {
//    return (<div className={styles.wrapper}>{props.children}></div>)
//}

// Version 2
const AppWrapper = (props) => {
    return (<div className={styles.wrapper}>{props.children}></div>)
}

class App extends Component { 
    render() {
        return (
            <AppWrapper>
                <Title text="The Weather in Las Palmas"/>
                <Plot
                    xData={this.props.weather.xData}
                    yData={this.props.weather.yData}
                    type="scatter"/>
            </AppWrapper>
        )
    }
}

export default App;