const ogImage = new Proxy({"src":"/_astro/og-image.DL3DW0Q_.png","width":1200,"height":900,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/og-image.png";
							}
							
							return target[name];
						}
					});

export { ogImage as default };
