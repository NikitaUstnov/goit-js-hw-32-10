const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeColorSwichControlRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

themeColorSwichControlRef.addEventListener('change', onChangeTheme);
themeColorSwichControlRef.addEventListener('change', setLocalStorage);

function onChangeTheme() {
  if (themeColorSwichControlRef.checked) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
  }
}
function setLocalStorage() {
  if (themeColorSwichControlRef.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

if (localStorage.getItem('theme') === Theme.DARK) {
  bodyRef.classList.add(Theme.DARK);
  themeColorSwichControlRef.checked = true;
}
