export function pageview(url: string) {
	if (window?.gtag === undefined)
		return;

	window.gtag("config", "G-3WYVWTWSKD", {
		page_path: url
	});
}

type EventHandler = {
	action: string;
	params?: Gtag.ControlParams | Gtag.EventParams | Gtag.CustomParams;
}

export function event({ action, params }: EventHandler) {
	if (window?.gtag === undefined)
		return;

	window.gtag("event", action, params);
}