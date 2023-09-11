export let darktheme = null;

if (
	localStorage.length === 0 &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
    localStorage.setItem("theme","dracula")
}else if (
	localStorage.length === 0 &&
	window.matchMedia('(prefers-color-scheme: light)').matches
) {
	localStorage.setItem("theme","cmyk")
}

if (
	localStorage.getItem('theme') === 'dracula' &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	darktheme = true
} else {
	darktheme = false
}