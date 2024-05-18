// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
	list.forEach((item) => {
		item.classList.remove("hovered");
	});
	this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
	navigation.classList.toggle("active");
	main.classList.toggle("active");
};

//biểu đồ cột
document.addEventListener('DOMContentLoaded', function () {
	var ctx = document.getElementById('salaryChart').getContext('2d');

	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var salaries = [50000, 65000, 70000, 72000, 75000, 77000, 78000, 80000, 82000, 83000, 84000, 88000];
	var taxes = [10000, 12000, 14000, 14500, 15000, 15500, 16000, 16500, 17000, 17500, 18000, 18500];
	var salaries = [30000, 5000, 30000, 65000, 40000, 70000, 63000, 88000, 82000, 79000, 84000, 135000];

	var salaryChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: months,
			datasets: [{
				label: 'Gross Salary',
				data: salaries,
				backgroundColor: 'rgba(54, 162, 235, 0.5)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1
			}, {
				label: 'Taxes(15-30%)',
				data: taxes,
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1
			}, {
				label: 'Next Salary',
				data: salaries,
				backgroundColor: 'rgba(46, 204, 113, 0.5)',
				borderColor: 'rgba(46, 204, 113, 1)',
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
});
/*js thông báo */
var box = document.getElementById('box');
var down = false;
function toggleNotifi() {
	if (down) {
		box.style.height = '0px';
		box.style.opacity = 0;
		down = false;
	} else {
		box.style.height = '510px';
		box.style.opacity = 1;
		down = true;
	}
}
/* hàm tổng số nhân viên */

function getTotalEmployees() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "HR_2024.bak", true);
	xhr.onload = function () {
		if (this.status === 200) {
			var employees = JSON.parse(this.responseText);
			var totalEmployees = employees.length;
			console.log("Total Employees: " + totalEmployees);
		}
	};
	xhr.send();
}


/*thêm mới nhân viên */
const addEmployeeButton = document.getElementById("addEmployeeButton");
const employeeFormContainer = document.getElementById("employeeFormContainer");

let isOpen = false; // Biến để theo dõi trạng thái của bảng

addEmployeeButton.addEventListener("click", function () {
	if (isOpen) {
		employeeFormContainer.style.display = "none";
	} else {
		employeeFormContainer.style.display = "block";
	}
	isOpen = !isOpen; // Đảo ngược trạng thái sau mỗi lần nhấn nút
});
/*link liên kết tới trang login*/

/*hiển thị tất cả nhân viên khi chọn vào view */

const viewAllButton = document.querySelector('.btn');
const modal = document.getElementById('employeeModal');
const closeModal = document.getElementsByClassName('close')[0];

viewAllButton.addEventListener('click', function (event) {
	event.preventDefault();
	modal.style.display = "block";
});

closeModal.addEventListener('click', function () {
	modal.style.display = "none";
});

/*khi người dùng bấm vào thì sẽ hiện thị dữ liệu của người dùng */


const employeeForm = document.getElementById('employeeForm');

employeeForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const gender = document.getElementById('gender').value;

	// Send a request to the server to update the employee data
	//...

	// Close the modal after the data has been updated
	modal.style.display = "none";
});