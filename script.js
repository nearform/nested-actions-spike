module.exports = async () => {
  const actionRepo = process.env.GITHUB_ACTION
  const parentActionOrg = actionRepo.match(/\__(.*)\_/).pop();
  const parentActionRepo = actionRepo.match(/([^_]+$)/).pop();
  const newOrg = 'nearform-actions'

  return `The '${parentActionRepo}' action, no longer exists under the '${parentActionOrg}' organisation.\n
      Please update it to '${newOrg}', you can do this\n
      by updating your Github Workflow file from:\n\n
          uses: '${parentActionOrg}/${parentActionRepo}'\n\n
      to:\n\n
          uses: '${newOrg}/${parentActionRepo}'\n\n`
}