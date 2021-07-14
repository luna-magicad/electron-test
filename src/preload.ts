window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string | undefined): void => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text as string;
    }
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
})
