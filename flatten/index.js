/**
 * 
 * @param {Array} attributes [{key: {fields?}}]
 */
function getColumnNames (attributes) {
  return Object.keys(attributes).map(key => {
    const attribute = attributes[key]
    return attribute && !attribute.fields ? key : null
  }).filter(attribute => attribute ? true : false )
}

/**
 * Flatten a datastructure containing nested data (e.g. an array)
 * based on attributes (or fields)
 *
 * 
 * @param {Object} ds {
 *  attributes: {
 *    key: {
 *      isDerived?: bool,
 *      source?: string,
 *      reducer?: function,
 *      initialValue?: any,
 *    }
 *  },
 *  data: [
 *    ...,
 *    { key: value }
 *  ]
 * }
 */
function flattenToParentChildren (ds) {
  const columns = getColumnNames(ds.attributes)

  return ds.data.map((row, rIndex) => {
    const id = rIndex
    let parent = []
    let children = []

    const cols = Object.keys(row)

    columns.forEach(c => {
      if (cols.indexOf(c) !== -1) {
        parent.push(row[c])
      } else if (ds.attributes[c].isDerived) {
        const { source, reducer, initialValue } = ds.attributes[c]
        parent.push(row[source].reduce(reducer, initialValue))
        
        // children
        children = row[source].map((item, index, items) => {
          return columns.map(col => {
            return item[col] ? item[col] : null
          })
        })
      }
    })

    return {
      id,
      parent,
      children
    }
  })
}

module.exports = {
  flattenToParentChildren,
}