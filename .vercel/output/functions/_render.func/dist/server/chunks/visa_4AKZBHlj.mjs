const visa = new Proxy({"src":"/_astro/visa.DUDq4n9C.png","width":51,"height":32,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/payment/visa.png";
							}
							
							return target[name];
						}
					});

export { visa as default };
