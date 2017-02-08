import Immutable from 'immutable'

export const normalize = ({ data, prefix = 'ROW_DATA' }) =>
    data.reduce((acc, row) => acc.merge({
        [`${prefix}_BY_ID`]: acc.get(`${prefix}_BY_ID`).set(row.id, row),
        [`${prefix}_IDS`]: acc.get(`${prefix}_IDS`).add(row.id)
    }), Immutable.Map({
        [`${prefix}_BY_ID`]: Immutable.Map(),
        [`${prefix}_IDS`]: Immutable.OrderedSet()
    }))
