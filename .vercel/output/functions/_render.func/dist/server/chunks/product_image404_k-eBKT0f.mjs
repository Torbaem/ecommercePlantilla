const product_image404 = new Proxy({"src":"/_astro/product_image404.XjUwuKhh.jpg","width":800,"height":675,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/public/images/product_image404.jpg";
							}
							
							return target[name];
						}
					});

export { product_image404 as default };
