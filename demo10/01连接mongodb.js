//引入mongodb
const MongoClient = require('mongodb').MongoClient;

//定义数据库连接地址
const url = 'mongodb://admin:123456@localhost:27017/';

//定义要操作的数据库
const dbName = 'test';

//实例化MongoClient传入数据库连接地址
const client = new MongoClient(url);

//连接数据库
client.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('数据库连接成功')

    let db = client.db(dbName);

//    1.查找数据
//     db.collection("order_item").find().toArray((err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(data);
//         //操作数据库完毕以后一定要关闭数据库连接
//         client.close();
//     })

//    2.增加数据
//     db.collection("order_item").insertOne({order_id:'3',title:'牙刷',price:15,num:2},(err,result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log('增加成功');
//         // console.log(result);
//         //操作数据库完毕以后一定要关闭数据库连接
//         client.close();
//     })

//    3.修改数据
//     db.collection("order_item").updateOne({title:'牙刷'},{$set:{num:3}},(err,result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log('修改成功');
//         console.log(result);
//         //操作数据库完毕以后一定要关闭数据库连接
//         client.close();
//     })

    //    4.删除数据
    db.collection("order_item").deleteOne({title:'牙刷'},(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('删除成功');
        console.log(result);
        //操作数据库完毕以后一定要关闭数据库连接
        client.close();
    })

})