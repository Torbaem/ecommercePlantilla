const nagad = new Proxy({"src":"/_astro/nagad.CxU9QDru.png","width":204,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/payment/nagad.png";
							}
							
							return target[name];
						}
					});

export { nagad as default };
