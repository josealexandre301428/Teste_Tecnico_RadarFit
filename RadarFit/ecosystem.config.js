module.exports = [{
  script: './build/src/index.ts',
  name: 'server',
  exec_mode: 'cluster',
  instances: 'max'
}, {
  script: 'worker.js',
  name: 'worker'
}]