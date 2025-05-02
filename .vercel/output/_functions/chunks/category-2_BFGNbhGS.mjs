const category2 = new Proxy({"src":"/_astro/category-2.sAxZ-t6R.png","width":531,"height":383,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/category-2.png";
							}
							
							return target[name];
						}
					});

export { category2 as default };
