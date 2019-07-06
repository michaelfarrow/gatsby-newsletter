import date, { DATE_REGEX } from '@lib/date'

const dateRegex = new RegExp(`issues/(${DATE_REGEX})\\.md$`)

export function addDate(node) {
  const issueDate = dateRegex.exec(node.fileAbsolutePath)[1]
  return {
    ...node,
    dateStr: issueDate,
    date: date(issueDate),
  }
}

export function addDates(issues) {
  return {
    ...issues,
    edges: issues.edges.map(edge => {
      return {
        ...edge,
        node: addDate(edge.node),
      }
    }),
  }
}
