module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.durability > 0){
    let newEnhance= ++item.enhancments
    if(newEnhance >= 20){
      newEnhance=20
    }
    return { ...item, enhancments:newEnhance };
  }
}

function fail(item) {
  // the if/else way
  if(item.enhancments<15){
    return { ...item, durability:item.durability-5 };
  }
  if(item.enhancments>=15){
    if(item.enhancments>16){
      item.enhancments= item.enhancments -1
      return { ...item, durability:item.durability-10 };
    }else{
      return { ...item, durability:item.durability-10 };
    }
  }
}

function repair(item) {
  return { ...item, durability:100 };
}

function get(item) {
  if(item.enhancments <= 0){
    return { ...item };
  }else{
    return{...item, name:`[${item.enhancments}]${item.name}`}
  }
  
}
