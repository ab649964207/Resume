!function () {
    var APP_ID = 'Mo5Q06fXiFLcXejlTmrQU21T-gzGzoHsz';
    var APP_KEY = 'ILgGiMcUXvG9doY9hfBQp0D0';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
    let myForm = document.querySelector('#postMessageForm');

    
    myForm.addEventListener('submit', function (event) {
        event.preventDefault()
        let content = myForm.querySelector('input[name=content]').value
        let name = myForm.querySelector('input[name=name]').value
        let img_number = avatar_selector.querySelector('img').attributes.value.value
        img_number = img_number+""
        console.dir(img_number);
        
        var Message = AV.Object.extend('Message');
        var message = new Message();
        message.save({
            'content': content,
            'name':name,
            'img_number': img_number
        }).then(function (object) {
            console.log(object)
            let message = content;
            let li = document.createElement('li');
            li.textContent = name + ':' + message;
            let img = document.createElement('img');
            img.src = './img/avatar/avatar (' + img_number + ').png'
            img.classList.add('avatar');
            li.appendChild(img)
            messageList.appendChild(li)
            myForm.querySelector('input[name=content]').value = ''
            myForm.querySelector('input[name=name]').value = ''
        },function (error) {
            console.log(error);
            
        })
    })
    //选择头像
    avatar_selector.addEventListener('click',function () {
        let aratar_options = document.querySelector('.aratar_options')
        aratar_options.classList.add('active')
        let img_options = document.querySelectorAll('.aratar_options > img')
        for (let i = 0; i < img_options.length; i++) {
            img_options[i].onclick = function (event) {
              
                aratar_options.classList.remove('active')
                let imgcurrent = avatar_selector.querySelector('img')
                imgcurrent.src = event.target.src;
                imgcurrent.attributes.value.value = event.target.attributes.value.value
                console.log(imgcurrent.attributes.value.value);
                

                
            }
            
        }
        
    })

    
    

    var query = new AV.Query('Message');
    query.find()
    .then(function (Message) {
        for (let i = 0; i < Message.length; i++) {
            console.log(Message[i]);
            let message = Message[i].attributes.content;
            let img_number = Message[i].attributes.img_number       
            let name = Message[i].attributes.name
            let li = document.createElement('li');
            li.textContent = name +':'+message;
            let img = document.createElement('img');
            img.src = './img/avatar/avatar (' + img_number  + ').png'
            img.classList.add('avatar');
            li.appendChild(img)
            messageList.appendChild(li)

        }
    })
    .then(null, function (error) {
        console.log(error);
        
    });
}.call()



