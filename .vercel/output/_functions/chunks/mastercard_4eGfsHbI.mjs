const mastercard = new Proxy({"src":"/_astro/mastercard.C3E8AhNL.png","width":51,"height":32,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/payment/mastercard.png";
							}
							
							return target[name];
						}
					});

export { mastercard as default };
