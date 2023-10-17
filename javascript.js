        const firstContainer = document.querySelector('.body-container')
        const body = document.querySelector('body');
        const btn = document.querySelector('.select-btn');

    btn.addEventListener('click', function grid(){

        let num = prompt('Inform a number for the grid');
        if(num>100)
            {
        
            return alert('Inform a 100 < number');
            }
        firstContainer.innerText ='';
        

        for(let i = 0; i < num*num ; i++)
        {
        
            if(i % num == 0)
            {
                let nextContainer = document.createElement('div');
                nextContainer.classList.add('main-container');
                let tam = (100/num);
                nextContainer.setAttribute('style','height:'+tam+'%');
            
                firstContainer.appendChild(nextContainer);
                for(let x=0; x<num;x++)
                    {
                    let itemContainer = document.createElement('div');
                    itemContainer.classList.add('item-container');
                    nextContainer.appendChild(itemContainer);
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    itemContainer.addEventListener('mousemove', () => itemContainer.setAttribute('style','background:#'+randomColor));
                    }

            }
        
        } 
    })

      
