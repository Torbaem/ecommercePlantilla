const logoDarkmode = new Proxy({"src":"/_astro/logo-darkmode.CmUzSGG8.png","width":215,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/logo-darkmode.png";
							}
							
							return target[name];
						}
					});

export { logoDarkmode as default };
