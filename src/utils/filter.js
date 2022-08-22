import Vue from 'vue';
// 分割金额
Vue.filter('NumberFormat', function(value) {
  if (!value) {
    return '0'
  }
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); // 将整数部分逢三一断
  return intPartFormat;
});
// 字母转为大写
Vue.filter('toUpperCase', function(value) {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();

});

// 字符串超长截取省略号显示 
Vue.filter('ellipsis', function(value, vlength = 25) {
  if (!value) {
    return '';
  }
  if (value.length > vlength) {
    return value.slice(0, vlength) + '...';
  }
  return value
});
