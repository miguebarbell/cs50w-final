document.addEventListener('DOMContentLoaded', function() {
        loadgen()
})
function loadgen() {
        const slider = document.createElement('div')
        slider.innerHTML = `
            <div id="sliderdiv" class="slider" style="display:flex; justify-content:space-between; flex-wrap:wrap; padding:10px;">
            <span>length</span>
            <span id="rangevalue">10</span>
            <input type="range" value="10" min="6" max="50" id="range">
            <i class="fas fa-check-square" id="checkboxi"></i> <span>Symbols</span>
            </div>
                `;
        var passfield = document.querySelector('#id_password')
        passfield.parentNode.insertBefore(slider, passfield.nextSibling)
        const range = document.querySelector('#range')
        let symbols = 'True'
        let rangevalue = document.querySelector('#rangevalue')
        console.log(rangevalue.textContent)
        var checkbox = document.querySelector('#checkboxi')
        checkbox.addEventListener('click', function() {
                if (symbols === 'False') {
                        symbols = 'True'
                        checkbox.className = 'fas fa-check-square'
                        generate_password(range.value, symbols)
                } else if (symbols === 'True') {
                        symbols = 'False'
                        checkbox.className = 'fas fa-square'
                        generate_password(range.value, symbols)
                }

        })

        range.oninput = function() {
                rangevalue.textContent = range.value
                generate_password(range.value, symbols)
        }

}

function generate_password(length, symbols) {
    fetch(`genapi/${length}/${symbols}`)
        .then(response => response.json())
        .then(data => {
            var passwordvalue = document.querySelector('#id_password');
            passwordvalue.value = String(data['pass']);
        })
}
