import { IconName } from '@/components/shop/shop-icon';
import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({ children, title, description, icon, ...props }: { children: React.ReactNode; title?: string; description?: string, icon?: IconName }) {
    return (
        <AuthLayoutTemplate title={title} description={description} {...props} icon={icon}>
            {children}
        </AuthLayoutTemplate>
    );
}
