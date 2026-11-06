// Register only the Chart.js pieces this page uses (Line, Bar, Doughnut).
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

Chart.defaults.color = '#9c9ea3';
Chart.defaults.font.family = '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace';
Chart.defaults.font.size = 10;

export const COMMON_TOOLTIP = {
	backgroundColor: '#222427',
	borderColor: '#3a3c40',
	borderWidth: 1,
	titleColor: '#eff0f1',
	bodyColor: '#d6d3d1',
	padding: 8,
	cornerRadius: 6
};

export const GRID = { color: 'rgba(239,240,241,.08)' };
export const GRID_NONE = { display: false };
