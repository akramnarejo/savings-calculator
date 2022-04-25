


const miniInvestment = (val) => {
    let p = []
    let q = []
    let r = [];  
    let portfolio = val
    const poc = 0
    const upperSize = [1, 185000, 250000,500000, 750000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000]
    const lowerSize = upperSize.map(size => (size+1))
    const prices = [0.65, 0.65, 0.55, 0.50, 0.40, 0.33, 0.25, 0.22, 0.17, 0.14, 0.13, 0.12]

    //find p
    if(val>poc){ 
      p.push(true)
    }else{
      p.push(false)
    }
    lowerSize.map(size => {
      if(val>size){
        p.push(true)
      }else{
        p.push(false)
      }
      return 0
    })

    // find q
    upperSize.map(size => {
      if(val > size){
        q.push(false)
      }else{
        q.push(true)
      }
      return 0
    })

    for(let i = 0; i < q.length; i++){
      if(p[i] === true){
        if(q[i] === true){
          r.push(true)
        }else{
          r.push(false)
        }
      }else{
        r.push(false)
      }
    }
    if(p[p.length] === true){
      r.push(true)
    }else{
      r.push(false)
    }

    for(let i = 0; i < r.length; i++){
      if(r[i]===true){
        portfolio = val*prices[i]
      }
    }
    
    portfolio = (portfolio*0.9)*0.1
  //   console.log('result ', Math.round(portfolio))
    return Math.round(portfolio)
}
  
  
const findTotalInvestment = (val=0) => {
  let p = []
  let q = []
  let r = [];  
  let portfolio = val
  const poc = 0
  const upperSize = [1, 185000, 250000,500000, 750000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000]
  const lowerSize = upperSize.map(size => (size+1))
  const prices = [0.65, 0.65, 0.55, 0.50, 0.40, 0.33, 0.25, 0.22, 0.17, 0.14, 0.13, 0.12]

  //find p
  if(val>poc){ 
      p.push(true)
  }else{
      p.push(false)
  }
  lowerSize.map(size => {
      if(val>size){
          p.push(true)
      }else{
          p.push(false)
      }
      return 0
  })
  
  // find q
  upperSize.map(size => {
      if(val > size){
          q.push(false)
      }else{
          q.push(true)
      }
      return 0
  })

  for(let i = 0; i < q.length; i++){
    if(p[i] === true){
      if(q[i] === true){
        r.push(true)
      }else{
        r.push(false)
      }
    }else{
      r.push(false)
    }
  }
  if(p[p.length] === true){
    r.push(true)
  }else{
    r.push(false)
  }

  for(let i = 0; i < r.length; i++){
    if(r[i]===true){
      portfolio = val*prices[i]
    }
  }
  
  // console.log('portfolio '+portfolio)
  // console.log('k47 ',miniInvestment(val))
  portfolio = (portfolio*0.9)+((val/1800)*(650))+miniInvestment(val)
  // console.log('findTotalInvestment running...')
  return Math.round(portfolio)
}

const findDirectSavings = (totalInvestment, portfolio) => {
  const oneSensorPrice = 540
  const avgSensorPrice = 590
  const softwareCostPerSensor = 497
  const implementationCost = 0.1

  const sensors = portfolio/oneSensorPrice
  const estimHardware = sensors*avgSensorPrice
  const estimSoftware = softwareCostPerSensor*sensors
  const implementation = estimSoftware*implementationCost

  const totalPrice = estimHardware+estimSoftware+implementation

  // console.log('findDirectSavings running...')
  return (totalPrice-totalInvestment)
}

const findSavigsComparison = (totalInvestment, portfolio) => {
  const oneSensorPrice = 540
  const avgSensorPrice = 590
  const softwareCostPerSensor = 497
  const implementationCost = 0.1

  const sensors = portfolio/oneSensorPrice
  const estimHardware = sensors*avgSensorPrice
  const estimSoftware = softwareCostPerSensor*sensors
  const implementation = estimSoftware*implementationCost

  const totalPrice = estimHardware+estimSoftware+implementation

  return (1-(totalInvestment/totalPrice))
}

export {findTotalInvestment, findDirectSavings, findSavigsComparison}