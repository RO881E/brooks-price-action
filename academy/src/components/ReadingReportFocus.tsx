import { ChartFocusFrame, type ChartContent } from './ChartFocusFrame';
import { ReportChart } from './ReadingReportCharts';
import { reportDescriptions } from './ReadingReportDescriptions';
export function ReportWithFocus(props:ChartContent){return <ChartFocusFrame {...props} Chart={ReportChart} description={reportDescriptions[props.scenario as keyof typeof reportDescriptions]}/>;}
