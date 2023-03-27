const sizes = {
    mobileS: '320px',
    mobile: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
  };

  export const device = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobile: `(min-width: ${sizes.mobile})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`
  };