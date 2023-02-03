module.exports = async () => {
  const actionRepo = process.env.GITHUB_ACTION
  const parentActionOrg = actionRepo.match(/\__(.*)\_/).pop();
  const parentActionRepo = actionRepo.match(/([^_]+$)/).pop();
  const newOrg = 'nearform-actions'
  const oldOrg = 'nearform'

  return `GITHUB_ACTION = ${actionRepo}
          parentAction = ${parentActionOrg}
          parentActionRepo = ${parentActionRepo}
      The '${parentActionRepo}' action, no longer exists under the '${oldOrg}' organisation.\n
      Please update it to '${newOrg}', you can do this\n
      by updating your Github Workflow file from:\n\n
          uses: '${oldOrg}/${parentActionRepo}'\n\n
      to:\n\n
          uses: '${newOrg}/${parentActionRepo}'\n\n`
}