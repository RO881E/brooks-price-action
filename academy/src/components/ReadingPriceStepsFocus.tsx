import { ChartFocusFrame, type ChartContent } from './ChartFocusFrame';
import { PriceStepChart } from './ReadingPriceStepsCharts';
import { priceStepDescriptions } from './ReadingPriceStepsDescriptions';
export function PriceStepsWithFocus(props:ChartContent) {
  return <ChartFocusFrame {...props} Chart={PriceStepChart} description={priceStepDescriptions[props.scenario as keyof typeof priceStepDescriptions]}/>;
}
