// api url
const api_url =
	"https://www.breakingbadapi.com/api/characters";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>char_id</th>
		<th>name</th>
		<th>birthday</th>
		<th>occupation</th>
    <th>img</th>
    <th>status</th>
    <th>nickname</th>
    <th>appearance</th>
    <th>portrayed</th>
    <th>category</th>
		</tr>`;

	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.char_id} </td>
	<td>${r.name}</td>
	<td>${r.birthday}</td>
	<td>${r.occupation}</td>
  <td>${r.img} </td>
	<td>${r.status}</td>
	<td>${r.nickname}</td>
	<td>${r.appearance}</td>
  <td>${r.portrayed}</td>
	<td>${r.category}</td>
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
