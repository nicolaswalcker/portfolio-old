export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const script = document.createElement('script');
    script.setAttribute('data-account', 'ZQbJWLp6Aq');
    script.setAttribute('src', 'https://cdn.userway.org/widget.js');
    document.body.appendChild(script);

    const noscript = document.createElement('noscript');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', 'https://userway.org');
    anchor.textContent = 'website accessibility';
    noscript.appendChild(
      document.createTextNode(
        'Please ensure Javascript is enabled for purposes of '
      )
    );
    noscript.appendChild(anchor);
    document.body.appendChild(noscript);
  }
});
