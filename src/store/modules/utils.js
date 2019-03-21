export const formatAsEntitiesFromObject = object => {
  return {
    [object.id]: object
  }
}
export const formatAsEntitiesFromSnapshot = (snapshot, key = 'id') => {
  const data = {}
  snapshot.forEach(doc => {
    data[doc.data()[key]] = {
      id: doc.id,
      ...doc.data()
    }
  })
  return data
}
export const formatAsArrayFromSnapshot = snapshot => {
  const data = []
  snapshot.forEach(doc => {
    data.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return data
}
