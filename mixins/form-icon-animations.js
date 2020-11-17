var liftIcons = {
  methods: {
    liftUpIcon(iconID, customStyle = { degree: '-30-deg' }) {
      const svgIcon = document.getElementById(iconID);
      svgIcon.classList.add('icon-lift-up');
      svgIcon.classList.add(`icon-rotate${customStyle.degree}`);
    },
    liftDownIcon(iconID, customStyle = { degree: '-30-deg' }) {
      const svgIcon = document.getElementById(iconID);
      svgIcon.classList.remove('icon-lift-up');
      svgIcon.classList.remove(`icon-rotate${customStyle.degree}`);
    }
  }
}

export {
  liftIcons
}