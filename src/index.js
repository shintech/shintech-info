import chalk from 'chalk'

const packageDir = process.env.ROOT_DIR + 'package.json'
const pkg = require(packageDir)
const packageName = pkg.name
const packageVersion = pkg.version

export function getAppInfo (options) {
  const { port, logger } = options
  logger.info(`${chalk.bgBlack.cyan(packageName)} ver.${chalk.bgBlack.green(packageVersion)} listening on port ${chalk.bgBlack.yellow(port)}`)
}
