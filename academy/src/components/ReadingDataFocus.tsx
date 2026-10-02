import { ChartFocusFrame, type ChartContent } from './ChartFocusFrame';
import { DataChart } from './ReadingDataCharts';
import { dataDescriptions } from './ReadingDataDescriptions';
export function DataWithFocus(props:ChartContent){
 return <ChartFocusFrame {...props} Chart={DataChart} description={dataDescriptions[props.scenario as keyof typeof dataDescriptions]}/>;
}
