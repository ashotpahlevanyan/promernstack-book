'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const validIssueStatus = {
  New: true,
  Open: true,
  Assigned: true,
  Fixed: true,
  Verified: true,
  Closed: true
};

const issueFieldType = {
  status: 'required',
  owner: 'required',
  effort: 'optional',
  created: 'required',
  completionDate: 'optional',
  title: 'required'
};

function cleanupIssue(issue) {
  const cleanedUpIssue = {};
  Object.keys(issue).forEach(field => {
    if (issueFieldType[field]) cleanedUpIssue[field] = issue[field];
  });
  return cleanedUpIssue;
}

function validateIssue(issue) {
  const errors = [];
  Object.keys(issueFieldType).forEach(field => {
    if (issueFieldType[field] === 'required' && !issue[field]) {
      errors.push(`Missing mandatory field: ${field}`);
    }
  });
  if (!validIssueStatus[issue.status]) {
    errors.push(`${issue.status} is not a valid status.`);
  }
  return errors.length ? errors.join('; ') : null;
}
exports.default = {
  validateIssue,
  cleanupIssue
};

// function validateIssue(issue) {
//   Object.keys(issueFieldType).forEach((field) => {
//     const type = issueFieldType[field];
//     if (!type) {
//       delete issue[field];
//     } else if (type === 'required' && !issue[field]) {
//       return `${field} is required.`;
//     }
//     return 'the field of incorrect type is deleted.';
//   });
//
//   if (!validIssueStatus[issue.status]) {
//     return `${issue.status} is not a valid status`;
//   }
//   return null;
// }
//
// module.exports = {
//   validateIssue,
// };
//# sourceMappingURL=issue.js.map