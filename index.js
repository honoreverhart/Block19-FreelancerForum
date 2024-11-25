//example freelancers
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
];

//possible names
const names = [
  "Aria",
  "Elijah",
  "Olivia",
  "Jackson",
  "Sophia",
  "Liam",
  "Emma",
  "Mason",
  "Isabella",
  "Lucas",
];

//possible occupations
const occupations = [
  "Software Developer",
  "Teacher",
  "Nurse",
  "Mechanical Engineer",
  "Graphic Designer",
  "Chef",
  "Marketing Analyst",
  "Electrician",
  "Physician",
  "Data Scientist",
];

//Headers of the table
function init() {
 
    const root = document.getElementById("root");
  
    const heading = document.createElement("h1");
    heading.textContent = "Freelancer Forum";
    root.appendChild(heading)

    const h2 = document.createElement("h2");
    h2.textContent = "The average starting price is $30"
    root.appendChild(h2)

    const availableh1 = document.createElement("h1");
    availableh1.textContent = "Available Freelancers"
    root.appendChild(availableh1)

  
}

//Creating the name, occupation, and price AND displays the freelancer object in table form
function freeRender(){

  const tbody = document.createElement("tbody")
  root.appendChild(tbody)

 

  const nameColumn1 = document.createElement("th")
  nameColumn1.textContent = "Name" 
  tbody.appendChild(nameColumn1)

  const jobColumn2 = document.createElement("th")
  jobColumn2.textContent = "Occupation" 
  tbody.appendChild(jobColumn2)

  const priceColumn3 = document.createElement("th")
  priceColumn3.textContent = "Price" 
  tbody.appendChild(priceColumn3)

  freelancers.forEach((person) => {

    const freeRow = document.createElement("tr")
    tbody.appendChild(freeRow)

    const nameCell = document.createElement("td")
    nameCell.textContent = person.name
    freeRow.appendChild(nameCell)

    const jobCell = document.createElement("td")
    jobCell.textContent = person.occupation
    freeRow.appendChild(jobCell)

    const priceCell = document.createElement("td")
    priceCell.textContent = person.price
    freeRow.appendChild(priceCell)

    tbody.append(freeRow)
  })
}

//adding a new freelancer to the table everytime the page is refreshed
function addNewFreelancer(){
  
  const addPrice = Math.floor(Math.random() * 100)
  const addName = names[Math.floor(Math.random() * names.length)];
  const addJob = occupations[Math.floor(Math.random() * names.length)];
  freelancers.push({ name: addName, occupation: addJob, price: addPrice });
  
  freeRender()
  

}



init()

//adding a freelancer every second to the table
//ERROR: its just repeating the table over and over... not sure how to fix it
const addFreelancerIntervalId = setInterval(() => {
  addNewFreelancer();

  
  if (freelancers.length >= maxLength) {
    clearInterval(addFreelancerIntervalId);
  }
}, 1000);




























