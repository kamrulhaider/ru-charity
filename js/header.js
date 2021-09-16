let a = 0;
function showDiv(id, id2, id3) {
    const value = a++;
    if (value === 0) {
        document.getElementById(id).style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
        document.getElementById(id2).style.display = 'none';
        document.getElementById(id3).style.display = 'none';
        a = 0;
    }
};
function showDiv2(id, id2) {
    document.getElementById(id).style.display = 'block';
    document.getElementById(id2).style.display = 'none';
};

function closeAll() {
    document.getElementById('dropdown-content').style.display = 'none';
    document.getElementById('dropdown-content2').style.display = 'none';
    document.getElementById('dropdown-content3').style.display = 'none';
    a = 0;
};