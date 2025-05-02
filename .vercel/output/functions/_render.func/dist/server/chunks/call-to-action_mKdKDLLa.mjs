const callToAction = new Proxy({"src":"/_astro/call-to-action.CbSypqJ9.png","width":543,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/call-to-action.png";
							}
							
							return target[name];
						}
					});

export { callToAction as default };
