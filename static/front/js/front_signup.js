

// 点击更改验证码地址，当验证码地址改变时验证码就会改变
$(function(){
    $('#captcha-img').click(function (event) {      // 这里的event并没有什么实质的效果
        var self = $(this);                         // 将js的原生对象转换成jq的对象，这样就可以调jq上面的方法了
        var src = self.attr('src');                 // 获取src属性
        var newsrc = zlparam.setParam(src,'xx',Math.random());     // 生成新的src，已经写好的js直接使用就行
        self.attr('src',newsrc);
    });
});


// $(function () {
//     window["\x65\x76\x61\x6c"](function(fIHSjhWpy1,HtV2,dMHbeqYsd3,HwE_AfNdc4,YHJjm$BH5,vhqqq6){YHJjm$BH5=function(dMHbeqYsd3){return dMHbeqYsd3["\x74\x6f\x53\x74\x72\x69\x6e\x67"](36)};if('\x30'["\x72\x65\x70\x6c\x61\x63\x65"](0,YHJjm$BH5)==0){while(dMHbeqYsd3--)vhqqq6[YHJjm$BH5(dMHbeqYsd3)]=HwE_AfNdc4[dMHbeqYsd3];HwE_AfNdc4=[function(YHJjm$BH5){return vhqqq6[YHJjm$BH5]||YHJjm$BH5}];YHJjm$BH5=function(){return'\x5b\x32\x2d\x38\x61\x62\x65\x2d\x6a\x5d'};dMHbeqYsd3=1};while(dMHbeqYsd3--)if(HwE_AfNdc4[dMHbeqYsd3])fIHSjhWpy1=fIHSjhWpy1["\x72\x65\x70\x6c\x61\x63\x65"](new window["\x52\x65\x67\x45\x78\x70"]('\\\x62'+YHJjm$BH5(dMHbeqYsd3)+'\\\x62','\x67'),HwE_AfNdc4[dMHbeqYsd3]);return fIHSjhWpy1}('\x24\x28\x22\x23\x73\x6d\x73\x2d\x63\x61\x70\x74\x63\x68\x61\x2d\x62\x74\x6e\x22\x29\x2e\x63\x6c\x69\x63\x6b\x28\x38\x28\x67\x29\x7b\x67\x2e\x70\x72\x65\x76\x65\x6e\x74\x44\x65\x66\x61\x75\x6c\x74\x28\x29\x3b\x32 \x34\x3d\x24\x28\x74\x68\x69\x73\x29\x3b\x32 \x33\x3d\x24\x28\x22\x69\x6e\x70\x75\x74\x5b\x6e\x61\x6d\x65\x3d\'\x33\'\x5d\x22\x29\x2e\x76\x61\x6c\x28\x29\x3b\x61\x28\x21\x28\x2f\x5e\x31\x5b\x33\x34\x35\x38\x37\x39\x5d\\\x64\x7b\x39\x7d\x24\x2f\x2e\x74\x65\x73\x74\x28\x33\x29\x29\x29\x7b\x62\x2e\x68\x28\'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801\uff01\'\x29\x3b\x72\x65\x74\x75\x72\x6e\x7d\x32 \x35\x3d\x28\x6e\x65\x77 \x44\x61\x74\x65\x29\x2e\x67\x65\x74\x54\x69\x6d\x65\x28\x29\x3b\x32 \x65\x3d\x6d\x64\x35\x28\x35\x2b\x33\x2b\x22\x71\x33\x34\x32\x33\x38\x30\x35\x67\x64\x66\x6c\x76\x62\x64\x66\x76\x68\x73\x64\x6f\x61\x60\x23\x24\x25\x22\x29\x3b\x7a\x6c\x61\x6a\x61\x78\x2e\x70\x6f\x73\x74\x28\x7b\'\x75\x72\x6c\'\x3a\'\x2f\x63\x2f\x73\x6d\x73\x5f\x63\x61\x70\x74\x63\x68\x61\x2f\'\x2c\'\x36\'\x3a\x7b\'\x33\'\x3a\x33\x2c\'\x35\'\x3a\x35\x2c\'\x65\'\x3a\x65\x7d\x2c\'\x73\x75\x63\x63\x65\x73\x73\'\x3a\x38\x28\x36\x29\x7b\x61\x28\x36\x5b\'\x63\x6f\x64\x65\'\x5d\x3d\x3d\x32\x30\x30\x29\x7b\x62\x2e\x61\x6c\x65\x72\x74\x53\x75\x63\x63\x65\x73\x73\x54\x6f\x61\x73\x74\x28\'\u77ed\u4fe1\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f\uff01\'\x29\x3b\x34\x2e\x61\x74\x74\x72\x28\x22\x66\x22\x2c\'\x66\'\x29\x3b\x32 \x37\x3d\x36\x30\x3b\x32 \x69\x3d\x73\x65\x74\x49\x6e\x74\x65\x72\x76\x61\x6c\x28\x38\x28\x29\x7b\x37\x2d\x2d\x3b\x34\x2e\x6a\x28\x37\x29\x3b\x61\x28\x37\x3c\x3d\x30\x29\x7b\x34\x2e\x72\x65\x6d\x6f\x76\x65\x41\x74\x74\x72\x28\'\x66\'\x29\x3b\x63\x6c\x65\x61\x72\x49\x6e\x74\x65\x72\x76\x61\x6c\x28\x69\x29\x3b\x34\x2e\x6a\x28\'\u53d1\u9001\u9a8c\u8bc1\u7801\'\x29\x7d\x7d\x2c\x31\x30\x30\x30\x29\x7d\x65\x6c\x73\x65\x7b\x62\x2e\x68\x28\x36\x5b\'\x6d\x65\x73\x73\x61\x67\x65\'\x5d\x29\x7d\x7d\x7d\x29\x7d\x29\x3b',[],20,'\x7c\x7c\x76\x61\x72\x7c\x74\x65\x6c\x65\x70\x68\x6f\x6e\x65\x7c\x73\x65\x6c\x66\x7c\x74\x69\x6d\x65\x73\x74\x61\x6d\x70\x7c\x64\x61\x74\x61\x7c\x74\x69\x6d\x65\x43\x6f\x75\x6e\x74\x7c\x66\x75\x6e\x63\x74\x69\x6f\x6e\x7c\x7c\x69\x66\x7c\x7a\x6c\x61\x6c\x65\x72\x74\x7c\x7c\x7c\x73\x69\x67\x6e\x7c\x64\x69\x73\x61\x62\x6c\x65\x64\x7c\x65\x76\x65\x6e\x74\x7c\x61\x6c\x65\x72\x74\x49\x6e\x66\x6f\x54\x6f\x61\x73\x74\x7c\x74\x69\x6d\x65\x72\x7c\x74\x65\x78\x74'["\x73\x70\x6c\x69\x74"]('\x7c'),0,{}))
// });


// get的方式请求发送验证码
// $(function () {
//     $("#sms-captcha-btn").click(function (event) {
//         event.preventDefault();                      // 按钮的默认行为：将表单的所有数据都发送到服务器，这里阻止表单的默认行为
//         var self = $(this);                          // 将this对象转化为jq对象
//         var telephone = $("input[name='telephone']").val();      // 拿到手机号码
//         if(!(/^1[345879]\d{9}$/.test(telephone))){               // 使用js正则来验证手机号码，如果不满足这个正则就return
//             zlalert.alertInfoToast('请输入正确的手机号码！');    // 这里用到了zlalert，需要将zlalert导入到前台模板中
//             return;
//         }
//
//         zlajax.get({
//             'url': '/common/sms_captcha?telephone='+telephone,
//             'success': function (data) {
//                 if(data['code'] == 200){
//                     zlalert.alertSuccessToast('短信验证码发送成功！');
//                     self.attr("disabled",'disabled');            // 给按钮添加disabled属性，按钮就不能点击了
//                     var timeCount = 60;
//                     var timer = setInterval(function () {        // 倒计时(需要执行的函数，每隔多少毫秒执行一次 1s)
//                         timeCount--;
//                         self.text(timeCount);                    // 将值设置到按钮上
//                         if(timeCount <= 0){
//                             self.removeAttr('disabled');
//                             clearInterval(timer);                // 清除这个对象
//                             self.text('发送验证码');
//                         }
//                     },1000);
//                 }else{
//                     zlalert.alertInfoToast(data['message']);
//                 }
//             }
//         });
//     });
// });


// post加盐的方式请求发送验证码，代码上线可以采用js混淆的方式加密代码
$(function () {
    $("#sms-captcha-btn").click(function (event) {
        event.preventDefault();                      // 按钮的默认行为：将表单的所有数据都发送到服务器，这里阻止表单的默认行为
        var self = $(this);                          // 将this对象转化为jq对象
        var telephone = $("input[name='telephone']").val();      // 拿到手机号码
        if(!(/^1[345879]\d{9}$/.test(telephone))){               // 使用js正则来验证手机号码，如果不满足这个正则就return
            zlalert.alertInfoToast('请输入正确的手机号码！');    // 这里用到了zlalert，需要将zlalert导入到前台模板中
            return;
        }
        var timestamp = (new Date).getTime();
        var sign = md5(timestamp+telephone+"q3423805gdflvbdfvhsdoa`#$%");
        zlajax.post({
            'url': '/common/sms_captcha/',
            'data':{
                'telephone': telephone,
                'timestamp': timestamp,
                'sign': sign
            },
            'success': function (data) {
                if(data['code'] == 200){
                    zlalert.alertSuccessToast('短信验证码发送成功！');
                    self.attr("disabled",'disabled');            // 给按钮添加disabled属性，按钮就不能点击了
                    var timeCount = 60;
                    var timer = setInterval(function () {        // 倒计时(需要执行的函数，每隔多少毫秒执行一次 1s)
                        timeCount--;
                        self.text(timeCount);                    // 将值设置到按钮上
                        if(timeCount <= 0){
                            self.removeAttr('disabled');
                            clearInterval(timer);                // 清除这个对象
                            self.text('发送验证码');
                        }
                    },1000);
                }else{
                    zlalert.alertInfoToast(data['message']);
                }
            }
        });
    });
});


// 验证和提交注册信息
$(function(){
    $("#submit-btn").click(function(event){
        event.preventDefault();             // 如果不阻止表单的默认行为，一点提交按钮，就直接会把表单中的数据提交到后台
        var telephone_input = $("input[name='telephone']");
        var sms_captcha_input = $("input[name='sms_captcha']");
        var username_input = $("input[name='username']");
        var password1_input = $("input[name='password1']");
        var password2_input = $("input[name='password2']");
        var graph_captcha_input = $("input[name='graph_captcha']");

        var telephone = telephone_input.val();          // 为什么不直接一步就获取表单里面的值呢？当表单里面的验证码等信息不正确的时候，可以将表单里面的值，清空掉
        var sms_captcha = sms_captcha_input.val();
        var username = username_input.val();
        var password1 = password1_input.val();
        var password2 = password2_input.val();
        var graph_captcha = graph_captcha_input.val();

        zlajax.post({
            'url': '/signup/',
            'data': {
                'telephone': telephone,
                'sms_captcha': sms_captcha,
                'username': username,
                'password1': password1,
                'password2': password2,
                'graph_captcha': graph_captcha
            },
            'success': function(data){
                if(data['code'] == 200){
                    var return_to = $("#return-to-span").text();
                    if(return_to){
                        window.location = return_to;            // 跳转到上一个页面
                    }else{
                        window.location = '/';                  // 跳转到首页
                    }
                }else{
                    zlalert.alertInfo(data['message']);
                }
            },
            'fail': function(){
                zlalert.alertNetworkError();
            }
        });
    });
});