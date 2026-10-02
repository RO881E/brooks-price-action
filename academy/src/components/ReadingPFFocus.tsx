import { ChartFocusFrame, type ChartContent } from './ChartFocusFrame';
import { PFChart } from './ReadingPFCharts';
import { pfDescriptions } from './ReadingPFDescriptions';
export function PFWithFocus(props:ChartContent){
 return <ChartFocusFrame {...props} Chart={PFChart} description={pfDescriptions[props.scenario as keyof typeof pfDescriptions]}/>;
}
