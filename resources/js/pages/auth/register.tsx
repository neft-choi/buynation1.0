import { Head, Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import ShopInput from '@/components/shop/shop-input';
import { ShopCheckbox } from '@/components/shop/shop-checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FormEvent, useState } from 'react';
import { ShopButton, ShopIconButton } from '@/components/shop/shop-button';
import ShopChip from '@/components/shop/shop-chip';
import { ShopIcon } from '@/components/shop/shop-icon';

const description = '새로운 가치 소비 생태계'

type StepProps = '1' | '2' | '3'

interface StepComponentProps {
    errors: Record<string, string>;
    processing: boolean;
    setStep: (step: StepProps) => void;
    data: any;
    setData: (key: string, value: any) => void;
}

interface AgreeProps {
    label: string;
    type: 'necessary' | 'optional';
    value: string;
    collapsible: boolean
}

const Step1 = ({ setStep, data, setData }: StepComponentProps) => {
    return (
        <>
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
            <div className='grid gap-2 animate-in fade-in slide-in-from-bottom-10 duration-300 ease-out'>
                <Label>
                    <RadioGroup
                        value={data.accountType}
                        onValueChange={(value) => setData('accountType', value)}
                    >
                        <Label htmlFor='buymer' className="flex items-center gap-3 rounded-sm border p-4 has-[[aria-checked=true]]:border-label-solid-default">
                            <RadioGroupItem value='buymer' id='buymer' />
                            <div>일반회원가입하기</div>
                        </Label>
                        <Label htmlFor='buycle' className="flex items-center gap-3 rounded-sm border p-4 has-[[aria-checked=true]]:border-label-solid-default">
                            <RadioGroupItem value='buycle' id='buycle' />
                            <div>바이클 가입하기</div>
                            <ShopChip variant={'tag'} className='ml-auto'>승인필요</ShopChip>
                        </Label>
                        <Label htmlFor='buygent' className="flex items-center gap-3 rounded-sm border p-4 has-[[aria-checked=true]]:border-label-solid-default">
                            <RadioGroupItem value='buygent' id='buygent' />
                            <div>바이전트 가입하기</div>
                            <ShopChip variant={'tag'} className='ml-auto'>승인필요</ShopChip>
                        </Label>
                        <Label htmlFor='shop' className='flex flex-col gap-2 mt-8'>
                            <div className='text-center text-[15px] text-label-solid-subtle'>바이네이션에서 판매를 원하시나요?</div>
                            <div className="flex items-center gap-3 rounded-sm border p-4 has-[[aria-checked=true]]:border-label-solid-default">
                                <RadioGroupItem value='shop' id='shop' />
                                <div>판매회원 가입하기</div>
                                <ShopChip variant={'tag'} className='ml-auto'>승인필요</ShopChip>
                            </div>
                        </Label>
                    </RadioGroup>
                    <ShopButton className='w-full mt-10' onClick={() => setStep('2')}>가입하기</ShopButton>
                    <div className='w-full text-center mt-10 text-sm'>
                        <span className='text-label-normal-default/90'>이미 회원이신가요? </span>
                        <TextLink href={route('login')} className='text-label-solid-default'>로그인</TextLink>
                    </div>
                </Label>
            </div>
        </>
    );
}

const Step2 = ({ setStep, data, setData }: StepComponentProps) => {
    const agreeList: AgreeProps[] = [
        { label: '바이네이션 이용약관', type: 'necessary', value: 'agree1', collapsible: true },
        { label: '전자금융서비스 이용약관 동의', type: 'necessary', value: 'agree2', collapsible: true },
        { label: '개인정보 수집 및 이용동의', type: 'necessary', value: 'agree3', collapsible: true },
        { label: '만 14세 이상입니다', type: 'necessary', value: 'agree4', collapsible: false },
        { label: '혜택 알림 이메일, 문자, 앱 푸시 수신', type: 'optional', value: 'agree5', collapsible: false },
    ]

    const handleAgreeChange = (value: string, checked: boolean) => {
        setData('agreements', {
            ...data.agreements,
            [value]: checked
        });
    }

    const handleAllAgree = (checked: boolean) => {
        const allAgreements: Record<string, boolean> = {};
        agreeList.forEach(agree => {
            allAgreements[agree.value] = checked;
        });
        setData('agreements', allAgreements);
    }

    const isAllChecked = agreeList.every(agree => data.agreements?.[agree.value]);
    const canProceed = agreeList
        .filter(agree => agree.type === 'necessary')
        .every(agree => data.agreements?.[agree.value]);

    return (
        <div className='grid gap-8 animate-in fade-in slide-in-from-bottom-10 duration-300 ease-out'>
            <div className='w-full flex flex-col gap-2'>
                <div className='text-2xl font-bold text-label-solid-strong'>약관동의</div>
                <div className='text-[15px] text-label-solid-subtle'>
                    바이네이션 회원 서비스 이용을 위해 아래 약관 동의가 필요합니다.
                </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <Label htmlFor='AllAgree' className="flex items-center gap-2 bg-fill-normal-default py-2.5 px-3">
                    <ShopCheckbox
                        checked={isAllChecked}
                        onCheckedChange={(checked) => handleAllAgree(checked === true)}
                        id='AllAgree'
                    />
                    <div className='text-base font-medium text-label-solid-default'>전체 동의</div>
                </Label>
                <div>
                    {agreeList.map((agree) => (
                        <Label key={agree.label} htmlFor={agree.value} className="flex items-center gap-2 py-1.5 px-3">
                            <ShopCheckbox
                                checked={data.agreements?.[agree.value] || false}
                                onCheckedChange={(checked) => handleAgreeChange(agree.value, checked === true)}
                                id={agree.value}
                            />
                            <div className='text-base font-medium text-label-solid-default mr-1'>
                                {agree.label}
                                {agree.type === 'necessary'
                                    ? <span className='text-[15px] text-label-solid-subtler font-light'>(필수)</span>
                                    : <span className='text-[15px] text-label-solid-subtler font-light'>(선택)</span>
                                }
                            </div>
                            {agree.collapsible && (
                                <ShopIconButton className='border-none size-4 ml-auto'>
                                    <ShopIcon name='Chevron-Right' className='text-label-solid-subtler' />
                                </ShopIconButton>
                            )}
                        </Label>
                    ))}
                    <div className='flex w-full gap-3 mt-10'>
                        <ShopButton className='w-full' variant={'outline'} onClick={() => setStep('1')}>
                            처음으로
                        </ShopButton>
                        <ShopButton
                            className='w-full'
                            onClick={() => setStep('3')}
                            disabled={!canProceed}
                        >
                            다음
                        </ShopButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Step3 = ({ setStep, data, setData, errors, processing }: StepComponentProps) => {
    return (
        <div className='grid gap-8 animate-in fade-in slide-in-from-bottom-10 duration-300 ease-out'>
            <div className='w-full flex flex-col gap-2'>
                <div className='text-2xl font-bold text-label-solid-strong'>회원정보</div>
                <div className='text-[15px] text-label-solid-subtle'>
                    회원정보를 입력하고 바이네이션 서비스를 이용해보세요.
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <div className="grid gap-2">
                    <ShopInput
                        title="아이디"
                        id="username"
                        type="text"
                        required
                        autoFocus
                        tabIndex={1}
                        autoComplete="username"
                        name="username"
                        placeholder="아이디"
                        value={data.username}
                        onChange={(e) => setData('username', e.target.value)}
                    />
                    <InputError message={errors?.username} className="mt-2" />
                </div>
                <div className='grid gap-2'>
                    <div className="grid gap-2">
                        <ShopInput
                            title='비밀번호'
                            id="password"
                            type="password"
                            required
                            tabIndex={2}
                            autoComplete="new-password"
                            name="password"
                            placeholder="비밀번호"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors?.password} />
                    </div>
                    <div className="grid gap-2">
                        <ShopInput
                            title='비밀번호 재입력'
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            name="password_confirmation"
                            placeholder="비밀번호 재입력"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                        <InputError message={errors?.password_confirmation} />
                    </div>
                </div>

                <div className='grid gap-2'>
                    <div className="grid gap-2">
                        <ShopInput
                            title='이름'
                            id="name"
                            type="text"
                            required
                            tabIndex={4}
                            autoComplete="name"
                            name="name"
                            placeholder="이름"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError message={errors?.name} />
                    </div>
                    <div className="grid gap-2">
                        <ShopInput
                            title='휴대폰 번호'
                            id="phone"
                            type="tel"
                            required
                            tabIndex={5}
                            autoComplete="tel"
                            name="phone"
                            placeholder="전화번호"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                        />
                        <InputError message={errors?.phone} />
                    </div>
                    <div className="grid gap-2">
                        <ShopInput
                            title='이메일'
                            id="email"
                            type="email"
                            required
                            tabIndex={6}
                            autoComplete="email"
                            name="email"
                            placeholder="이메일"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors?.email} />
                    </div>
                </div>
            </div>
            <div className='flex w-full gap-3 mt-2'>
                <ShopButton
                    className='w-full'
                    variant={'outline'}
                    onClick={() => setStep('2')}
                >
                    이전
                </ShopButton>
                <ShopButton
                    type="submit"
                    className='w-full'
                    disabled={processing}
                >
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    가입하기
                </ShopButton>
            </div>
        </div>
    );
}

export default function Register() {
    const [step, setStep] = useState<StepProps>('1');

    const { data, setData, post, processing, errors } = useForm({
        accountType: 'buymer',
        agreements: {
            agree1: false,
            agree2: false,
            agree3: false,
            agree4: false,
            agree5: false,
        },
        username: '',
        password: '',
        password_confirmation: '',
        name: '',
        phone: '',
        email: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <AuthLayout title="회원가입" description="새로운 가치 소비 생태계">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {step === '1' && (
                    <Step1
                        setStep={setStep}
                        processing={processing}
                        errors={errors}
                        data={data}
                        setData={setData}
                    />
                )}
                {step === '2' && (
                    <Step2
                        setStep={setStep}
                        processing={processing}
                        errors={errors}
                        data={data}
                        setData={setData}
                    />
                )}
                {step === '3' && (
                    <Step3
                        setStep={setStep}
                        processing={processing}
                        errors={errors}
                        data={data}
                        setData={setData}
                    />
                )}
            </form>
        </AuthLayout>
    );
}