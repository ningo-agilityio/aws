module.exports = {
  hooks: {
    "pre-push": "npm run build",
    "pre-commit": "npm run build",
    "pre-merge": "npm run build",
    "pre-checkout": "npm run build"
  },
}
