if (window.location.href === "https://discord.com/channels/@me") {
const LS = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
const LST = JSON.parse(LS.token);

console.log(LST)

GM_setValue("atoken", LST)
console.log(GM_getValue('atoken'));
}
