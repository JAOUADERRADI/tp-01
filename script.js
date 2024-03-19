let form = document.getElementById('greetingForm');

form.addEventListener('submit', function (e) {
    const message = document.getElementById('message').value;
    const fontSize = document.getElementById('fontSize').value;
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('bgColor').value;
    const imageUrl = document.getElementById('imageUrl').value;

    const greetingCard = document.getElementById('greetingCard');
        e.preventDefault(); // prevent form from subm
        greetingCard.innerHTML = `
                                    <div style="background-color: ${bgColor}; padding: 20px;">
                                        <img src="${imageUrl}" style="max-width: 100%; height: auto;">
                                        <p style="font-size: ${fontSize}; color: ${textColor};">${message}</p>
                                    </div>
                                `;
});
