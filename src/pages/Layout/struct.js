export const layoutStruct = {
  style: { minHeight: '100vh' },
};

export const siderStruct = {
  theme: 'light',
  breakpoint: 'lg',
  collapsible: true,
  width: 193,
  reverseArrow: true,
};

export const headerStruct = {
  header: {
    wrap: 'wrap',
    gap: 'middle',
    justify: 'space-between',
    align: 'center',
  },

  userInfo: {
    user: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        border: 0,
        borderRadius: 0,
        borderBottom: '1px solid #dadada',
      },
    },

    userEmail: {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      },
    },

    userTitle: {
      level: 4,
    },
    userSemiTitle: {
      level: 5,
    },
    userText: {
      type: 'secondary',
      strong: true,
    },
  },

  actions: {
    gap: 'middle',
    wrap: 'wrap',
  },
};

export const contentStruct = {
  style: {
    margin: '0px 0px',
    minHeight: 280,
  },
};
