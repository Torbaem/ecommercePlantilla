const staff = new Proxy({"src":"/_astro/staff.BsDLRaEV.png","width":832,"height":888,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/staff/staff.png";
							}
							
							return target[name];
						}
					});

export { staff as default };
