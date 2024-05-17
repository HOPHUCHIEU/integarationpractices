var el = document.getElementById('result');
var names = [];



function Create() {
	var el = document.getElementById('name')
	var e2 = document.getElementById('email')
	var e3 = document.getElementById('Phone')
	var e4 = document.getElementById('Birthday')
	var e5 = document.getElementById('Gender')
	var e6 = document.getElementById('Address')
	var e7 = document.getElementById('Ethnicity')



	var name = el.value;
	var email = e2.value;
	var phone = e3.value;
	var birthday = e4.value;
	var gender = e5.value;
	var address = e6.value;
	var ethnicity = e7.value;
	if (name && email && phone && birthday && gender && address && ethnicity) {
		names.push({name: name.trim(), email: email.trim(), phone: phone.trim(), birthday: birthday.trim(), gender: gender.trim(), address: address.trim(), ethnicity: ethnicity.trim()});
		el.value = '';
		e2.value = '';
		e3.value = '';
		e4.value = '';
		e5.value = '';
		e6.value = '';
		e7.value = '';
		displayData();
	}

	displayData();
};

function Delete(item) {
	names.splice(item, 1);
	displayData();

};
//chỉnh sửa
function Edit(item) {
	var el = document.getElementById('update_name')
	var e2 = document.getElementById('update_email')
	var e3 = document.getElementById('update_phone')
	var e4 = document.getElementById('update_birthday')
	var e5 = document.getElementById('update_gender')
	var e6 = document.getElementById('update_address')
	var e7 = document.getElementById('update_ethnicity')

	var person = names[item];

	el.value = person.name;
	e2.value = person.email;
	e3.value = person.phone;
	e4.value = person.birthday;
	e5.value = person.gender;
	e6.value = person.address;
	e7.value = person.ethnicity;

	document.getElementById('edit').style.display = 'inline';
	document.getElementById('create').style.display = 'none';
	self = this;

	document.getElementById('update').onsubmit = function () {
		person.name = el.value.trim();
        person.email = e2.value.trim();
        person.phone = e3.value.trim();
        person.birthday = e4.value;
        person.gender = e5.value.trim();
        person.address = e6.value.trim();
        person.ethnicity = e7.value.trim();

        displayData();
        document.getElementById('edit').style.display = 'none';
        document.getElementById('create').style.display = 'inline';
	}
};

//nút chỉnh sửa
function buttonToggle() {
	document.getElementById('edit').style.display = 'none';
	document.getElementById('create').style.display = 'inline';
}


function displayData() {
	var data = '';
	if (names.length > 0) {
		for (i = 0; i < names.length; i++) {
			data += '<tr>';
			data += '<td>' + names[i].name + '</td>';
			data += '<td>' + names[i].email + '</td>';
			data += '<td>' + names[i].phone + '</td>';
			data += '<td>' + names[i].birthday + '</td>';
			data += '<td>' + names[i].gender + '</td>';
			data += '<td>' + names[i].address + '</td>';
			data += '<td>' + names[i].ethnicity + '</td>';
			data += '<td colspan="2"><center><button class="btn btn-warning" onclick="Edit(' + i + ')"><span class="glyphicon glyphicon-edit"></span> Edit</button> | <button class="btn btn-danger" onclick="Delete(' + i + ')"><span class="glyphicon glyphicon-trash"></span> Delete</button></center></td>';
			data += '</tr>';
		}
	}

	el.innerHTML = data;
};


displayData();
buttonToggle();
