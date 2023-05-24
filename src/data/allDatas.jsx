////////////////////////////////////////// data page SalesAndManagement //////////////////////////////////////////////

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

// data Slider network sales
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
    progressValueColor: "bg-third",
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
    progressValueColor: "bg-[#0abb87]",
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
    progressValueColor: "bg-[#55a6eb]",
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
    progressValueColor: "bg-[#3b5998]",
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
    progressValueColor: "bg-[#43d854]",
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
    progressValueColor: "bg-[#3f729b]",
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
    progressValueColor: "bg-[#FF3D00]",
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
    progressValueColor: "bg-[#ffb822]",
    textColor: "text-[#ffb822]",
    bgColor: "bg-[#ffb822]",
    count: 206,
    progressValue: 45,
  },
];

// data chart reports
const reportChartData = [
  {
    name: "1391",
    average: 100,
    sale: 200,
  },
  {
    name: "1392",
    average: 200,
    sale: 300,
  },
  {
    name: "1393",
    average: 300,
    sale: 400,
  },
  {
    name: "1394",
    average: 400,
    sale: 500,
  },
  {
    name: "1395",
    average: 500,
    sale: 600,
  },
  {
    name: "1396",
    average: 600,
    sale: 700,
  },
  {
    name: "1397",
    average: 700,
    sale: 800,
  },
  {
    name: "1398",
    average: 800,
    sale: 900,
  },
];

// data chart regional sales
const regionalSalesChartData = [
  {
    name: "آفریقا",
    population: 1216,
  },
  {
    name: "آسیا",
    population: 4561,
  },
  {
    name: "اروپا",
    population: 746,
  },
  {
    name: "آمریکا",
    population: 1002,
  },
  {
    name: "استرالیا",
    population: 26,
  },
];

// data chart customers
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

// data chart status buy chart
const statusBuyChartData = [
  {
    name: "فروردین",
    success: 10,
    back: 15,
  },
  {
    name: "اردیبهشت",

    success: 20,
    back: 10,
  },
  {
    name: "خرداد",

    success: 35,
    back: 11,
  },
  {
    name: "تیر",

    success: 43,
    back: 5,
  },
  {
    name: "مرداد",

    success: 57,
    back: 8,
  },
  {
    name: "شهریور",

    success: 64,
    back: 14,
  },
  {
    name: "مهر",

    success: 73,
    back: 9,
  },
  {
    name: "آبان",

    success: 57,
    back: 13,
  },
  {
    name: "آذر",

    success: 45,
    back: 7,
  },
  {
    name: "دی",

    success: 62,
    back: 14,
  },
  {
    name: "بهمن",

    success: 96,
    back: 11,
  },
  {
    name: "اسفند",

    success: 120,
    back: 15,
  },
];

// data networks sales & Average
const averageSale = [
  {
    id: 1,
    title: "گوگل",
    progressPercent: 42,
    progressValueColor: "bg-[#FF3D00]",
  },
  {
    id: 2,
    title: "اینستاگرام",
    progressPercent: 34,
    progressValueColor: "bg-[#3f729b]",
  },
  {
    id: 3,
    title: "واتس اپ",
    progressPercent: 60,
    progressValueColor: "bg-[#43d854]",
  },
  {
    id: 4,
    title: "فیسبوک",
    progressPercent: 20,
    progressValueColor: "bg-[#3b5998]",
  },
  {
    id: 5,
    title: "لینکدین",
    progressPercent: 30,
    progressValueColor: "bg-[#55a6eb]",
  },
];

//data income Box
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

// all data table income
const allIncomeItemData = [
  {
    id: 1,
    date: "1402/03/1",
    saleCount: 1_050,
    grossProfit: 32_580,
    tax: 3_023,
    netProfit: 28_670,
  },
  {
    id: 2,
    date: "1402/03/2",
    saleCount: 780,
    grossProfit: 22_380,
    tax: 2_233,
    netProfit: 20_147,
  },
  {
    id: 3,
    date: "1402/03/3",
    saleCount: 1_980,
    grossProfit: 39_580,
    tax: 3_583,
    netProfit: 35_997,
  },
  {
    id: 4,
    date: "1402/03/4",
    saleCount: 300,
    grossProfit: 12_580,
    tax: 1_075,
    netProfit: 11_505,
  },
  {
    id: 5,
    date: "1402/03/5",
    saleCount: 940,
    grossProfit: 24_580,
    tax: 2_750,
    netProfit: 21_730,
  },
  {
    id: 6,
    date: "1402/03/6",
    saleCount: 1_280,
    grossProfit: 28_580,
    tax: 2_930,
    netProfit: 25_650,
  },
];

// all data recent customers data
const recentCustomersData = [
  {
    id: 1,
    avatar: "./assets/images/customers/customer-1.jpg",
    name: "محمد زینالی",
    productName: "ایرپاد",
    productCount: 2,
    statusPayment: false,
  },
  {
    id: 2,
    avatar: "./assets/images/customers/customer-2.jpg",
    name: " حمید نعمتی",
    productName: "هندزفری بلوتوثی",
    productCount: 1,
    statusPayment: true,
  },
  {
    id: 3,
    avatar: "./assets/images/customers/customer-3.jpg",
    name: "  رضا همتلو",
    productName: " موبایل",
    productCount: 1,
    statusPayment: true,
  },
  {
    id: 4,
    avatar: "./assets/images/customers/customer-4.jpg",
    name: "محمد محمدی",
    productName: " فلش مموری",
    productCount: 1,
    statusPayment: false,
  },
  {
    id: 5,
    avatar: "./assets/images/customers/customer-5.jpg",
    name: "   بابک احمدی",
    productName: " کول پد",
    productCount: 1,
    statusPayment: true,
  },
];

/* *************************************************************************************************************** */

////////////////////////////////////////// data page support //////////////////////////////////////////////
// all data support Time Boxes
const supportTimeBoxes = [
  {
    id: 1,
    img: "./assets/images/supportChart/complaintsChart.png",
    percent: 65,
    title: "زمان رسیدگی به شکایت",
    caption: "میانگین زمان رسیدگی",
    time: "در اولین فرصت کاری",
  },
  {
    id: 2,
    img: "./assets/images/supportChart/responseSpeedChart.png",
    percent: 42,
    title: "میانگین سرعت پاسخ",
    caption: "میانگین زمان پاسخ",
    time: "کمتر از یک ساعت",
  },
];

// all data ticket messages items
const ticketMessagesItems = [
  {
    id: 1,
    ticketTitle: " تیکت جدید",
    ticketCount: 321,
    growth: 1.2,
    growthColor: "text-secondary",
    progressColor: "bg-primary",
    progressPercent: 85,
  },
  {
    id: 2,
    ticketTitle: " تیکت حل شده",
    ticketCount: 70,
    growth: "2.2",
    growthColor: "text-third",
    progressColor: "bg-secondary",
    progressPercent: 25,
  },
  {
    id: 3,
    ticketTitle: "تیکت باز",
    ticketCount: 100,
    growth: 4.2,
    growthColor: "text-secondary",
    progressColor: "bg-[#55a6eb]",
    progressPercent: 55,
  },
  {
    id: 4,
    ticketTitle: " تیکت در انتظار",
    ticketCount: 125,
    growth: 4.2,
    growthColor: "text-secondary",
    progressColor: "bg-[#ffb822]",
    progressPercent: 75,
  },
];

// all data ticket status chart data
const ticketStatusChartData = [
  {
    name: "فروردین",
    newTicket: 40,
    solvedTicket: 10,
    pendingTicket: 17,
  },
  {
    name: "اردیبهشت",
    newTicket: 47,
    solvedTicket: 12,
    pendingTicket: 11,
  },
  {
    name: "خرداد",
    newTicket: 44,
    solvedTicket: 7,
    pendingTicket: 22,
  },
  {
    name: "تیر",
    newTicket: 38,
    solvedTicket: 5,
    pendingTicket: 18,
  },
  {
    name: "مرداد",
    newTicket: 27,
    solvedTicket: 4,
    pendingTicket: 12,
  },
  {
    name: "شهریور",
    newTicket: 40,
    solvedTicket: 10,
    pendingTicket: 17,
  },
  {
    name: "مهر",
    newTicket: 47,
    solvedTicket: 12,
    pendingTicket: 11,
  },
  {
    name: "آبان",
    newTicket: 44,
    solvedTicket: 7,
    pendingTicket: 22,
  },
  {
    name: "آذر",
    newTicket: 38,
    solvedTicket: 5,
    pendingTicket: 18,
  },
  {
    name: "دی",
    newTicket: 27,
    solvedTicket: 4,
    pendingTicket: 12,
  },
  {
    name: "بهمن",
    newTicket: 40,
    solvedTicket: 10,
    pendingTicket: 17,
  },
  {
    name: "اسفند",
    newTicket: 27,
    solvedTicket: 12,
    pendingTicket: 11,
  },
];

/* *************************************************************************************************************** */

////////////////////////////////////////// data page wesite statistics  //////////////////////////////////////////////

// data general Statistics Items
const generalStatisticsData = [
  {
    id: 1,
    statisticsCount: 3_605,
    type: "تعداد کلیک",
    color: "text-primary",
    caption: "لورم ایپسوم",
    avatar: (
      <svg width="60" height="60" className="peity">
        <path
          fill="rgba(88, 103, 221, 0.3)"
          d="M30 0a30 30 0 0117.634 54.27L30 30"
          data-value="2"
        ></path>
        <path
          fill="#5867DD"
          d="M47.634 54.27A30 30 0 1130 0v30"
          data-value="3"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    statisticsCount: 3_137,
    type: "تعداد بازدید",
    color: "text-secondary",
    caption: "لورم ایپسوم",
    avatar: (
      <svg width="60" height="60" className="peity">
        <path
          fill="rgba(10, 187, 135, 0.3)"
          d="M30 0A30 30 0 111.468 20.73L30 30"
          data-value="4"
        ></path>
        <path
          fill="#0ABB87"
          d="M1.468 20.73A30 30 0 0130 0v30"
          data-value="1"
        ></path>
      </svg>
    ),
  },
  {
    id: 3,
    statisticsCount: 8_765,
    type: "مجموع تبدیل",
    color: "text-[#FFB822]",
    caption: "لورم ایپسوم",
    avatar: (
      <svg width="60" height="60" className="peity">
        <path
          fill="rgba(255, 184, 34, 0.3)"
          d="M30 0a30 30 0 0128.532 20.73L30 30"
          data-value="1"
        ></path>
        <path
          fill="#FFB822"
          d="M58.532 20.73A30 30 0 1130 0v30"
          data-value="4"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    statisticsCount: 68,
    type: "نرخ بارگذاری صفحه",
    color: "text-[#55A6EB]",
    caption: "لورم ایپسوم",
    avatar: (
      <svg width="60" height="60" className="peity">
        <path
          fill="rgba(85, 166, 235, 0.3)"
          d="M30 0a30 30 0 0117.634 54.27L30 30"
          data-value="2"
        ></path>
        <path
          fill="#55A6EB"
          d="M47.634 54.27A30 30 0 1130 0v30"
          data-value="3"
        ></path>
      </svg>
    ),
  },
];

const devicesStatisticsChartData = [
  {
    mobile: 2000,
    desktop: 1000,
    other: 250,
  },
  {
    mobile: 2150,
    desktop: 1050,
    other: 280,
  },
  {
    mobile: 2300,
    desktop: 1200,
    other: 350,
  },
  {
    mobile: 2400,
    desktop: 980,
    other: 320,
  },
  {
    mobile: 2500,
    desktop: 850,
    other: 200,
  },
  {
    mobile: 2600,
    desktop: 1300,
    other: 500,
  },
  {
    mobile: 4300,
    desktop: 1800,
    other: 550,
  },
  {
    mobile: 3000,
    desktop: 1500,
    other: 400,
  },
  {
    mobile: 3500,
    desktop: 1300,
    other: 450,
  },
  {
    mobile: 3300,
    desktop: 1150,
    other: 390,
  },
];

//data total views items
const totalViewsItems = [
  {
    id: 1,
    title: "صفحه اصلی",
    percent: 65.35,
    progressColor: "bg-[#55a6eb]",
  },
  {
    id: 2,
    title: "درباره من	",
    percent: 51.2,
    progressColor: "bg-[#FFB822]",
  },
  {
    id: 3,
    title: "محصولات	",
    percent: 38.5,
    progressColor: "bg-third",
  },
  {
    id: 4,
    title: " دسته‌بندی ها	",
    percent: 40,
    progressColor: "bg-primary",
  },
  {
    id: 5,
    title: "تماس",
    percent: 80,
    progressColor: "bg-secondary",
  },
];

//data visitors Browser Items
const visitorsBrowserItems = [
  {
    id: 1,
    name: "گوگل کروم",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          stroke="none"
          d="M16 8a8.001 8.001 0 01-7.022 7.94l1.902-7.098a2.995 2.995 0 00.05-1.492A2.977 2.977 0 0010.237 6h5.511A8 8 0 0116 8zM0 8a8 8 0 007.927 8l1.426-5.321a2.978 2.978 0 01-.723.255 2.979 2.979 0 01-1.743-.147 2.986 2.986 0 01-1.043-.7L.633 4.876A7.975 7.975 0 000 8zm5.004-.167L1.108 3.936A8.003 8.003 0 0115.418 5H8.066a2.979 2.979 0 00-1.252.243 2.987 2.987 0 00-1.81 2.59zM8 10a2 2 0 100-4 2 2 0 000 4z"
        ></path>
      </svg>
    ),
    percentUsage: 80,
    progressColor: "bg-secondary",
    userCounts: 6_000,
  },
  {
    id: 2,
    name: "فایرفاکس",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
      >
        <path
          stroke="none"
          d="M13.384 3.408c.535.276 1.22 1.152 1.556 1.963a7.98 7.98 0 01.503 3.897l-.009.077a8.533 8.533 0 01-.026.224A7.758 7.758 0 01.006 8.257v-.04c.016-.363.055-.724.114-1.082.01-.074.075-.42.09-.489l.01-.051a6.551 6.551 0 011.041-2.35c.217-.31.46-.6.725-.87.233-.238.487-.456.758-.65a1.5 1.5 0 01.26-.137c-.018.268-.04 1.553.268 1.943h.003a5.744 5.744 0 011.868-1.443 3.597 3.597 0 00.021 1.896c.07.047.137.098.2.152.107.09.226.207.454.433l.068.066.009.009a1.933 1.933 0 00.213.18c.383.287.943.563 1.306.741.201.1.342.168.359.193l.004.008c-.012.193-.695.858-.933.858-2.206 0-2.564 1.335-2.564 1.335.087.997.714 1.839 1.517 2.357a3.72 3.72 0 00.439.241c.076.034.152.065.228.094.325.115.665.18 1.01.194 3.043.143 4.155-2.804 3.129-4.745v-.001a3.005 3.005 0 00-.731-.9 2.945 2.945 0 00-.571-.37l-.003-.002a2.679 2.679 0 011.87.454 3.915 3.915 0 00-3.396-1.983c-.078 0-.153.005-.23.01l-.042.003V4.31h-.002a3.882 3.882 0 00-.8.14 6.454 6.454 0 00-.333-.314 2.321 2.321 0 00-.2-.152 3.594 3.594 0 01-.088-.383 4.88 4.88 0 011.352-.289l.05-.003c.052-.004.125-.01.205-.012C7.996 2.212 8.733.843 10.17.002l-.003.005.003-.001.002-.002h.002l.002-.002a.028.028 0 01.015 0 .02.02 0 01.012.007 2.408 2.408 0 00.206.48c.06.103.122.2.183.297.49.774 1.023 1.379 1.543 1.968.771.874 1.512 1.715 2.036 3.02l-.001-.013a8.06 8.06 0 00-.786-2.353z"
        ></path>
      </svg>
    ),
    percentUsage: 62,
    progressColor: "bg-[#FF652A]",
    userCounts: 3_800,
  },
  {
    id: 3,
    name: "اج",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
      >
        <path
          stroke="none"
          d="M25.71 228.16l.35-.48c0 .16 0 .32-.07.48zm460.58 15.51c0-44-7.76-84.46-28.81-122.4C416.5 47.88 343.91 8 258.89 8 119 7.72 40.62 113.21 26.06 227.68c42.42-61.31 117.07-121.38 220.37-125 0 0 109.67 0 99.42 105H170c6.37-37.39 18.55-59 34.34-78.93-75.05 34.9-121.85 96.1-120.75 188.32.83 71.45 50.13 144.84 120.75 172 83.35 31.84 192.77 7.2 240.13-21.33V363.31c-80.87 56.49-270.87 60.92-272.26-67.57h314.08v-52.07z"
        ></path>
      </svg>
    ),
    percentUsage: 36,
    progressColor: "bg-[#2EC2DD]",
    userCounts: 2_400,
  },
  {
    id: 4,
    name: "سافاری",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
      >
        <path
          stroke="none"
          d="M8 16A8 8 0 108 0a8 8 0 000 16zm.25-14.75v1.5a.25.25 0 01-.5 0v-1.5a.25.25 0 01.5 0zm0 12v1.5a.25.25 0 11-.5 0v-1.5a.25.25 0 11.5 0zM4.5 1.938a.25.25 0 01.342.091l.75 1.3a.25.25 0 01-.434.25l-.75-1.3a.25.25 0 01.092-.341zm6 10.392a.25.25 0 01.341.092l.75 1.299a.25.25 0 11-.432.25l-.75-1.3a.25.25 0 01.091-.34zM2.28 4.408l1.298.75a.25.25 0 01-.25.434l-1.299-.75a.25.25 0 01.25-.434zm10.392 6l1.299.75a.25.25 0 11-.25.434l-1.3-.75a.25.25 0 01.25-.434zM1 8a.25.25 0 01.25-.25h1.5a.25.25 0 010 .5h-1.5A.25.25 0 011 8zm12 0a.25.25 0 01.25-.25h1.5a.25.25 0 110 .5h-1.5A.25.25 0 0113 8zM2.03 11.159l1.298-.75a.25.25 0 01.25.432l-1.299.75a.25.25 0 01-.25-.432zm10.392-6l1.299-.75a.25.25 0 11.25.433l-1.3.75a.25.25 0 01-.25-.434zM4.5 14.061a.25.25 0 01-.092-.341l.75-1.3a.25.25 0 01.434.25l-.75 1.3a.25.25 0 01-.342.091zm6-10.392a.25.25 0 01-.091-.342l.75-1.299a.25.25 0 11.432.25l-.75 1.3a.25.25 0 01-.341.09zM6.494 1.415l.13.483a.25.25 0 11-.483.13l-.13-.483a.25.25 0 01.483-.13zM9.86 13.972l.13.483a.25.25 0 11-.483.13l-.13-.483a.25.25 0 01.483-.13zM3.05 3.05a.25.25 0 01.354 0l.353.354a.25.25 0 01-.353.353l-.354-.353a.25.25 0 010-.354zm9.193 9.193a.25.25 0 01.353 0l.354.353a.25.25 0 11-.354.354l-.353-.354a.25.25 0 010-.353zM1.545 6.01l.483.13a.25.25 0 11-.13.483l-.483-.13a.25.25 0 11.13-.482zm12.557 3.365l.483.13a.25.25 0 11-.13.483l-.483-.13a.25.25 0 11.13-.483zm-12.863.436a.25.25 0 01.176-.306l.483-.13a.25.25 0 11.13.483l-.483.13a.25.25 0 01-.306-.177zm12.557-3.365a.25.25 0 01.176-.306l.483-.13a.25.25 0 11.13.483l-.483.13a.25.25 0 01-.306-.177zM3.045 12.944a.299.299 0 01-.029-.376l3.898-5.592a.25.25 0 01.062-.062l5.602-3.884a.278.278 0 01.392.392L9.086 9.024a.25.25 0 01-.062.062l-5.592 3.898a.299.299 0 01-.382-.034l-.005-.006zm3.143 1.817a.25.25 0 01-.176-.306l.129-.483a.25.25 0 01.483.13l-.13.483a.25.25 0 01-.306.176zM9.553 2.204a.25.25 0 01-.177-.306l.13-.483a.25.25 0 11.483.13l-.13.483a.25.25 0 01-.306.176z"
        ></path>
      </svg>
    ),
    percentUsage: 28,
    progressColor: "bg-[#26A5F3]",
    userCounts: 1_600,
  },
  {
    id: 5,
    name: "اوپرا",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 496 512"
      >
        <path
          stroke="none"
          d="M313.9 32.7c-170.2 0-252.6 223.8-147.5 355.1 36.5 45.4 88.6 75.6 147.5 75.6 36.3 0 70.3-11.1 99.4-30.4-43.8 39.2-101.9 63-165.3 63-3.9 0-8 0-11.9-.3C104.6 489.6 0 381.1 0 248 0 111 111 0 248 0h.8c63.1.3 120.7 24.1 164.4 63.1-29-19.4-63.1-30.4-99.3-30.4zm101.8 397.7c-40.9 24.7-90.7 23.6-132-5.8 56.2-20.5 97.7-91.6 97.7-176.6 0-84.7-41.2-155.8-97.4-176.6 41.8-29.2 91.2-30.3 132.9-5 105.9 98.7 105.5 265.7-1.2 364z"
        ></path>
      </svg>
    ),
    percentUsage: 24,
    progressColor: "bg-[#FF4B4B]",
    userCounts: 1_200,
  },
];




/* *************************************************************************************************************** */

//////////////////////////////// data page wesite user Profile Information  ////////////////////////////////

const userProfileInformation = [
  { id: 1, informationKey: "نام", informationValue: "محمد" },
  { id: 2, informationKey: "نام خانوادگی", informationValue: "زینالی" },
  { id: 3, informationKey: "سن", informationValue: 19 },
  { id: 4, informationKey: "شغل", informationValue: "توسعه دهنده Front-end" },
  { id: 5, informationKey: "شهر", informationValue: "تبریز" },
  { id: 6, informationKey: "تلفن", informationValue: "09911406098" },
  {
    id: 7,
    informationKey: "ایمیل",
    informationValue: "mhmdzynaly977@gmail.com",
  },
];


const userProfileSkillsData = [
  { id: 1, skill: "HTML5", progressSkill: 95, colorProgress: "bg-[#ffb822]" },
  { id: 2, skill: "css3", progressSkill: 95, colorProgress: "bg-[#2862E9]" },
  { id: 3, skill: "sass", progressSkill: 90, colorProgress: "bg-[#C4588D]" },
  {
    id: 4,
    skill: "Bootstrap",
    progressSkill: 90,
    colorProgress: "bg-[#6F11EF]",
  },
  {
    id: 5,
    skill: "TailwindCSS",
    progressSkill: 90,
    colorProgress: "bg-[#38BDF8]",
  },
  {
    id: 6,
    skill: "JavaScript",
    progressSkill: 75,
    colorProgress: "bg-[#E8D44D]",
  },
  {
    id: 7,
    skill: "React.js",
    progressSkill: 80,
    colorProgress: "bg-[#00D1F7]",
  },
  {
    id: 8,
    skill: "Redux",
    progressSkill: 80,
    colorProgress: "bg-[#7248B6]",
  },
];

export {
  accessItems,
  summaryItems,
  messageItems,
  notificationItems,
  socialItems,
  StatisticsSliderItems,
  reportChartData,
  regionalSalesChartData,
  totalCustomersData,
  averageSale,
  incomeItems,
  allIncomeItemData,
  recentCustomersData,
  supportTimeBoxes,
  ticketMessagesItems,
  ticketStatusChartData,
  statusBuyChartData,
  generalStatisticsData,
  devicesStatisticsChartData,
  totalViewsItems,
  visitorsBrowserItems,
  userProfileInformation,
};
