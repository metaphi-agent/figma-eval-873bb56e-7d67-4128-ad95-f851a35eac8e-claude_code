import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function SearchIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.367 3.84201C16.9227 3.39777 16.3957 3.04497 15.8153 2.8034C15.2349 2.56182 14.6127 2.43652 13.984 2.43652C13.3554 2.43652 12.7332 2.56182 12.1528 2.8034C11.5724 3.04497 11.0453 3.39777 10.601 3.84201L10.001 4.44201L9.40102 3.84201C8.50379 2.94477 7.28927 2.43698 6.01802 2.43698C4.74677 2.43698 3.53225 2.94477 2.63502 3.84201C1.73779 4.73924 1.23 5.95376 1.23 7.22501C1.23 8.49626 1.73779 9.71077 2.63502 10.608L10.001 17.974L17.367 10.608C17.8113 10.1637 18.1641 9.63665 18.4056 9.05625C18.6472 8.47585 18.7725 7.85366 18.7725 7.22501C18.7725 6.59636 18.6472 5.97417 18.4056 5.39377C18.1641 4.81337 17.8113 4.28626 17.367 3.84201Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1H4L6.68 12.39C6.77144 12.8504 7.02191 13.264 7.38755 13.5583C7.75318 13.8526 8.2107 14.009 8.68 14H16.4C16.8693 14.009 17.3268 13.8526 17.6925 13.5583C18.0581 13.264 18.3086 12.8504 18.4 12.39L20 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="18" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="18" r="1.5" fill="currentColor"/>
    </svg>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M10 1V3M10 17V19M1 10H3M17 10H19M3.5 3.5L5 5M15 15L16.5 16.5M16.5 3.5L15 5M5 15L3.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 7.5L10 2L17 7.5V17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17V7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 18V11H12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function LibraryIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 3H16C16.5523 3 17 3.44772 17 4V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V4C3 3.44772 3.44772 3 4 3Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 7V13L12 10L8 7Z" fill="currentColor"/>
    </svg>
  );
}

export function CommunityIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 15C14 13.3431 11.3137 12 8 12C4.68629 12 2 13.3431 2 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 15C18 13.7574 16.6274 12.6835 14.5 12.1833" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="14" cy="6" r="2.5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 2V12M10 12L6 8M10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 14V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="10" cy="6" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 18C18 14.6863 14.4183 12 10 12C5.58172 12 2 14.6863 2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 7C16 5.4087 15.3679 3.88258 14.2426 2.75736C13.1174 1.63214 11.5913 1 10 1C8.4087 1 6.88258 1.63214 5.75736 2.75736C4.63214 3.88258 4 5.4087 4 7C4 13 2 15 2 15H18C18 15 16 13 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.73 18C11.5542 18.3031 11.3019 18.5547 10.9982 18.7295C10.6946 18.9044 10.3504 18.9965 10 18.9965C9.64964 18.9965 9.30541 18.9044 9.00179 18.7295C8.69818 18.5547 8.44583 18.3031 8.27 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 10C18 14.4183 14.4183 18 10 18C8.5 18 7.1 17.6 5.9 16.9L2 18L3.1 14.1C2.4 12.9 2 11.5 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 3.5V16.5L17 10L5 3.5Z" fill="currentColor"/>
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2" y="2" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="11" y="2" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="2" y="11" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="11" y="11" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function ListIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 4H18M2 10H18M2 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 4H18M4 10H16M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 5H17M7 5V3H13V5M8 9V15M12 9V15M5 5L6 17H14L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function StarIcon(props: IconProps & { filled?: boolean }) {
  const { filled, ...rest } = props;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M10 1L12.39 6.26L18 7.27L14 11.14L14.76 17L10 14.27L5.24 17L6 11.14L2 7.27L7.61 6.26L10 1Z" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function MinimizeIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function MaximizeIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="4" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function SteamIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
      <circle cx="15" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 15L9.5 12.5L11 14.5L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C10.06 18 10.12 18 10.18 18V11.88H8.38V9.78H10.18V8.22C10.18 6.42 11.26 5.44 12.88 5.44C13.66 5.44 14.34 5.5 14.54 5.52V7.38H13.44C12.56 7.38 12.38 7.8 12.38 8.42V9.78H14.48L14.2 11.88H12.38V17.66C15.62 16.82 18 13.7 18 10Z" fill="currentColor"/>
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 3L10.5 11L4 17.5H6L11.5 12.5L15.5 17.5H18L11 9L17 3H15L10 8L6.5 3H4Z" fill="currentColor"/>
    </svg>
  );
}

export function WindowsIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M2 5.5L8 4.7V10H2V5.5ZM9 4.55L18 3V10H9V4.55ZM18 11V18L9 16.45V11H18ZM8 16.3L2 15.5V11H8V16.3Z"/>
    </svg>
  );
}

export function MacIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M14.5 2C13.1 2 11.6 2.8 10.7 3.9C9.9 5 9.5 6.4 9.7 7.7C11.2 7.8 12.7 7.1 13.6 5.9C14.5 4.7 14.9 3.4 14.5 2ZM17.3 14C16.9 14.9 16.4 15.7 15.7 16.4C14.7 17.4 13.7 17.9 12.5 17.9C11.1 17.9 10.2 17.1 8.9 17.1C7.5 17.1 6.5 17.9 5.2 17.9C4 17.9 3 17.3 2 16.3C-0.1 14.1 0.3 10 2.5 7.2C3.3 6.2 4.6 5.4 6.1 5.4C7.4 5.4 8.5 6.3 9.3 6.3C10.1 6.3 11.4 5.2 13.1 5.4C13.7 5.4 15.5 5.6 16.6 7.4C13.4 9.3 13.9 13.4 17.3 14Z"/>
    </svg>
  );
}

export function LinuxIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 2C6.7 2 4 4.7 4 8V12C4 14.2 5.8 16 8 16H12C14.2 16 16 14.2 16 12V8C16 4.7 13.3 2 10 2ZM8 12C7.4 12 7 11.6 7 11S7.4 10 8 10 9 10.4 9 11 8.6 12 8 12ZM12 12C11.4 12 11 11.6 11 11S11.4 10 12 10 13 10.4 13 11 12.6 12 12 12ZM14 8H6V8C6 5.8 7.8 4 10 4S14 5.8 14 8Z"/>
    </svg>
  );
}

export function SteamDeckIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M3 6H17C18.1 6 19 6.9 19 8V12C19 13.1 18.1 14 17 14H3C1.9 14 1 13.1 1 12V8C1 6.9 1.9 6 3 6ZM5 10.5C5 11.3 5.7 12 6.5 12S8 11.3 8 10.5 7.3 9 6.5 9 5 9.7 5 10.5ZM12 10.5C12 11.3 12.7 12 13.5 12S15 11.3 15 10.5 14.3 9 13.5 9 12 9.7 12 10.5Z"/>
    </svg>
  );
}

export function VRIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M18 6H2C0.9 6 0 6.9 0 8V12C0 13.1 0.9 14 2 14H6L8 16H12L14 14H18C19.1 14 20 13.1 20 12V8C20 6.9 19.1 6 18 6ZM6 11C4.9 11 4 10.1 4 9S4.9 7 6 7 8 7.9 8 9 7.1 11 6 11ZM14 11C12.9 11 12 10.1 12 9S12.9 7 14 7 16 7.9 16 9 15.1 11 14 11Z"/>
    </svg>
  );
}

export function ThumbsUpIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 17H3V8H6V17ZM18 9C18 8.4 17.6 8 17 8H13L13.6 5C13.7 4.8 13.7 4.5 13.5 4.3L12.5 3L7 8.5V16L14 16C14.8 16 15.5 15.5 15.8 14.8L18 8.7V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ThumbsDownIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 3H17V12H14V3ZM2 11C2 11.6 2.4 12 3 12H7L6.4 15C6.3 15.2 6.3 15.5 6.5 15.7L7.5 17L13 11.5V4L6 4C5.2 4 4.5 4.5 4.2 5.2L2 11.3V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CommentIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 2H2V14H5V18L9 14H18V2ZM16 12H8L6 14V12H4V4H16V12Z" fill="currentColor"/>
    </svg>
  );
}

export function PointsIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 2L2 7L10 12L18 7L10 2ZM2 12L10 17L18 12L16.5 11.1L10 15L3.5 11.1L2 12Z"/>
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function PauseIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <rect x="5" y="4" width="4" height="12" rx="1"/>
      <rect x="11" y="4" width="4" height="12" rx="1"/>
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 11C17.7 11 19 12.3 19 14S17.7 17 16 17H5C2.8 17 1 15.2 1 13S2.8 9 5 9C5.2 6.2 7.4 4 10.5 4C13.4 4 15.9 6.5 15.9 9.4C16 9.3 16 9.3 16 9.3C16.3 10.7 17 11 16 11Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function EditIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 15V18H5L14.5 8.5L11.5 5.5L2 15ZM17.4 5.6C17.8 5.2 17.8 4.6 17.4 4.2L15.8 2.6C15.4 2.2 14.8 2.2 14.4 2.6L12.9 4.1L15.9 7.1L17.4 5.6Z" fill="currentColor"/>
    </svg>
  );
}
