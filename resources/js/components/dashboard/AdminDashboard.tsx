import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ChevronRight, CircleQuestionMark } from 'lucide-react';
import { AdminCardHeader } from './AdminCardHeader';
import { AdminListItem } from './AdminListItem';
import { PaymentSettlement } from './payment-settlement';
import { PremiumSellers } from './premium-sellers';
import { SalesAnalysis } from './sales-analysis';
import { SellerGuide } from './seller-guide';

interface PriceItem {
    label: string;
    value: number;
    hasTooltip: boolean;
    tooltipText?: string;
    showPlus: boolean;
    showUnit: boolean;
}

export function AdminDashboard() {
    // 판매/배송 stats
    const stats = [
        { value: 0, label: '결제완료' },
        { value: 0, label: '상품준비' },
        { value: 0, label: '배송지시' },
        { value: 0, label: '배송중' },
    ];
    // 가격 관리 list
    const priceItems: PriceItem[] = [
        {
            label: '현재 아이템위너가 아닌 상품',
            value: 0,
            hasTooltip: false,
            showPlus: false,
            showUnit: true,
        },
        {
            label: '현재 자동가격조정 상품수',
            value: 0,
            hasTooltip: false,
            showPlus: false,
            showUnit: true,
        },
        {
            label: '최근 7일 자동조정 매출',
            value: 0,
            hasTooltip: true,
            tooltipText: '자동 가격 조정으로 발생한 매출',
            showPlus: true,
            showUnit: false,
        },
        {
            label: '최근 7일 자동조정 판매수',
            value: 0,
            hasTooltip: true,
            tooltipText: '자동 가격 조정으로 발생한 판매수',
            showPlus: true,
            showUnit: true,
        },
    ];

    return (
        <>
            {/* 판매/배송 카드 */}
            <Card>
                <AdminCardHeader
                    title="판매/배송"
                    showChevron={true}
                    subtitle="최근 14일 기준"
                    rightContent="최근 12:34"
                    onRightButtonClick={() => {}}
                />
                <CardContent>
                    <div className="mb-8 grid grid-cols-7 items-end">
                        {stats.map((stat, idx) => (
                            <>
                                {/* 요소 */}
                                <div key={`stat-${idx}`} className="col-span-1 text-center">
                                    <div className="mb-2 text-2xl font-bold">{stat.value}</div>
                                    <div className="text-xs text-gray-600">{stat.label}</div>
                                </div>

                                {/* 화살표 */}
                                {idx < stats.length - 1 && (
                                    <div key={`arrow-${idx}`} className="col-span-1 flex justify-center">
                                        <ChevronRight className="size-5 text-gray-300" />
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* 가격 관리 카드*/}
            <Card>
                <AdminCardHeader
                    title="가격관리"
                    showTooltip={true}
                    tooltipContent="자동 가격 조정 설정 관련 정보"
                    showChevron={true}
                    rightContent="최근 12:34"
                    onRightButtonClick={() => {}}
                />
                <CardContent>
                    {priceItems.map((item) => (
                        <Label key={item.label} className="flex cursor-pointer items-baseline justify-between gap-2 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-700">{item.label}</span>

                                {item.hasTooltip && (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <button className="text-gray-300 hover:text-gray-500">
                                                    <CircleQuestionMark className="size-4 hover:cursor-pointer" />
                                                </button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top">
                                                <p>{item.tooltipText}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                            </div>

                            <div className={`flex items-center gap-1 text-xl text-gray-900 ${item.showPlus ? 'font-light' : 'font-bold'}`}>
                                {item.showPlus && '+'}
                                {item.value}
                                {item.showUnit && <span className="font-bold">개</span>}
                                <ChevronRight className="size-4 text-gray-400" />
                            </div>
                        </Label>
                    ))}
                </CardContent>
            </Card>

            {/* 취소/반품/교환 카드*/}
            <Card>
                <AdminCardHeader
                    title="취소/반품/교환"
                    showChevron={true}
                    subtitle="최근 30일 기준"
                    rightContent="최근 12:34"
                    onRightButtonClick={() => {}}
                />
                <CardContent className="space-y-2">
                    <AdminListItem label="출고중지요청" value={0} />
                    <AdminListItem label="반품접수" value={0} />
                    <AdminListItem label="교환접수" value={0} />
                </CardContent>
            </Card>

            {/* 미답변문의 카드*/}
            <Card>
                <AdminCardHeader title="미답변문의" subtitle="최근 30일 기준" rightContent="최근 12:34" onRightButtonClick={() => {}} />
                <CardContent className="space-y-2">
                    <AdminListItem label="고객센터문의" value={0} />
                    <AdminListItem label="고객문의" value={0} />
                </CardContent>
            </Card>

            {/* 판매분석 카드*/}
            <SalesAnalysis />

            {/* 정산 카드 */}
            <PaymentSettlement />

            {/* 상품관리 카드 */}
            <Card>
                <AdminCardHeader title="상품관리" rightContent="최근 12:34" onRightButtonClick={() => {}} />
                <CardContent className="space-y-2">
                    <AdminListItem label="판매중 상품수" value={0} />
                    <AdminListItem label="임시저장 상품수" value={0} />
                    <AdminListItem label="승인반려 상품수" value={0} />
                    <AdminListItem label="품절 상품수" value={3} />
                </CardContent>
            </Card>

            {/* 판매자접수 카드 */}
            <Card>
                <AdminCardHeader title="판매자접수" showChevron={true} />
                <CardContent className="space-y-2">
                    <AdminListItem label="주문이행" value={100} showStatusIcon={true} />
                    <AdminListItem label="정시배송완료" value={95} showStatusIcon={true} />
                    <AdminListItem label="정시출고완료" value={85} showStatusIcon={true} />
                    <AdminListItem label="24시간 내 답변" value={79} showStatusIcon={true} />
                </CardContent>
            </Card>
            {/* 우수판매자 카드 */}
            <PremiumSellers />

            {/* 판매자가이드 및 혜택 카드 */}
            <SellerGuide />

            <div className="bg-[--color-admin-primary-bg] text-[--color-admin-primary-fg] p-6 rounded-lg font-bold">
  파랑 + 흰글씨?
</div>
        </>
    );
}
