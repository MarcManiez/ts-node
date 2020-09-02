import { startRepl, register } from '../src/index'

const service = register()
startRepl(service)
process.emit('SIGTERM', 'SIGTERM')
