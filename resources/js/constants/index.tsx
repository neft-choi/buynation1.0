import { NavItem } from '@/types';
import { Contact, CreditCard, HardDriveUpload, House, Settings, ShoppingBag, Smile, UserPlus, UserRound, Van } from 'lucide-react';

export const appName = import.meta.env.VITE_APP_NAME;
export const mainNavItems: NavItem[] = [
    {
        role: 'admin',
        title: '홈-어드민',
        href: '/admin/home',
        icon: House,
    },
    {
        role: 'admin',
        title: '매출업로드',
        href: '/admin/upload',
        icon: HardDriveUpload,
    },
    {
        role: 'admin',
        title: '바이전트 생성',
        href: '/admin/buygent/create',
        icon: UserPlus,
    },
    {
        role: 'admin',
        title: '바이클 신청목록',
        href: '/admin/buycle/home',
        icon: Contact,
    },
    {
        role: 'buygent',
        title: '홈-바이전트',
        href: '/buygent/home',
        icon: House,
    },
    {
        role: 'buycle',
        title: '홈-바이클',
        href: '/buycle/home',
        icon: House,
    },
    {
        role: 'admin',
        title: '쇼핑몰 관리자',
        href: '/admin/home/0',
        icon: House,
    },
    {
        role: 'admin',
        title: '상품관리',
        href: '/admin/home/1',
        icon: ShoppingBag,
        items: [
            { title: '상품 등록', href: '/admin/home/1' },
            { title: '상품 조회/수정', href: '/admin/home/1' },
        ],
    },
    {
        role: 'admin',
        title: '주문/배송',
        href: '/admin/home/2',
        icon: Van,
        items: [
            { title: '배송 관리', href: '/admin/home/2' },
            { title: '출고중지 요청', href: '/admin/home/2' },
            { title: '반품 관리', href: '/admin/home/2' },
            { title: '교환 관리', href: '/admin/home/2' },
            { title: '주문조회', href: '/admin/home/2' },
            { title: '문자 발송 내역', href: '/admin/home/2' },
        ],
    },
    {
        role: 'admin',
        title: '정산 현황',
        href: '/admin/home/3',
        icon: CreditCard,
    },
    {
        role: 'admin',
        title: '고객관리',
        href: '/admin/home/4',
        icon: Smile,
        items: [
            { title: '고객 문의', href: '/admin/home/4' },
            { title: '고객센터 문의', href: '/admin/home/4' },
            { title: '상품평', href: '/admin/home/4' },
        ],
    },
    {
        role: 'admin',
        title: '판매자정보',
        href: '/admin/home/5',
        icon: UserRound,
        items: [
            { title: '판매자 정보', href: '/admin/home/5' },
            { title: '계정 정보', href: '/admin/home/5' },
            { title: '담당자 관리', href: '/admin/home/5' },
            { title: '비밀번호 변경', href: '/admin/home/5' },
            { title: '추가 판매 정보', href: '/admin/home/5' },
            { title: '주소록/배송정보 관리', href: '/admin/home/5' },
        ],
    },
    {
        role: 'admin',
        title: '설정',
        href: '/admin/home/6',
        icon: Settings,
    },
];
