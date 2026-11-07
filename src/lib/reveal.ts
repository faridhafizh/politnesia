import type { Action } from 'svelte/action';

/** Fade/rise reveal on scroll. Safe under reduced motion (motion.css rests the class). */
export const reveal: Action<HTMLElement, number | undefined> = (node, delay = 0) => {
	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('reveal', 'is-in');
		return;
	}
	node.classList.add('reveal');
	node.style.setProperty('--reveal-delay', `${delay}ms`);
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-in');
					io.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
};
