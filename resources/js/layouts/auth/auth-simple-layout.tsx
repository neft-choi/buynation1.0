import AppLogoIcon from '@/components/app-logo-icon';
import BgObject from '@/components/bg-object';
import { IconName } from '@/components/shop/shop-icon';
import { ShopNavigation } from '@/components/shop/shop-navigation';
import { Head, Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
    icon?: IconName
}

export default function AuthSimpleLayout({ children, title, description, icon }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-start gap-8 p-4">
            <Head title={title} />
            <ShopNavigation className='p-0' title={title} icon={icon} />
            <div className="w-full ">
                <div className="flex flex-col gap-6">

                    {children}
                </div>
            </div>
        </div>
    );
}
