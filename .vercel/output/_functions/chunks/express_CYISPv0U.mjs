const express = new Proxy({"src":"/_astro/express.B0vMB2mb.png","width":51,"height":32,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/payment/express.png";
							}
							
							return target[name];
						}
					});

export { express as default };
