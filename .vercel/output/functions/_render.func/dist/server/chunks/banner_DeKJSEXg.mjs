const banner = new Proxy({"src":"/_astro/banner.CwUY7-9G.png","width":771,"height":603,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/banner.png";
							}
							
							return target[name];
						}
					});

export { banner as default };
