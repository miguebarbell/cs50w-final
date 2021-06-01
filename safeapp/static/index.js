document.addEventListener('DOMContentLoaded', function() {
    loadpass()
})

function loadpass() {
    // load all the content
    fetch('passw')
        .then(response => response.json())
        .then(data => {
            blank_page()
            console.log(data)
            let body = document.getElementById('pass')
            document.querySelector('#pass').style.display = 'block'
            const work_area = document.createElement('div');
            body.appendChild(work_area)
            if (data['length'] === 0) {
                work_area.innerHTML = `<span style="padding: 1rem">Begin in <a href="gen" class="btn btn-sm btn-outline-primary formbtn">Generator</a> Section</spans>`
            } else {
                // for (i = data['response'].length(); i == 0; i--){
                for (pass in data['response']) {
                    console.log(data['response'])
                    pdate = date(data['response'][pass]['date'])
                    work_area.innerHTML += `
                                            <div id="pass${pass}" class="inner-pass dropdown">
                                            <button title="Display ${data['response'][pass]['title']}" id="btn${pass}" onclick="dropdown(${pass})">Title: ${data['response'][pass]['title']} @ ${pdate} </button>
                                            <ul id="ul${pass}" style="display:none">
                                            <li title="Click: Copy Username" onclick="copy('${data['response'][pass]['username']}')">Username: ${data['response'][pass]['username']}</li>
<!--                                            <li title="Copy Password" onclick="copy('${data['response'][pass]['password']}')" style="-webkit-text-security: circle">Password: ${data['response'][pass]['password']}</li>-->
                                            <li title="Click: Copy Password. \n If you want to display it go to Edit" onclick="copy('${data['response'][pass]['password']}')">Password: &#9679&#9679&#9679&#9679&#9679&#9679</li>
                                            <li>Note: ${data['response'][pass]['note']}</li>
    <!--                                        <li><a href="edit/${pass}">Edit?</a></li>-->
                                            <li style="justify-content: center"><a class="btn btn-sm btn-outline-warning formbtn" href="edit/${pass}">Edit</a></li>
                                            </ul>
                                            
                                            <div>
                                            `
                    }}
        })
}

function dropdown(id){
    const ul = document.querySelector(`#ul${id}`);
    if (ul.style.display === 'none'){
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
    const btn = document.querySelector(`#btn${id}`);
    if (btn.title === 'Display entry'){
        btn.title = 'Close entry'
    } else {
        btn.title = 'Display entry'
    }

}


function blank_page() {
    let blank_body = document.querySelector('.main-container').children;
    for (let i = 0; i < blank_body.length; i++) {
        blank_body[i].style.display = "none";
    }
}

function date(pdate) {
    let date = new Date(pdate);
    let hour = date.getHours();
    hour = ("0" + hour).slice(-2)
    let minutes = date.getMinutes();
    minutes = ("0" + minutes).slice(-2)
    let day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();
    let p_date = `${hour}:${minutes} ${day} ${month} ${year}`;
    return p_date;
}

function copy(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}