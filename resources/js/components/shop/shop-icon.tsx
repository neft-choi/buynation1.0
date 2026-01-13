// shop-icon.tsx
import { cn } from "@/lib/utils";

export type IconType = 'normal' | 'line';
export type IconName =
    'Arrow-Down' | 'Arrow-Left' | 'Arrow-Up' | 'Bag' | 'Ball' |
    'Bed' | 'Bell' | 'Block' | 'Book' | 'Cart' | 'Chat' | 'Check' |
    'Chevron-Down' | 'Chevron-Left' | 'Chevron-Right' | 'Chevron-Up' |
    'Cloth' | 'Cook' | 'Coupon' | 'Ellipsis' | 'Equal' | 'Food' | 'Gift' |
    'Heart' | 'HeartHand' | 'laptop' | 'leaf' | 'Google' | 'Kakao' | 'Naver' |
    'Makeup' | 'Medal' | 'Minus' | 'Mune' | 'Pause' | 'Pet' | 'Plus' | 'Pot' |
    'Profile' | 'Search' | 'SNSBlogFill' | 'SNSInstaFill' | 'SNSYoutubeFill' |
    'Speaker' | 'X' | 'Alert' | 'Arrow-Right-Left' | 'Calendar' | 'Copy' |
    'Filter' | 'Good' | 'Lock' | 'Reset' | 'StarFill' | 'Upload' | 'Card' |
    'Headset' | 'Money' | 'Phone' | 'Point' | 'Rank-Up' | 'Rank-Down' |
    'Rank-Stay' | 'Bell-Dot' | 'Bell-Plus' | 'Box-Return' | 'Confetti' |
    'Coupon-Yellow' | 'Document' | 'Heart-Handshake' | 'List-Check' |
    'Megaphone' | 'Message-Square-Heart' | 'Message-Square-Warning' | 'Pin' |
    'Point-Yellow' | 'Profile-X' | 'Shoppingbag' | 'Square-Pen' | 'Truck' |
    'Clock-Fading' | 'Document-Yellow' | 'Heart-Yellow' |
    'Message-Square-Heart-Yellow' | 'Coupon-Solid';
export type KoIconName =
    '아래 화살표' |
    '좌 화살표' |
    '위 화살표' |
    '좌우 화살표' |
    '가방' |
    '공' |
    '침대' |
    '알림' |
    '알림(점)' |
    '알림 추가' |
    '차단' |
    '책' |
    '반품' |
    '달력' |
    '카드' |
    '장바구니' |
    '채팅' |
    '체크' |
    '펼침(아래)' |
    '펼침(왼쪽)' |
    '펼침(오른쪽)' |
    '펼침(위)' |
    '시계(페이딩)' |
    '의류' |
    '축하' |
    '요리' |
    '복사' |
    '쿠폰' |
    '쿠폰(노랑)' |
    '쿠폰(단색)' |
    '문서' |
    '문서(노랑)' |
    '더보기' |
    '같음' |
    '필터' |
    '음식' |
    '선물' |
    '좋아요' |
    '구글' |
    '하트' |
    '하트(노랑)' |
    '하트 악수' |
    '하트 손' |
    '헤드셋' |
    '카카오' |
    '노트북' |
    '나뭇잎' |
    '체크리스트' |
    '잠금' |
    '화장품' |
    '메달' |
    '메가폰' |
    '하트 메시지' |
    '하트 메시지(노랑)' |
    '경고 메시지' |
    '마이너스' |
    '돈' |
    '메뉴' |
    '네이버' |
    '일시정지' |
    '반려동물' |
    '전화' |
    '핀' |
    '플러스' |
    '포인트' |
    '포인트(노랑)' |
    '냄비' |
    '프로필' |
    '프로필 삭제' |
    '순위 하락' |
    '순위 유지' |
    '순위 상승' |
    '초기화' |
    '검색' |
    '쇼핑백' |
    'SNS 블로그' |
    'SNS 인스타그램' |
    'SNS 유튜브' |
    '스피커' |
    '편집' |
    '별' |
    '배송' |
    '업로드' |
    '닫기' |
    '경고' |
    '뷰티' |
    '명품' |
    '푸드' |
    '식품' |
    '리빙' |
    '패션' |
    '디지털' |
    '전자기기' |
    '펫' |
    '스포츠' |
    '운동' |
    '도서' |
    '완구' |
    '장난감' |
    '침구' |
    '주방' |
    '음악'

const koreanToIconMap: Record<KoIconName, IconName> = {
    '아래 화살표': 'Arrow-Down',
    '좌 화살표': 'Arrow-Left',
    '위 화살표': 'Arrow-Up',
    '좌우 화살표': 'Arrow-Right-Left',
    '가방': 'Bag',
    '공': 'Ball',
    '침대': 'Bed',
    '알림': 'Bell',
    '알림(점)': 'Bell-Dot',
    '알림 추가': 'Bell-Plus',
    '차단': 'Block',
    '책': 'Book',
    '반품': 'Box-Return',
    '달력': 'Calendar',
    '카드': 'Card',
    '장바구니': 'Cart',
    '채팅': 'Chat',
    '체크': 'Check',
    '펼침(아래)': 'Chevron-Down',
    '펼침(왼쪽)': 'Chevron-Left',
    '펼침(오른쪽)': 'Chevron-Right',
    '펼침(위)': 'Chevron-Up',
    '시계(페이딩)': 'Clock-Fading',
    '의류': 'Cloth',
    '축하': 'Confetti',
    '요리': 'Cook',
    '복사': 'Copy',
    '쿠폰': 'Coupon',
    '쿠폰(노랑)': 'Coupon-Yellow',
    '쿠폰(단색)': 'Coupon-Solid',
    '문서': 'Document',
    '문서(노랑)': 'Document-Yellow',
    '더보기': 'Ellipsis',
    '같음': 'Equal',
    '필터': 'Filter',
    '음식': 'Food',
    '선물': 'Gift',
    '좋아요': 'Good',
    '구글': 'Google',
    '하트': 'Heart',
    '하트(노랑)': 'Heart-Yellow',
    '하트 악수': 'Heart-Handshake',
    '하트 손': 'HeartHand',
    '헤드셋': 'Headset',
    '카카오': 'Kakao',
    '노트북': 'laptop',
    '나뭇잎': 'leaf',
    '체크리스트': 'List-Check',
    '잠금': 'Lock',
    '화장품': 'Makeup',
    '메달': 'Medal',
    '메가폰': 'Megaphone',
    '하트 메시지': 'Message-Square-Heart',
    '하트 메시지(노랑)': 'Message-Square-Heart-Yellow',
    '경고 메시지': 'Message-Square-Warning',
    '마이너스': 'Minus',
    '돈': 'Money',
    '메뉴': 'Mune',
    '네이버': 'Naver',
    '일시정지': 'Pause',
    '반려동물': 'Pet',
    '전화': 'Phone',
    '핀': 'Pin',
    '플러스': 'Plus',
    '포인트': 'Point',
    '포인트(노랑)': 'Point-Yellow',
    '냄비': 'Pot',
    '프로필': 'Profile',
    '프로필 삭제': 'Profile-X',
    '순위 하락': 'Rank-Down',
    '순위 유지': 'Rank-Stay',
    '순위 상승': 'Rank-Up',
    '초기화': 'Reset',
    '검색': 'Search',
    '쇼핑백': 'Shoppingbag',
    'SNS 블로그': 'SNSBlogFill',
    'SNS 인스타그램': 'SNSInstaFill',
    'SNS 유튜브': 'SNSYoutubeFill',
    '스피커': 'Speaker',
    '편집': 'Square-Pen',
    '별': 'StarFill',
    '배송': 'Truck',
    '업로드': 'Upload',
    '닫기': 'X',
    '경고': 'Alert',
    '뷰티': 'Makeup',
    '명품': 'Bag',
    '푸드': 'Food',
    '식품': 'Food',
    '리빙': 'Pot',
    '패션': 'Cloth',
    '디지털': 'laptop',
    '전자기기': 'laptop',
    '펫': 'Pet',
    '스포츠': 'Ball',
    '운동': 'Ball',
    '도서': 'Book',
    '완구': 'Gift',
    '장난감': 'Gift',
    '침구': 'Bed',
    '주방': 'Cook',
    '음악': 'Speaker',
};



interface ShopIconProps {
    name: KoIconName;
    type?: IconType; // 'normal' (기본값) 또는 'line'
    size?: number;
    className?: string;
}
function getIconName(name: KoIconName): IconName {
    if (name in koreanToIconMap) {
        return koreanToIconMap[name as KoIconName];
    }
    return name as IconName;
}

export function ShopIcon({ name, type = 'normal', className }: ShopIconProps) {
    const iconName = getIconName(name);
    const symbolId =
        type === 'line'
            ? `icon-line_color-${iconName}`
            : `icon-normal-${iconName}`;

    return (
        <svg className={cn('size-5', className)} aria-hidden="true">
            <use href={`#${symbolId}`} />
        </svg>
    );
}