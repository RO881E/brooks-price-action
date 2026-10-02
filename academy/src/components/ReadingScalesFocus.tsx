import { ChartFocusFrame, type ChartContent } from './ChartFocusFrame';
import { ScaleChart } from './ReadingScalesCharts';
import { scaleDescriptions } from './ReadingScalesDescriptions';
export function ScalesWithFocus(props:ChartContent){
 return <ChartFocusFrame {...props} Chart={ScaleChart} description={scaleDescriptions[props.scenario as keyof typeof scaleDescriptions]}/>;
}
