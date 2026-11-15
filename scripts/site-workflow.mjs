import { spawnSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv[2] || 'express';

if (!['express', 'structure'].includes(mode)) {
  console.error('Usage : node scripts/site-workflow.mjs express|structure');
  process.exit(1);
}

function run(script) {
  const result = spawnSync(process.execPath, [join(root, 'scripts', script)], { cwd: root, stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status || 1);
}

run('build-site.mjs');
run('verify-site.mjs');

console.log(
  mode === 'express'
    ? 'Workflow express validé. Aucun contrôle visuel général n’est requis.'
    : 'Contrôles techniques validés. Il reste à vérifier visuellement uniquement les pages et largeurs touchées.',
);
