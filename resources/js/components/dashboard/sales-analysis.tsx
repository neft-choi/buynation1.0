import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ShopIcon } from '../shop/shop-icon';

// Mock 데이터
const chartData = [
    { date: '25.12.01', salesVolume: 186, revenue: 800 },
    { date: '25.12.03', salesVolume: 198, revenue: 920 },
    { date: '25.12.04', salesVolume: 205, revenue: 880 },
    { date: '25.12.05', salesVolume: 214, revenue: 950 },
    { date: '25.12.06', salesVolume: 143, revenue: 580 },
    { date: '25.12.07', salesVolume: 172, revenue: 780 },
    { date: '25.12.08', salesVolume: 245, revenue: 1150 },
    { date: '25.12.09', salesVolume: 258, revenue: 1220 },
    { date: '25.12.10', salesVolume: 267, revenue: 1280 },
    { date: '25.12.11', salesVolume: 272, revenue: 1350 },
    { date: '25.12.12', salesVolume: 265, revenue: 1420 },
    { date: '25.12.13', salesVolume: 188, revenue: 2010 },
    { date: '25.12.14', salesVolume: 285, revenue: 1550 },
    { date: '25.12.15', salesVolume: 292, revenue: 1220 },
];

// 차트 설정 (label, 색상)
const chartConfig: ChartConfig = {
    salesVolume: {
        label: '판매량',
        color: '#2563eb',
    },
    revenue: {
        label: '매출',
        color: '#FF7E00',
    },
};

export function SalesAnalysis() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="font-semibold">판매분석</div>
                </div>
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
                    <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />

                        {/* X축 */}
                        <XAxis dataKey="date" tickLine={true} tickMargin={10} axisLine={true} tick={{ fontSize: 12 }} />

                        {/* 왼쪽 Y축 (판매량) */}
                        <YAxis
                            yAxisId="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            orientation="left"
                            tickFormatter={(value) => `${value}`}
                        />

                        {/* 오른쪽 Y축 (매출) */}
                        <YAxis
                            yAxisId="right"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            orientation="right"
                            tickFormatter={(value) => `${value.toLocaleString()}`}
                        />

                        {/* 툴팁 */}
                        <ChartTooltip cursor={true} content={<ChartTooltipContent indicator="line" />} />

                        {/* 영역 차트들 */}
                        <Area
                            yAxisId="left"
                            dataKey="salesVolume"
                            type="monotone"
                            stroke="var(--color-salesVolume)"
                            fill="none"
                            name="판매량"
                        />
                        <Area
                            yAxisId="right"
                            dataKey="revenue"
                            type="monotone"
                            stroke="var(--color-revenue)"
                            fill="none"
                            name="매출"
                        />

                        {/* 범례 */}
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
