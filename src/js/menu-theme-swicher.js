const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeColorSwichControlRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

themeColorSwichControlRef.addEventListener('change', themeSwichControl);

const darkThemeOptions = {
  theme: Theme.DARK,
  checked: true,
};

const lightThemeOptions = {
  theme: Theme.LIGHT,
  checked: false,
};

function themeSwichControl(e) {
  const isChecked = e.currentTarget.checked;

  if (isChecked) {
    darkTheme();
  }
  if (!isChecked) {
    lightTheme();
  }
}

function darkTheme() {
  bodyRef.classList.add(darkThemeOptions.theme);
  bodyRef.classList.remove(lightThemeOptions.theme);
  themeColorSwichControlRef.checked = darkThemeOptions.checked;
  localStorage.setItem('dark-theme', JSON.stringify(darkThemeOptions));

  const opt = localStorage.getItem(JSON.parse('dark-theme'));
  console.log(opt);
}

function lightTheme() {
  bodyRef.classList.add(lightThemeOptions.theme);
  bodyRef.classList.remove(darkThemeOptions.theme);
  themeColorSwichControlRef.checked = lightThemeOptions.checked;
  localStorage.setItem('ligth-theme', JSON.stringify(lightThemeOptions));
}
