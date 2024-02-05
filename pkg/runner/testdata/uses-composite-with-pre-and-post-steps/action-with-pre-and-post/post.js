const { appendFileSync } = require('fs');
const step = process.env['INPUT_STEP'];
appendFileSync(process.env['GITEA_ENV'], `;${step}-post`, { encoding:'utf-8' })
