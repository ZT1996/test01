//TODO: Please write code in this file.
function printReceipt(inputs) {

  var cartItem = createCartItems(inputs);
  var count = countTotalPrice(inputs);
  createRecipt(cartItem,count);
  
}

function createCartItems(inputs){
  var cartItem = '';

  for(var i = 0; i < inputs.length; i++){
    cartItem  += "名称：" + inputs[i]["name"] + "，" + "数量：" + inputs[i]["count"] + inputs[i]["unit"] + "，"
      + "单价：" + inputs[i]["price"].toFixed(2) + "(元)" + "，" + "小计：" +
      (inputs[i]["count"] * inputs[i]["price"]).toFixed(2) + "(元)\n";
  }
  return cartItem;
}

function countTotalPrice(inputs) {
  var count = 0;

  for(var i = 0; i < inputs.length; i++){
    count += inputs[i]["count"] * inputs[i]["price"];
  }
  return count;
}

function createRecipt(cartItem,count) {
  var stringRecipt = '***<没钱赚商店>收据***\n'
    + cartItem +
    '----------------------\n' +
    '总计：' + count.toFixed(2) +'(元)\n' +
    '**********************';

  console.log(stringRecipt);

}
