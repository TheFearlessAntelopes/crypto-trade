export class ChartOptions {
    title: { text: string };
    series: [{
        name: string,
        data: number[][],
        tooltip: {
            valueDecimals: number
        }
    }];
}
