const category1 = new Proxy({"src":"/_astro/category-1.CThisMDi.png","width":531,"height":383,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/category-1.png";
							}
							
							return target[name];
						}
					});

export { category1 as default };
