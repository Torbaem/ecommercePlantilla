const favicon = new Proxy({"src":"/_astro/favicon.ijnV5Fd7.png","width":25,"height":32,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/favicon.png";
							}
							
							return target[name];
						}
					});

export { favicon as default };
