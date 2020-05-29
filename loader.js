import fs from 'fs';
import {fileURLToPath} from 'url';

import TestExclude from 'test-exclude';

const debug = msg => fs.writeSync(2, msg + '\n');

const e = new TestExclude();

export async function transformSource(source, context, defaultTransformSource) {
	debug(`       transform: ${context.url}`);
	// the process just dies inside e.shouldInstrument()
	const shouldInstrument = e.shouldInstrument(fileURLToPath(context.url));
	debug(`shouldInstrument: ${shouldInstrument}`);
	return defaultTransformSource(source, context, defaultTransformSource);
}
