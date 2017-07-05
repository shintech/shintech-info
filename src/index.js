import chalk from 'chalk'

export function getAppInfo (options) {
  const { port, logger, packageDir } = options

  const packageName = packageDir.name
  const packageVersion = packageDir.version

  logger.info(`${chalk.bgBlack.cyan(packageName)} ver.${chalk.bgBlack.green(packageVersion)} listening on port ${chalk.bgBlack.yellow(port)}`)
}
