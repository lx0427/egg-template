module.exports = (agent) => {
  agent.logger.debug('debug info')
  // agent.logger.info('启动耗时 %d ms', Date.now() - start)
  agent.logger.info('启动耗时 %d ms')
  agent.logger.warn('warning!')

  agent.logger.error('someErrorObj')
}
