        const firstContainer = document.querySelector('.main-container');
        

    for(let i = 1; i< 257 ; i++)
    {
        if(i<17)
        {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('item-container');
            firstContainer.appendChild(itemContainer);
        }
        else if(i%16 == 0)
        {
            const nextContainer = document.createElement('div');
            nextContainer.classList.add('main-container');
            const body = document.querySelector('body');
            body.appendChild(nextContainer);
            for(let x=0; x<16;x++)
            {
                const itemContainer = document.createElement('div');
            itemContainer.classList.add('item-container');
            nextContainer.appendChild(itemContainer);
            }

        }
        

        

    } 
