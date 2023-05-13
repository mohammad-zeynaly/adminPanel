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
    textClass: "text-[#e04b4b]",
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
  {id: 1, avatar: "م",avatarBg:"bg-[#0abb87]", name: " محمد زینالی",time: "08:50"},
  {id: 2, avatar: "ج",avatarBg:"bg-[#5867dd]", name: "جان اسنو",time: "10:23"},
  {id: 3, avatar: "ک",avatarBg:"bg-[#e04b4b]", name: "استیو جابز",time: "09:33"},
  {id: 4, avatar: "آ",avatarBg:"bg-[#55a6eb]", name: "استیو راجرز",time: "20:13"},

]

export { accessItems, summaryItems,messageItems };
