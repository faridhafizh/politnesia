import type { Action } from 'svelte/action';

interface CountParams {
	to: number;
	decimals?: number;
	prefix?: string;
	suffix?: string;
	grouped?: boolean;
}

/** Count-up on first visibility. Formats with Indonesian separators; rests under reduced motion. */
export const countup: Action<HTMLElement, CountParams> = (node, params) => {
	const { to, decimals = 0, prefix = '', suffix = '', grouped = false } = params;

	const format = (v: number) => {
		const body =
			decimals > 0
				? v.toFixed(decimals).replace('.', ',')
				: grouped
					? Math.round(v).toLocaleString('id-ID')
					: String(Math.round(v));
		return `${prefix}${body}${suffix}`;
	};

	if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.textContent = format(to);
		return;
	}

	const duration = 1500;
	let start: number | null = null;

	const animate = (t: number) => {
		if (start === null) start = t;
		const k = Math.min(1, (t - start) / duration);
		const eased = k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
		node.textContent = format(to * eased);
		if (k < 1) requestAnimationFrame(animate);
		else node.textContent = format(to);
	};

	if (typeof IntersectionObserver === 'undefined') {
		node.textContent = format(to);
		return;
	}
	const io = new IntersectionObserver(
		(entries) => {
			if (entries[0]?.isIntersecting) {
				io.disconnect();
				requestAnimationFrame(animate);
			}
		},
		{ threshold: 0.4 }
	);
	io.observe(node);

	return { destroy: () => io.disconnect() };
};
