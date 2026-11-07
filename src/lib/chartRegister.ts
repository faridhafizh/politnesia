// Politnesia — Chart.js registration and shared ink-on-paper theme.
// One register pass; all charts share the print-dossier options below.
import {
	Chart,
	LineController,
	BarController,
	DoughnutController,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Tooltip,
	Legend,
	Filler
} from 'chart.js';

Chart.register(
	LineController,
	BarController,
	DoughnutController,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Tooltip,
	Legend,
	Filler
);

Chart.defaults.color = '#6f6a5c';
Chart.defaults.font.family =
	'"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace';
Chart.defaults.font.size = 10;
Chart.defaults.elements.bar.borderRadius = 2;
Chart.defaults.elements.bar.borderWidth = 0;
Chart.defaults.elements.line.borderWidth = 2;
Chart.defaults.elements.point.radius = 2.5;
Chart.defaults.elements.point.hoverRadius = 4;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyle = 'rectRounded';
Chart.defaults.plugins.legend.labels.boxWidth = 8;
Chart.defaults.plugins.legend.labels.boxHeight = 8;
Chart.defaults.plugins.legend.labels.padding = 12;
Chart.defaults.plugins.legend.labels.color = '#6f6a5c';
Chart.defaults.plugins.legend.labels.font = { size: 9 };

export const INK = '#1e1b16';
export const INK_SOFT = '#3f3b33';
export const OXBLOOD = '#8c1a1a';
export const OXBLOOD_DEEP = '#6c1111';
export const OCHRE = '#a85b13';
export const REFORMASI = '#3e4a5c';
export const WARM_GRAY = '#8a8578';
export const PAPER = '#faf7ee';

export const COMMON_TOOLTIP = {
	backgroundColor: INK,
	borderColor: 'rgba(250,247,238,.12)',
	borderWidth: 1,
	titleColor: PAPER,
	bodyColor: '#e8e4d8',
	titleFont: { size: 10, weight: 600 },
	bodyFont: { size: 10 },
	displayColors: false,
	padding: 8,
	cornerRadius: 2,
	caretSize: 4
};

export const GRID = {
	color: 'rgba(30,27,22,.1)',
	tickLength: 0,
	drawTicks: false
};
export const GRID_NONE = { display: false };
export const AXIS_BORDER = { display: false };
export const TICKS = {
	color: '#948e7f',
	padding: 6,
	font: { size: 9 }
};
export const AXIS_TITLE = {
	color: '#948e7f',
	font: { size: 9 }
};
export const LEGEND_BOTTOM = {
	position: 'bottom' as const,
	align: 'start' as const,
	labels: { boxWidth: 8, boxHeight: 8, padding: 12, font: { size: 9 } }
};

// Era bars: lama = ochre, baru = oxblood, reformasi = slate ink.
export const ERA_FILLS = ['rgba(168,91,19,.82)', 'rgba(140,26,26,.85)', 'rgba(62,74,92,.82)'] as const;
export const ERA_BORDERS = ['#a85b13', '#8c1a1a', '#3e4a5c'] as const;

// Under reduced motion, charts draw immediately with no draw-in animation.
if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) {
	Chart.defaults.animation = false;
}
