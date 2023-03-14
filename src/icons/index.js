const graphIcons = {
  department: 'department',
  product: 'production',
  person: 'person',
  orgnization: 'org',
  standard: 'standard',
  technique: 'technology',
  function: 'functional',
  document: 'doc',
  artifact: 'version',
  leak: 'bug',
  asset: 'asset',
  model: 'model',
  task: 'task',
  group: 'group',
  device: 'device',
  event: 'event',
  unit: 'unit',
  property: 'property',
  // icon
  sign: 'sign',
  lock: 'lock',
}

const setGraphIcon = (label, type = 'default', format = 'svg') => {
  if (label.includes('http')) return label
  const fileUrl = graphIcons[label] || 'default'
  return new URL(`./${fileUrl}/${type}.${format}`, import.meta.url).href
}

export default setGraphIcon
