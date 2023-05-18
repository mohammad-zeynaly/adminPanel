
//data summery in sidebar
const summaryItems = [
  {
    id: 1,
    bgClass: "bg-[#ffb822]",
    title: "مجموع فروش",
    caption: "15,687",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-white w-5 h-5"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a1 1 0 011-1h2a1 1 0 011 1v12h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1v-3a1 1 0 011-1h2a1 1 0 011 1v3h1V7a1 1 0 011-1h2a1 1 0 011 1v7h1V2z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    bgClass: "bg-[#0abb87]",
    title: "مجموع تیکت ها",
    caption: "214",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-white w-5 h-5"
        viewBox="0 0 17 17"
      >
        <path d="M0 2v13h17V2H0zm8.494 7.817L1.598 3h13.82L8.494 9.817zM5.755 8.516L1 13.198V3.815l4.755 4.701zm.711.703l2.026 2.003 1.996-1.966 4.8 4.744H1.611l4.855-4.781zm4.735-.664L16 3.83v9.467l-4.799-4.742z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    bgClass: "bg-[#55a6eb]",
    title: " بازدید کنندگان",
    caption: "30,313",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-white w-5 h-5"
        viewBox="0 0 1024 1024"
      >
        <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
      </svg>
    ),
  },
];

// data QuickAccessModal
const accessItems = [
  {
    id: 1,
    bgClass: "bg-[#F3C6C6]",
    textClass: "text-third",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.1rem"
        height="1.1rem"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 640 512"
      >
        <path d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"></path>
      </svg>
    ),
    title: "دسته بندی ها ",
  },
  {
    id: 2,
    bgClass: "bg-[#C9E1F6]",
    textClass: "text-[#72B5EE]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.1rem"
        height="1.1rem"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 17 17"
      >
        <path d="M9 3.988V1H8v2.988c-3.564.105-8 1.282-8 2.487v7.041c0 .827.673 1.5 1.5 1.5h1.79l1.996-3.931c.567.104 1.713.274 3.173.274a19.74 19.74 0 003.288-.277l1.908 3.934H15.5c.827 0 1.5-.673 1.5-1.5V6.475c0-1.205-4.437-2.383-8-2.487zm7 9.528c0 .275-.225.5-.5.5h-1.218l-1.976-4.07-.386.085c-.015.003-1.515.329-3.462.329-1.941 0-3.315-.323-3.329-.327l-.384-.093-2.068 4.075H1.5a.501.501 0 01-.5-.5V6.6c.502-.437 3.38-1.518 7-1.611V5h1v-.013c3.619.094 6.498 1.175 7 1.612v6.917zM5 7.02h.998v1H5v1.02H4V8.02H3v-1h1V6h1v1.02zm7.5 2c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5a1.501 1.501 0 000 3zm0-2c.275 0 .5.225.5.5s-.225.5-.5.5-.5-.225-.5-.5.225-.5.5-.5z"></path>
      </svg>
    ),
    title: "محصولات ",
  },
  {
    id: 3,
    bgClass: "bg-[#FFEABC]",
    textClass: "text-[#FFBA27]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.1rem"
        height="1.1rem"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a1 1 0 011-1h2a1 1 0 011 1v12h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1v-3a1 1 0 011-1h2a1 1 0 011 1v3h1V7a1 1 0 011-1h2a1 1 0 011 1v7h1V2z"></path>
      </svg>
    ),
    title: "گزارشات",
  },
  {
    id: 4,
    bgClass: "bg-[#CFD0DB]",
    textClass: "text-[#6C757D]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.1rem"
        height="1.1rem"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
      >
        <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
      </svg>
    ),
    title: " سایر",
  },
];

// data MessagesModal
const messageItems = [
  {
    id: 1,
    avatar: "م",
    avatarBg: "bg-[#0abb87]",
    name: " محمد زینالی",
    time: "08:50",
  },
  {
    id: 2,
    avatar: "ج",
    avatarBg: "bg-[#5867dd]",
    name: "جان اسنو",
    time: "10:23",
  },
  {
    id: 3,
    avatar: "ک",
    avatarBg: "bg-third",
    name: "استیو جابز",
    time: "09:33",
  },
  {
    id: 4,
    avatar: "آ",
    avatarBg: "bg-[#55a6eb]",
    name: "استیو راجرز",
    time: "20:13",
  },
];

// data NotificationsModal
const notificationItems = [
  {
    id: 1,
    bgIcon: "bg-[#CCE4F9]",
    icon: (
      <svg
        fill="none"
        stroke="#59A8EB"
        strokeWidth="1.5"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        ></path>
      </svg>
    ),
    description: "استیو جابز یک ضمیمه جدید به تیکت افزود گزارش باگ نرم افزار",
    clock: "8 ساعت پیش",
  },
  {
    id: 2,
    bgIcon: "bg-[rgba(255,184,34,0.3)]",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#ffc107"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    description: "کاترین یک تیکت جدید ثبت کرد نحوه پرداخت ",
    clock: "دیروز",
  },
  {
    id: 3,
    bgIcon: "bg-[rgba(10,187,135,0.3)]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#0abb87"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    description: " کاترین تنظیمات دسته تیکت را تغییر داد پرداخت و صورتحساب ",
    clock: "1 روز پیش",
  },
];

// data social Item
const socialItems = [
  {
    id: 1,
    linkSocial: "https://linkedin.com/in/mohammad-zeynali-816a55228",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="w-6 h-6 text-[#0077b5]"
        viewBox="0 0 1024 1024"
      >
        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    linkSocial: "https://wa.me/9911406098",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="w-6 h-6 text-[#43d854]"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    linkSocial: "https://t.me/zeynali2003/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="w-6 h-6 text-[#378ed0]"
        viewBox="0 0 448 512"
      >
        <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    linkSocial: "mailto:051.mhmdzynaly977@gmail.co",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        x="0"
        y="0"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="w-6 h-6"
        viewBox="0 0 48 48"
      >
        <path
          fill="#FFC107"
          d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
        ></path>
        <path
          fill="#FF3D00"
          d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
        ></path>
        <path
          fill="#4CAF50"
          d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
        ></path>
        <path
          fill="#1976D2"
          d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
        ></path>
      </svg>
    ),
  },
];

const StatisticsSliderItems = [
  {
    id: 1,
    title: "همه",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-white w-5 h-5"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a1 1 0 011-1h2a1 1 0 011 1v12h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1v-3a1 1 0 011-1h2a1 1 0 011 1v3h1V7a1 1 0 011-1h2a1 1 0 011 1v7h1V2z"></path>
      </svg>
    ),
    progressValueColor: "[&::-webkit-progress-value]:bg-third",
    textColor: "text-third",
    bgColor: "bg-third",
    count: 2_587,
    progressValue: 75,
  },
  {
    id: 2,
    title: "مستقیم",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="text-white w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
        />
      </svg>
    ),
    progressValueColor: "[&::-webkit-progress-value]:bg-[#0abb87]",
    textColor: "text-[#0abb87]",
    bgColor: "bg-[#0abb87]",
    count: 562,
    progressValue: 35,
  },
  {
    id: 3,
    title: "تلفن",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="text-white w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    progressValueColor: "[&::-webkit-progress-value]:bg-[#55a6eb]",
    textColor: "text-[#55a6eb]",
    bgColor: "bg-[#55a6eb]",
    count: 256,
    progressValue: 45,
  },
  {
    id: 4,
    title: "فیسبوک",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-white w-5 h-5"
        viewBox="0 0 16 16"
      >
        <path d="M9.5 3H12V0H9.5C7.57 0 6 1.57 6 3.5V5H4v3h2v8h3V8h2.5l.5-3H9V3.5c0-.271.229-.5.5-.5z"></path>
      </svg>
    ),
    progressValueColor: "[&::-webkit-progress-value]:bg-[#3b5998]",
    textColor: "text-[#3b5998]",
    bgColor: "bg-[#3b5998]",
    count: 147,
    progressValue: 50,
  },
  {
    id: 5,
    title: "واتس اپ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-white w-5 h-5"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
      </svg>
    ),
    progressValueColor: "[&::-webkit-progress-value]:bg-[#43d854]",
    textColor: "text-[#43d854]",
    bgColor: "bg-[#43d854]",
    count: 847,
    progressValue: 40,
  },
  {
    id: 6,
    title: " اینستاگرام",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-white w-5 h-5"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z"></path>
      </svg>
    ),
    progressValueColor: "[&::-webkit-progress-value]:bg-[#3f729b]",
    textColor: "text-[#3f729b]",
    bgColor: "bg-[#3f729b]",
    count: 1968,
    progressValue: 70,
  },
  {
    id: 7,
    title: " گوگل",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-white w-5 h-5"
        viewBox="0 0 16 16"
      >
        <path d="M15.545 6.558a9.42 9.42 0 01.139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 118 0a7.689 7.689 0 015.352 2.082l-2.284 2.284A4.347 4.347 0 008 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 000 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 001.599-2.431H8v-3.08h7.545z"></path>
      </svg>
    ),
    progressValueColor: "[&::-webkit-progress-value]:bg-[#FF3D00]",
    textColor: "text-[#FF3D00]",
    bgColor: "bg-[#FF3D00]",
    count: 3654,
    progressValue: 85,
  },
  {
    id: 8,
    title: " سایر",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="text-white w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
    progressValueColor: "[&::-webkit-progress-value]:bg-[#ffb822]",
    textColor: "text-[#ffb822]",
    bgColor: "bg-[#ffb822]",
    count: 206,
    progressValue: 45,
  },
];


const totalCustomersData = [
  {
    id: 1,
    title: "کل مشتریان",
    chart: (
      <svg width="100" height="50" className="peity">
        <path fill="#5867DD" d="M1 38.889H9V50H1z" data-value="2"></path>
        <path
          fill="rgba(88, 103, 221, 0.3)"
          d="M11 22.222H19V50H11z"
          data-value="5"
        ></path>
        <path fill="#5867DD" d="M21 0H29V50H21z" data-value="9"></path>
        <path
          fill="rgba(88, 103, 221, 0.3)"
          d="M31 16.667H39V50H31z"
          data-value="6"
        ></path>
        <path fill="#5867DD" d="M41 22.222H49V50H41z" data-value="5"></path>
        <path
          fill="rgba(88, 103, 221, 0.3)"
          d="M51 38.889H59V50H51z"
          data-value="2"
        ></path>
        <path fill="#5867DD" d="M61 27.778H69V50H61z" data-value="4"></path>
        <path
          fill="rgba(88, 103, 221, 0.3)"
          d="M71 33.333H79V50H71z"
          data-value="3"
        ></path>
        <path fill="#5867DD" d="M81 11.111H89V50H81z" data-value="7"></path>
        <path
          fill="rgba(88, 103, 221, 0.3)"
          d="M91 22.222H99V50H91z"
          data-value="5"
        ></path>
      </svg>
    ),
    count: 1_241,
    status: " 23% افزایش در هفته پیش",
    textClass: "text-primary",
  },
  {
    id: 2,
    title: "میانگین سفارش",
    chart: (
      <svg width="100" height="50" className="peity">
        <path fill="#0ABB87" d="M1 38.889H9V50H1z" data-value="2"></path>
        <path
          fill="rgba(10, 187, 135, 0.3)"
          d="M11 22.222H19V50H11z"
          data-value="5"
        ></path>
        <path fill="#0ABB87" d="M21 0H29V50H21z" data-value="9"></path>
        <path
          fill="rgba(10, 187, 135, 0.3)"
          d="M31 16.667H39V50H31z"
          data-value="6"
        ></path>
        <path fill="#0ABB87" d="M41 22.222H49V50H41z" data-value="5"></path>
        <path
          fill="rgba(10, 187, 135, 0.3)"
          d="M51 38.889H59V50H51z"
          data-value="2"
        ></path>
        <path fill="#0ABB87" d="M61 27.778H69V50H61z" data-value="4"></path>
        <path
          fill="rgba(10, 187, 135, 0.3)"
          d="M71 33.333H79V50H71z"
          data-value="3"
        ></path>
        <path fill="#0ABB87" d="M81 11.111H89V50H81z" data-value="7"></path>
        <path
          fill="rgba(10, 187, 135, 0.3)"
          d="M91 22.222H99V50H91z"
          data-value="5"
        ></path>
      </svg>
    ),
    count: 732_520,
    status: "4 واحد کمتر از هفته پیش",
    classBetween: "xl:mr-4",
    textClass: "text-secondary",
  },
];

const averageSale = [
  {
    id: 1,
    title: "گوگل",
    progressPercent: 42,
    progressValueColor: "[&::-webkit-progress-value]:bg-[#FF3D00]",
  },
  {
    id: 2,
    title: "اینستاگرام",
    progressPercent: 34,
    progressValueColor: "[&::-webkit-progress-value]:bg-[#3f729b]",
  },
  {
    id: 3,
    title: "واتس اپ",
    progressPercent: 60,
    progressValueColor: "[&::-webkit-progress-value]:bg-[#43d854]",
  },
  {
    id: 4,
    title: "فیسبوک",
    progressPercent: 20,
    progressValueColor: "[&::-webkit-progress-value]:bg-[#3b5998]",
  },
  {
    id: 5,
    title: "لینکدین",
    progressPercent: 30,
    progressValueColor: "[&::-webkit-progress-value]:bg-[#55a6eb]",
  },
]

const incomeItems = [
  {
    id: 1,
    title: "سود ناخالص",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-secondary w-5 h-5"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a1 1 0 011-1h2a1 1 0 011 1v12h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1v-3a1 1 0 011-1h2a1 1 0 011 1v3h1V7a1 1 0 011-1h2a1 1 0 011 1v7h1V2z"></path>
      </svg>
    ),
    price: 1_958_104,
    borderClass: "border-secondary",
  },
  {
    id: 2,
    title: " کسر مالیات",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-third w-5 h-5"
        viewBox="0 0 576 512"
      >
        <path d="M556.686 290.542L410.328 64.829C397.001 44.272 374.417 32 349.917 32H56C25.121 32 0 57.122 0 88v8c0 44.112 35.888 80 80 80h196.042l-18.333 48H144c-48.523 0-88 39.477-88 88 0 30.879 25.121 56 56 56h131.552c2.987 0 5.914.549 8.697 1.631L352 408.418V480h224V355.829c0-23.225-6.679-45.801-19.314-65.287zM528 432H400v-23.582c0-19.948-12.014-37.508-30.604-44.736l-99.751-38.788A71.733 71.733 0 00243.552 320H112c-4.411 0-8-3.589-8-8 0-22.056 17.944-40 40-40h113.709c19.767 0 37.786-12.407 44.84-30.873l24.552-64.281c8.996-23.553-8.428-48.846-33.63-48.846H80c-17.645 0-32-14.355-32-32v-8c0-4.411 3.589-8 8-8h293.917c8.166 0 15.693 4.09 20.137 10.942l146.358 225.715A71.84 71.84 0 01528 355.829V432z"></path>
      </svg>
    ),
    price: 234_769,
    borderClass: "border-third",
  },
  {
    id: 3,
    title: "سود خالص",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="text-[#ffb822] w-5 h-5"
        viewBox="0 0 288 512"
      >
        <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
      </svg>
    ),
    price: 1_608_469,
    borderClass: "border-[#ffb822]",
  },
];


const allIncomeItemData = [
  {id: 1, date:'1402/03/1',saleCount:1_050,grossProfit:32_580,tax:3_023,netProfit:28_670},
  {id: 2, date:'1402/03/2',saleCount:780,grossProfit:22_380,tax:2_233,netProfit:20_147},
  {id: 3, date:'1402/03/3',saleCount:1_980,grossProfit:39_580,tax:3_583,netProfit:35_997},
  {id: 4, date:'1402/03/4',saleCount:300,grossProfit:12_580,tax:1_075,netProfit:11_505},
  {id: 5, date:'1402/03/5',saleCount:940,grossProfit:24_580,tax:2_750,netProfit:21_730},
  {id: 6, date:'1402/03/6',saleCount:1_280,grossProfit:28_580,tax:2_930,netProfit:25_650},
]

export {
  accessItems,
  summaryItems,
  messageItems,
  notificationItems,
  socialItems,
  StatisticsSliderItems,
  totalCustomersData,
  averageSale,
  incomeItems,
  allIncomeItemData,
};
