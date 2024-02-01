const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"home":{"uri":"\/","methods":["GET","HEAD"]},"services.website":{"uri":"services\/website","methods":["GET","HEAD"]},"services.software":{"uri":"services\/software","methods":["GET","HEAD"]},"services.marketing":{"uri":"services\/marketing","methods":["GET","HEAD"]},"services":{"uri":"services","methods":["GET","HEAD"]},"about-us":{"uri":"about-us","methods":["GET","HEAD"]},"blog":{"uri":"blog","methods":["GET","HEAD"]},"contact-us":{"uri":"contact-us","methods":["GET","HEAD"]},"contact-us.post":{"uri":"contact-us","methods":["POST"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"contactusdata":{"uri":"contactusdata","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.update":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };