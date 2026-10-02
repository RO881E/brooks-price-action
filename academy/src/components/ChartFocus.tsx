import { ChartFocusFrame, type ChartContent } from './ChartFocusFrame';
import { LearningChart, chartDescription } from './LearningChart';
export function ChartWithFocus(props: ChartContent) {
  return <ChartFocusFrame {...props} Chart={LearningChart} description={chartDescription(props.scenario)} />;
}
