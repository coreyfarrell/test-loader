(async () => {
	console.log('./test.js: start');
	const keepAlive = process.argv[2] === 'fix' ? setInterval(() => {}, 10000) : undefined;
	const index = await import('./index.js');

	console.log('ok', index);
	clearInterval(keepAlive);
})();
