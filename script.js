module.exports = async () => {
  const {ACTION_NAME} = process.env
  const [repoOrg, repoName] = ACTION_NAME.split('_')
  console.log(repoOrg)
  console.log(repoName)
}