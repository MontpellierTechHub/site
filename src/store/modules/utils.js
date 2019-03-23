export const formatAsEntitiesFromArray = objects => {
  const data = {}
  objects.map(object => {
    data[object.id] = {
      ...object
    }
  })
  return data
}
export const formatAsEntitiesFromObject = object => {
  return {
    [object.id]: object
  }
}
export const formatAsEntitiesFromSnapshot = (snapshot) => {
  const data = {}
  snapshot.forEach(doc => {
    data[doc.id] = {
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
