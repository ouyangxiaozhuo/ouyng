var app = new Vue({
    el: "#shoppingcar",
    data: {
       store:[
           {
               name:"京东自营",
               product:[
                  {
                      name:"AAA",
                      price:"$988",
                  },
                  {
                    name:"BBB",
                    price:"$988",
                  },
               ]
           },
           {
               name:"良品铺子",
               product:[
                   {
                       name:"CCC",
                       price:"$998",
                   },
                   {
                    name:"DDD",
                    price:"$998",
                },
                {
                    name:"EEE",
                    price:"$998",
                }
               ]
           }
       ],
       
    }
})