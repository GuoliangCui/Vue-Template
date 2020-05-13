import Mock from "mockjs";
const baseUrl = process.env.VUE_APP_BASE_API;

Mock.mock(`${baseUrl}/user/getuserlist`, "get", {
  code: 200,
  "data|20": [
    {
      id: "@id",
      "age|30-50": 31,
      name: "@cname",
      addTime: "@datetime",
      hearUrl: "@dataImage",
      address: "@county(true)"
    }
  ]
});

// Mock.mock(`${baseUrl}/user/getuserlist2`, 'get', [{ //输出数据
//     'name': '@name', //随机生成姓名
//     'age|10-20': 10
//     //还可以自定义其他数据
// }]);
