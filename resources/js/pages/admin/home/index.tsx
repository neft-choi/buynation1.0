import { AdminButton } from '@/components/dashboard/admin-button';
import { AdminInput } from '@/components/dashboard/admin-input';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import { PublicTable } from '@/components/public-table';
import { ShopButton, ShopIconButton } from '@/components/shop/shop-button';
import { ShopCheckbox } from '@/components/shop/shop-checkbox';
import ShopChip from '@/components/shop/shop-chip';
import { ShopIcon } from '@/components/shop/shop-icon';
import ShopInput from '@/components/shop/shop-input';
import ShopSearch from '@/components/shop/shop-search';
import ShopStepper from '@/components/shop/shop-stepper';
import ShopToggle from '@/components/shop/shop-toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import AppLayout from '@/layouts/app-layout';
import { BuygentTableProps, MonthlySalesProps, type BreadcrumbItem } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const data: BuygentTableProps[] = [
    {
        id: 'm5gr84i9',
        name: '최수렬',
        yesterdaySales: 100000,
        cumulativeSales: 100000,
        yestermonthSales: 1000000,
        monthlySales: [
            {
                month: '1월',
                sales: 100000,
            },
            {
                month: '2월',
                sales: 200000,
            },
            {
                month: '3월',
                sales: 300000,
            },
            {
                month: '4월',
                sales: 400000,
            },
            {
                month: '5월',
                sales: 500000,
            },
        ],
    },
    {
        id: 'm5gr84i9',
        name: '최수렬1',
        yesterdaySales: 100000,
        cumulativeSales: 100000,
        yestermonthSales: 1000000,
        monthlySales: [
            {
                month: '1월',
                sales: 100000,
            },
            {
                month: '2월',
                sales: 200000,
            },
            {
                month: '3월',
                sales: 300000,
            },
            {
                month: '4월',
                sales: 400000,
            },
            {
                month: '5월',
                sales: 500000,
            },
        ],
    },
];

const columns: ColumnDef<BuygentTableProps>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    이름
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ getValue }) => <div className="p-4 capitalize">{getValue() as string}</div>,
    },
    {
        accessorKey: 'yesterdaySales',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    전날 매출
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ getValue }) => {
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'KRW',
            }).format(getValue() as number);
            return <div className="p-4 lowercase">{formatted}원</div>;
        },
    },
    {
        accessorKey: 'cumulativeSales',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    누적 매출
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ getValue }) => {
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'KRW',
            }).format(getValue() as number);
            return <div className="p-4 lowercase">{formatted}원</div>;
        },
    },
    {
        accessorKey: 'yestermonthSales',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    지난달 매출
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ getValue }) => {
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'KRW',
            }).format(getValue() as number);
            return <div className="p-4 lowercase">{formatted}원</div>;
        },
    },
    {
        accessorKey: 'monthlySales',
        header: () => <div className="text-right">월별 매출</div>,
        cell: ({ getValue }) => {
            const monthlySales = getValue() as MonthlySalesProps[];
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="">
                            <span className="sr-only">Open menu</span>
                            보기
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>월별 매출</DropdownMenuLabel>
                        {monthlySales.map((sale, index) => {
                            const formatted = new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'KRW',
                            }).format(sale.sales);
                            return (
                                <>
                                    <DropdownMenuItem key={sale.month}>
                                        {sale.month} : {formatted}원
                                    </DropdownMenuItem>
                                    {index !== monthlySales.length - 1 && <DropdownMenuSeparator />}
                                </>
                            );
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
    {
        accessorKey: 'actions',
        header: () => <div className="text-right"></div>,
        cell: ({ getValue }) => {
            const monthlySales = getValue() as MonthlySalesProps[];
            return <Button>다운로드</Button>;
        },
    },
];
export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="justify-cebter flex flex-col gap-4 p-4">
                <AdminDashboard />
                <AdminButton>Admin Primary button 테스트</AdminButton>
                <AdminButton variant='adminSecondary'>Admin Secondry button 테스트</AdminButton>
                <AdminButton variant='adminDisabled'>Admin Disabled button 테스트</AdminButton>
                <AdminButton variant='adminDisabledStrong'>Admin Disabled button 테스트</AdminButton>
                <AdminButton href='/admin/home'>링크 버튼 테스트</AdminButton>
                <AdminInput placeholder='Admin Input 테스트' />
            </div>
            <div className="flex flex-col justify-center gap-4 overflow-x-auto rounded-xl p-8">
                <ShopCheckbox id="check" />
                <Label htmlFor="check">체크</Label>
                <ShopCheckbox id="check1" size="medium" />
                <Label htmlFor="check">체크</Label>
                <RadioGroup>
                    <RadioGroupItem value="1">test</RadioGroupItem>
                    <RadioGroupItem value="2" variant="black">
                        test
                    </RadioGroupItem>
                </RadioGroup>
                <ShopToggle />
                <ShopInput title="이메일" placeholder="이메일을 입력해주세요" />

                <ShopStepper />
                <ShopSearch />
                <ShopButton>프라이머리</ShopButton>
                <ShopButton variant={'secondary'}>세컨더리</ShopButton>
                <ShopButton disabled>디스에이블</ShopButton>
                <ShopButton variant={'outline'}>아웃라인</ShopButton>
                <ShopButton variant={'secondary'} size={'sm'}>
                    스몰
                </ShopButton>
                <ShopIconButton variant={'black'}>
                    {' '}
                    <ShopIcon name="!Blank" className="size-16" />{' '}
                </ShopIconButton>
                <ShopIconButton variant={'white'}>
                    {' '}
                    <ShopIcon name="!Blank" className="size-16" />{' '}
                </ShopIconButton>
                <ShopIconButton variant={'outline'} size={'rectangleLg'}>
                    {' '}
                    <ShopIcon name="!Blank" className="size-15" />{' '}
                </ShopIconButton>
                <ShopIconButton variant={'outline'} size={'rectangleSm'}>
                    {' '}
                    <ShopIcon name="!Blank" className="size-15" />{' '}
                </ShopIconButton>
                <ShopChip variant={'primary'} size={'lg'}>
                    액션
                </ShopChip>
                <ShopChip variant={'secondary'} size={'lg'}>
                    액션
                </ShopChip>
                <ShopChip variant={'primary'} size={'sm'}>
                    액션
                </ShopChip>
                <ShopChip variant={'secondary'} size={'sm'}>
                    액션
                </ShopChip>
                <ShopChip variant={'tag'}>태그</ShopChip>

                <Card className="w-full md:w-auto">
                    <CardContent className="flex flex-col items-center justify-center gap-4">
                        <CardTitle>전날 총 매출</CardTitle>
                        <div className="text-4xl font-black">3,200,000</div>
                    </CardContent>
                </Card>
                <Card className="w-full md:w-auto">
                    <CardContent className="flex flex-col items-center justify-center gap-4">
                        <CardTitle>총 누적 매출</CardTitle>
                        <div className="text-4xl font-black">3,200,000</div>
                    </CardContent>
                </Card>
                <Card className="w-full md:w-auto">
                    <CardContent className="flex flex-col items-center justify-center gap-4">
                        <CardTitle>지난달 총 매출</CardTitle>
                        <div className="text-4xl font-black">3,200,000</div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-wrap gap-4 overflow-x-auto rounded-xl p-8 md:justify-center">
                <div>
                    <div className="text-xl font-black">바이전트</div>
                    <div>
                        <PublicTable data={data} columns={columns} />
                    </div>
                </div>
                <div>
                    <div className="text-xl font-black">바이클</div>
                    <div>
                        <PublicTable data={data} columns={columns} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
