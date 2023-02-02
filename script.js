module.exports = () => {
  const actionRepo = process.env.GITHUB_ACTION_REPOSITORY
  const [repoOrg, repoName] = actionRepo.split('/')
  const newOrg = 'nearform-actions'
  const oldOrg = 'nearform'
  if (repoOrg === oldOrg) {
    console.log(
      `The '${repoName}' action, no longer exists under the '${oldOrg}' organisation.\n` +
        `Please update it to '${newOrg}', you can do this\n` +
        `by updating your Github Workflow file from:\n\n` +
        `    uses: '${oldOrg}/${repoName}'\n\n` +
        `to:\n\n` +
        `    uses: '${newOrg}/${repoName}'\n\n`
    )
  }
}