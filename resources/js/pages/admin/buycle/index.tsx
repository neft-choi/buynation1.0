import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { BuycleTableProps, BreadcrumbItem, ApprovalStatus } from '@/types';
import { PublicTable } from '@/components/public-table';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Index() {

    const data: BuycleTableProps[] = [
        {
            id: "m5gr84i9",
            buygentName: '최수렬',
            buycleCode: 'buycle123',
            buycleName: '최수렬',
            password: 'asdasd',
            aproved: 'approved',
        },
        {
            id: "m5gr84i9",
            buygentName: '최수렬',
            buycleCode: 'buycle123',
            buycleName: '최수렬',
            password: 'asdasd',
            aproved: 'pending',
        },
        {
            id: "m5gr84i9",
            buygentName: '최수렬',
            buycleCode: 'buycle123',
            buycleName: '최수렬',
            password: 'asdasd',
            aproved: 'rejected',
        },
    ]

    const columns: ColumnDef<BuycleTableProps>[] = [
        {
            accessorKey: "buycleName",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        바이클명
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ getValue }) => (
                <div className="capitalize p-4">{getValue() as string}</div>
            ),
        },
        {
            accessorKey: "buycleCode",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        바이클 코드
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ getValue }) => <div className="capitalize p-4">{getValue() as string}</div>
        },
        {
            accessorKey: "buygentName",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        바이전트 명
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ getValue }) => <div className="capitalize p-4">{getValue() as string}</div>

        },
        {
            accessorKey: "password",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        비밀번호
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ getValue }) => <div className="capitalize p-4">{getValue() as string}</div>

        },
        {
            accessorKey: "aproved",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        승인
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ getValue }) => {
                const krStatus = (status: ApprovalStatus) => {
                    switch (status) {
                        case 'pending':
                            return '대기중';
                        case 'approved':
                            return '승인됨';
                        case 'rejected':
                            return '거절됨';
                    }
                }
                return (
                    <div className="capitalize p-4">{
                        krStatus(getValue() as ApprovalStatus)
                    }</div>
                )
            }
        },

        {
            accessorKey: "actions",
            header: () => <div className="text-right"></div>,
            cell: ({ getValue }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={"ghost"} className="p-2">
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='flex flex-col gap-2 p-4' align="end">
                            <DropdownMenuLabel className='w-full text-center'>승인</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <Button className='w-full'>승인</Button>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Button className='w-full text-red-600 hover:bg-red-600 hover:text-primary'>거절</Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },


    ]
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col gap-4 rounded-xl p-8 overflow-x-auto">
                <PublicTable data={data} columns={columns} />
            </div>
        </AppLayout>
    );
}
