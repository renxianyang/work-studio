const dev = process.argv.includes('--dev')
const config = {
  port: Number(process.env.PORT || 3001),
  dev,
  mongo: {
    host: '127.0.0.1',
    port: 27017,
    db: 'moyu-home',
    user: 'nzFf5TsnBS5XrAnn',
    pwd: 'wWfiKsFwZxKcxLej',
  },
}

export default config
