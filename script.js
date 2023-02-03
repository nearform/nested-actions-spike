module.exports = async ({core}) => {
  const {ACTION_NAME} = process.env
  const [repoOrg, repoName] = ACTION_NAME.split('_')
  core.log(repoOrg)
  core.log(repoName)
}