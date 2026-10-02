import { ChartFocusFrame, type ChartContent } from './ChartFocusFrame';
import { TimeframeChart } from './ReadingTimeframesCharts';
import { timeframeDescriptions } from './ReadingTimeframesDescriptions';
export function TimeframesWithFocus(props:ChartContent){
 return <ChartFocusFrame {...props} Chart={TimeframeChart} description={timeframeDescriptions[props.scenario as keyof typeof timeframeDescriptions]}/>;
}
