const product1 = new Proxy({"src":"/_astro/product-1.DkgRDHH6.png","width":722,"height":623,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/product-1.png";
							}
							
							return target[name];
						}
					});

export { product1 as default };
