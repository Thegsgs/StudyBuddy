export const initialChats = [
  {
    chatName: "Mila Gramm",
    messages: [
      { isOwn: false, content: "Hello, is this working?", createdAt: "13:01" },
      {
        isOwn: true,
        content: "Yep! Hearing you loud and clear!",
        createdAt: "13:02",
      },
      {
        isOwn: false,
        content: "Wow I can't believe it :O",
        createdAt: "13:03",
      },
      {
        isOwn: true,
        content: "Me neither!",
        createdAt: "13:05",
      },
    ],
  },
  {
    chatName: "Robert Fox",
    messages: [
      { isOwn: true, content: "Hey Bro!", createdAt: "13:01" },
      { isOwn: false, content: "Hey there Broski!", createdAt: "13:02" },
      {
        isOwn: true,
        content: "You ready to start a study session?",
        createdAt: "13:03",
      },
      { isOwn: false, content: "Of course!", createdAt: "13:04" },
    ],
  },
];
