const mixinsGeneratorRecursion = function (expression, config, data) {
  Object.entries(config).forEach(([subKey, subConfig]) => {
    if (['ajax'].includes(subKey)) {
    } else {
      console.log(subKey)
    }
  })
}

const mixinsGenerator = (config) => {
  const result = {}

  result.data = function () {
    let data = {}
    mixinsGeneratorRecursion.call(this, '', config, data)
    return data
  }

  return result
}

export { mixinsGenerator }
