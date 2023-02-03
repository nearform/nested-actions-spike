module.exports = async () => {
  const {ACTION_NAME} = process.env
  const [repoOrg, repoName] = ACTION_NAME.split('_')
  console.log("-----------------")
  console.log(`repoOrg: ${repoOrg}`)
  console.log(`repoName: ${repoName}`)
  console.log("-----------------")
}