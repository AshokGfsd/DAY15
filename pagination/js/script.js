function ele(tagname, attname, attvalue) {
  let element = document.createElement(tagname);
  element.setAttribute(attname, attvalue);
  return element;
}

let description = document.createElement("p");
description.setAttribute("id", "description");
description.innerText =
  "Pagination is the method of separating digital content into different pages on a website. Users can navigate between these pages by clicking below Buttons.";

//----------------------------------------------------------------

let container = ele("div", "class", "container");
let maindiv = ele("div", "id", "main-div");
let navbar = ele("nav", "id", "nav-bar");
let title = ele("h1", "id", "title");
title.innerHTML = "DOM-Pagination task :";


//----------------------------------------------------------------
let content_div = document.createElement("div");
content_div.setAttribute("id", "buttons");
content_div.setAttribute("class", "d-flex justify-content-center");

//----------------------------------------------------------------

let ul_list = document.createElement("ul");
ul_list.classList.add("pagination", "justify-content-center");
ul_list.setAttribute("id", "ul-list");

//----------------------------------------------------------------
function lists(tagname) {
  let lists = document.createElement(tagname);
  return lists;
}

let list_pre = lists("li");
let list_first = lists("li");
//----------------------------------------------------------------
let list_1 = lists("li");
let list_2 = lists("li");
let list_3 = lists("li");
let list_4 = lists("li");
let list_5 = lists("li");
let list_6 = lists("li");
let list_7 = lists("li");
let list_8 = lists("li");
let list_9 = lists("li");
let list_10 = lists("li");
//--

let list_next = lists("li");


//----------------------------------------------------------------


function btnele(tagname, attname1, attvalue1, class1, class2, attname2, attvalue2, contenttext) {
  let button = document.createElement(tagname);
  button.setAttribute(attname1, attvalue1);
  button.classList.add(class1, class2);
  button.setAttribute(attname2, attvalue2);
  button.innerHTML = contenttext;
  return button;
}

let btn_pre = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-pre",
  "⏪Previous"
);
let btn_first = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-first",
  "First"
);

let btn_next = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-next",
  "Next⏩"
);

let btn_1 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-1",
  "1"
);
let btn_2 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-2",
  "2"
);
let btn_3 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-3",
  "3"
);
let btn_4 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-4",
  "4"
);
let btn_5 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-5",
  "5"
);
let btn_6 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-6",
  "6"
);
let btn_7 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-7",
  "7"
);
let btn_8 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-8",
  "8"
);
let btn_9 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-9",
  "9"
);
let btn_10 = btnele(
  "button",
  "type",
  "button",
  "btn",
  "btn-outline-primary",
  "id",
  "event-btn-10",
  "Last"
);
//----------------------------------------------------------------

function createtable(taganme) {
  let elements = document.createElement(taganme);
  return elements;
}

let table_div = createtable("div");
table_div.setAttribute("class", "table-responsive");

let table_tag = createtable("table");
table_tag.classList.add("table", "table-bordered");
table_tag.setAttribute("id", "table");

let table_body = createtable("tbody");
table_body.setAttribute("id", "t-body");

let table_head = createtable("thead");
table_head.setAttribute("id", "table-head");
let table_tr = createtable("tr");

let table_th1 = createtable("th");
table_th1.innerText = "Id";

let table_th2 = createtable("th");
table_th2.innerText = "Name";

let table_th3 = createtable("th");
table_th3.innerText = "Email";

//--------------------------------------------------------------

paginationData();
async function paginationData() {
  let res = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
  let JsonFormat = await res.json();
//  console.log(JsonFormat);

  try {
    let emailarr = [];
    let namearr = [];
    let idarr = [];
    for (let i = 0; i < JsonFormat.length; i++) {
      let name = JsonFormat[i].name;
      namearr.push(name);
      // console.log(name);
      let Email = JsonFormat[i].email;
      emailarr.push(Email);
      // console.log(Email);
      let id = JsonFormat[i].id;
      idarr.push(id);
      // console.log(id);
    }

    //----------------------------------------------------------------

    //*First button initial value...
    let starting_value = 0;

    //? Previous Button...
    let addEvent_pre = document.getElementById("event-btn-pre");
    addEvent_pre.addEventListener("click", () => {
      if (starting_value > 0) {
        starting_value = starting_value - 10;
        display_contents(starting_value);
      } else {
        alert("You are already at the beginning of the First page!");
      }
    });
    //----------------------------------------------------------------
    //? Next Button...
    let addEvent_next = document.getElementById("event-btn-next");
    addEvent_next.addEventListener("click", () => {
      if (starting_value < 90 && starting_value >= 0) {
        starting_value = starting_value + 10;
        display_contents(starting_value);
      } else {
        alert("You are already at the Last page!");
      }
    });
    //----------------------------------------------------------------
    //? First button...
    let addEvent_first = document.getElementById("event-btn-first");
    addEvent_first.addEventListener("click", () => {
      starting_value = 0;
      display_contents(starting_value);
    });
    // ----------------------------------------------------------------
    //? 2nd button...
    let addEvent_2nd = document.getElementById("event-btn-2");
    addEvent_2nd.addEventListener("click", () => {
      starting_value = 10;
      display_contents(starting_value);
    });
    // ----------------------------------------------------------------
    //? 3rd button...
    let addEvent_3rd = document.getElementById("event-btn-3");
    addEvent_3rd.addEventListener("click", () => {
      starting_value = 20;
      display_contents(starting_value);
    });
    // ----------------------------------------------------------------
    //? 4th button...
    let addEvent_4th = document.getElementById("event-btn-4");
    addEvent_4th.addEventListener("click", () => {
      starting_value = 30;
      display_contents(starting_value);
    });
    // ----------------------------------------------------------------
    //? 5th button...
    let addEvent_5th = document.getElementById("event-btn-5");
    addEvent_5th.addEventListener("click", () => {
      starting_value = 40;
      display_contents(starting_value);
    });
    // ----------------------------------------------------------------
    //? 6th button...
    let addEvent_6th = document.getElementById("event-btn-6");
    addEvent_6th.addEventListener("click", () => {
      starting_value = 50;
      display_contents(starting_value);
    });
    // ----------------------------------------------------------------
    //? 7th button...

    let addEvent_7th = document.getElementById("event-btn-7");
    addEvent_7th.addEventListener("click", () => {
      starting_value = 60;
      display_contents(starting_value);
    });
    // ----------------------------------------------------------------
    //? 8th button...

    let addEvent_8th = document.getElementById("event-btn-8");
    addEvent_8th.addEventListener("click", () => {
      starting_value = 70;
      display_contents(starting_value);
    });
    // ----------------------------------------------------------------
    //? 9th button...

    let addEvent_9th = document.getElementById("event-btn-9");
    addEvent_9th.addEventListener("click", () => {
      starting_value = 80;
      display_contents(starting_value);
    });
    // ----------------------------------------------------------------
    //? 10th button...

    let addEvent_10th = document.getElementById("event-btn-10");
    addEvent_10th.addEventListener("click", () => {
      starting_value = 90;
      display_contents(starting_value);
    });

    // ----------------------------------------------------------------

    function display_contents(Number_of_items) {
      let Table_body = document.getElementById("t-body");
      Table_body.innerHTML = "";
      // console.log(Number_of_items);

      for (let i = Number_of_items; i < Number_of_items + 10; i++) {
        eventButtonFirst(`${idarr[i]}`, `${namearr[i]}`, `${emailarr[i]}`);

        function eventButtonFirst(idData, emailData, nameData) {
          let row = document.createElement("tr");
          let td1 = document.createElement("td");
          td1.innerHTML = `${idData}`;
          let td2 = document.createElement("td");
          td2.innerHTML = `${emailData}`;
          let td3 = document.createElement("td");
          td3.innerHTML = `${nameData}`;
          table_body.append(row);
          row.append(td1, td2, td3);
        }
      }
    }

    display_contents(starting_value);

    //----------------------------------------------------------------

    //? catch-block:-
  } catch (error) {
    console.log(error);
  }
}

//----------------------------------------------------------------

//*appending....

document.body.append(container);
container.append(maindiv);
maindiv.append(title, description, table_div, content_div);
content_div.append(navbar);
navbar.append(ul_list);

//---------------------------------------------------------------

ul_list.append(
  list_first,
  list_pre,
  list_1,
  list_2,
  list_3,
  list_4,
  list_5,
  list_6,
  list_7,
  list_8,
  list_9,
  list_next,
  list_10
);
list_first.append(btn_first);
list_pre.append(btn_pre);
list_2.appendChild(btn_2);
list_3.appendChild(btn_3);
list_4.appendChild(btn_4);
list_5.appendChild(btn_5);
list_6.appendChild(btn_6);
list_7.appendChild(btn_7);
list_8.appendChild(btn_8);
list_9.appendChild(btn_9);
list_10.appendChild(btn_10);

list_next.append(btn_next);

//----------------------------------------------------------------

table_div.append(table_tag);
table_tag.append(table_head, table_body);
table_head.append(table_tr);

table_tr.append(table_th1, table_th2, table_th3);

//----------------------------------------------------------------
