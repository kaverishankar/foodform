let dup =10000;

function btnClick() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    var ele = document.getElementsByName('gender');
    var check =document.getElementsByName('check');
    const state = document.getElementById('state').value;
    const count = document.getElementById('count').value;
    
    
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const id = document.createElement('td');
        const fn = document.createElement('td');
        const ln = document.createElement('td');
        const add = document.createElement('td');
        const pin = document.createElement('td');
        const gen = document.createElement('td');
        const cho = document.createElement('td');
        const st = document.createElement('td');
        const ct = document.createElement('td');

        id.innerHTML = ++dup;
        fn.innerHTML = fname;
        ln.innerHTML = lname;
        add.innerHTML = address;
        pin.innerHTML = pincode;
 
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    gen.innerHTML
                        = ele[i].value;
            }
        let array = [];
        for(i = 0; i < check.length; i++)
        {
            if(check[i].checked)
            {
                array.push(check[i].value);
            }
        }
        cho.innerHTML = array;
        st.innerHTML = state;
        ct.innerHTML = count;
        
        trElement.appendChild(id);
        trElement.appendChild(fn);
        trElement.appendChild(ln);
        trElement.appendChild(add);
        trElement.appendChild(pin);
        trElement.appendChild(gen);
        trElement.appendChild(cho);
        trElement.appendChild(st);
        trElement.appendChild(ct);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);

}

function clclick() {
    document.getElementById('fname').value = '';
   document.getElementById('lname').value = '';
    document.getElementById('address').value = '';
     document.getElementById('pincode').value = '';
     var rad = document.getElementsByName('gender');
     for(i = 0; i < rad.length; i++)
     {
        if(rad[i].checked)
        rad[i].checked = false;
     }
     var checkb = document.getElementsByName('check');
     for(i = 0; i < checkb.length; i++)
     {
        if (checkb[i].checked)
        checkb[i].checked = false;
     }
    document.getElementsByName('check').value = '';
     document.getElementById('state').value = '';
    document.getElementById('count').value = '';
}