import InputError from '@/components/input-error';
import ShopBanner from '@/components/shop/shop-banner';
import { ShopButton, ShopIconButton } from '@/components/shop/shop-button';
import { ShopCheckbox } from '@/components/shop/shop-checkbox';
import { ShopIcon } from '@/components/shop/shop-icon';
import ShopInput from '@/components/shop/shop-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import AuthLayout from '@/layouts/auth-layout';
import { SharedData } from '@/types';
import { Form, Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}
const description = '새로운 가치 소비 생태계'
export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (data.remember) {
            localStorage.setItem('rememberId', data.email);
        } else {
            localStorage.removeItem('rememberId');
        }

        post(route('login'));
    };

    useEffect(() => {
        const savedEmail = localStorage.getItem('rememberId');
        if (savedEmail) {
            setData('email', savedEmail);
            setData('remember', true);
        }
    }, []);
    return (
        <AuthLayout description="새로운 가치 소비 생태계">
            <div className="flex flex-col items-center gap-[2px]">
                <div className="space-y-2 text-center">
                    <p className="text-center text-[15px] font-medium text-label-solid-subtle">
                        {description}
                    </p>
                </div>
                <Link href={route('login')} className="">
                    <span className="truncate leading-tight font-semibold text-3xl">
                        {import.meta.env.VITE_APP_NAME || '앱이름'}
                    </span>

                </Link>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">

                <div className="grid gap-2">
                    <div className="grid gap-2">
                        <ShopInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="email"
                            tabIndex={1} title='아이디' placeholder='아이디를 입력해주세요' />
                        <InputError message={errors.email} />
                    </div>
                    <div className="grid gap-2">
                        <div className="grid gap-2">
                            {/* {canResetPassword && (
                                        <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
                                            Forgot password?
                                        </TextLink>
                                    )} */}
                            <ShopInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                required
                                tabIndex={2}
                                autoComplete="password"
                                title='비밀번호' placeholder='비밀번호를 입력해주세요'
                            />
                            <InputError message={errors.password} />
                        </div>
                    </div>
                    <div className="flex items-center space-x-1">
                        <ShopCheckbox size='medium' id="remember" name="remember" tabIndex={3} checked={data.remember}
                            onCheckedChange={(checked) => setData('remember', checked === true)} />
                        <Label htmlFor="remember" className='text-[15px] font-light text-label-normal-default'>아이디 저장</Label>
                    </div>
                    <ShopButton type="submit" className="w-full mt-2" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        로그인
                    </ShopButton>
                    <div className="text-center flex items-center justify-center gap-3 text-sm text-label-normal-default mt-3">
                        <Link href={route('register')} tabIndex={5}>
                            아이디 찾기
                        </Link>
                        <Separator orientation='vertical' />
                        <Link href={route('register')} tabIndex={5}>
                            비밀번호 재설정
                        </Link>
                        <Separator orientation='vertical' />
                        <Link className='text-label-solid-default font-semibold' href={route('register')} tabIndex={5}>
                            회원가입
                        </Link>
                        <Link className='text-label-solid-default font-semibold' href={route('test')} method='post' tabIndex={5}>
                            테스트버튼
                        </Link>
                    </div>
                    <div className='w-full text-center mt-9 flex flex-col gap-5'>
                        <div className='text-sm text-label-normal-subtle/60'>
                            SNS 간편 로그인
                        </div>
                        <div className='w-full flex gap-4 justify-center'>
                            <ShopIconButton>
                                <ShopIcon name='Kakao' className='size-5' />
                            </ShopIconButton>
                            <ShopIconButton>
                                <ShopIcon name='Naver' className='size-5' />
                            </ShopIconButton>
                            <ShopIconButton>
                                <ShopIcon name='Google' className='size-5' />
                            </ShopIconButton>
                        </div>
                        <ShopBanner href='/' imgUrl='https://placehold.co/375x66' />
                    </div>
                </div>

            </form>
        </AuthLayout>
    );
}
