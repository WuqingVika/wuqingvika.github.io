//------------------
//leancloud
//------------------


//init leancloud
$(function(){

    var Counter=AV.Object.extend("Counter");
   
    count(Counter);      
}); 


function count(Counter){

    var url = window.location.href;
    var title = $('.post-title').text();

    var query = new AV.Query(Counter);   

    query.equalTo("url",url);

    query.find().then(function(results) {
        if(results.length  > 0){            
            //新的记录
            var oldRecoder = results[0];         
            var time = oldRecoder.get('time');
            oldRecoder.save({
                time: time + 1     
            });        
            //reback times  //head.ejs
            var postCount = document.getElementById("post-leancloud-count");
            postCount.innerHTML=time+1;
        }else{ 
            //第一次访问该文章
            var newRecoder = new Counter(); 
            //可读可写的acl 
            var acl = new AV.ACL();
            acl.setPublicReadAccess(true);
            acl.setPublicWriteAccess(true);
            newRecoder.setACL(acl);            
            newRecoder.save({
                time:1,
                title : title,
                url : url
            })
            //reback times  //head.ejs
            var postCount = document.getElementById("post-leancloud-count");
            postCount.innerHTML= 1 ;
        }    
    });
}