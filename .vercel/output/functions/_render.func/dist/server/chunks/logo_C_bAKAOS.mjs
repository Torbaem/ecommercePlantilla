const logo = new Proxy({"src":"/_astro/logo.Co1w57ub.png","width":215,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/logo.png";
							}
							
							return target[name];
						}
					});

export { logo as default };
