const aboutUs = new Proxy({"src":"/_astro/aboutUs.C85NQk5E.png","width":536,"height":449,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/aboutUs.png";
							}
							
							return target[name];
						}
					});

export { aboutUs as default };
