const upay = new Proxy({"src":"/_astro/upay.Cq8JvJdd.png","width":204,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/payment/upay.png";
							}
							
							return target[name];
						}
					});

export { upay as default };
