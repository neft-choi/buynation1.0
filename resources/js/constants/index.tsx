import { NavItem } from "@/types";
import { HardDriveUpload, House, UserPlus, Contact, ClipboardList, SquarePen } from "lucide-react";

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
        href: '/buycle/home',
        icon: House,
    },
]
