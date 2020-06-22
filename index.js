const body = document.querySelector('body'),
    currentColor = document.querySelector('.current-color'),
    colorButton = document.querySelector('.random-color');

    colorButton.addEventListener('click', () => {
        let newColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

        body.style = `background: ${newColor};`;
        colorButton.style = `background: ${newColor};`;
        currentColor.textContent = newColor;
    });