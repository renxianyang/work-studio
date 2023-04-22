const dev = process.argv.includes('--dev')
const config = {
  port: Number(process.env.PORT || 3001),
  dev,
  dbUrl: `https://ch1p1ua5g6h9k9li2h70.baseapi.memfiredb.com`,
  dbToken: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIyMDA2OTYyNSwiaWF0IjoxNjgyMTQ5NjI1LCJpc3MiOiJzdXBhYmFzZSJ9.t-LiUKaDdogTMb_gg7xvHD_j5tX2ptMS13goqoZ1FTY`,
}

console.info(config)
export default config
