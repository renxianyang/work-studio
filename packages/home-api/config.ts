const dev = process.argv.includes('--dev')
const config = {
  port: Number(process.env.PORT || 3001),
  dev,
}

console.info(config)
export default config
