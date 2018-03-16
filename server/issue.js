
const validIssueStatus = {
  New: true,
  Open: true,
  Assigned: true,
  Fixed: true,
  Verified: true,
  Closed: true,
};

const issueFieldType = {
  status: 'required',
  owner: 'required',
  effort: 'optional',
  created: 'required',
  completionDate: 'optional',
  title: 'required',
};

function validateIssue(issue) {
  Object.keys(issueFieldType).forEach((field) => {
    const type = issueFieldType[field];
    if (!type) {
      delete issue[field];
    } else if (type === 'required' && !issue[field]) {
      return `${field} is required.`;
    }
    return 'the field of incorrect type is deleted.';
  });

  if (!validIssueStatus[issue.status]) {
    return `${issue.status} is not a valid status`;
  }
  return null;
}

module.exports = {
  validateIssue,
};
