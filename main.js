
document.getElementById('continuebtn').addEventListener('click', function(){
    const checkbox = document.getElementById('checkboxx');
    if(checkbox.checked) {
        window.location.href = 'webpage.html';
        // window.location.href = 'studyPro-V3.html';
    }else{
        alert('Please fill the checkbox icon ');
    }
}
)
