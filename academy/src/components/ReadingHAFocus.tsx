import { ChartFocusFrame, type ChartContent } from './ChartFocusFrame';
import { HAChart } from './ReadingHACharts';
import { haDescriptions } from './ReadingHADescriptions';
export function HAWithFocus(props:ChartContent){
 return <ChartFocusFrame {...props} Chart={HAChart} description={haDescriptions[props.scenario as keyof typeof haDescriptions]}/>;
}
