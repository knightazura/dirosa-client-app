var liftIcons = {
  methods: {
    liftUpIcon(iconID, customStyle = { degree: '-30-deg', topPosition: '-35px' }) {
      const svgIcon = document.getElementById(iconID);
      svgIcon.style.top = customStyle.topPosition;
      svgIcon.classList.add(`icon-rotate${customStyle.degree}`);
    },
    liftDownIcon(iconID, customStyle = { degree: '-30-deg', topPosition: '-20px' }) {
      const svgIcon = document.getElementById(iconID);
      svgIcon.style.top = customStyle.topPosition;
      svgIcon.classList.remove(`icon-rotate${customStyle.degree}`);
    }
  }
}

export {
  liftIcons
}