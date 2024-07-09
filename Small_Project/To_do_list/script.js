const add_new = document.querySelector("#add_new_btn");
const task_done = [];
const task_removed = [];

let done_flag;
let removed_flag;

// Add New Task
add_new.addEventListener("click", function (e) {
  document.querySelector("#add").style.display = "none";
  document.querySelector("#input").style.display = "block flex";

  document.getElementById("task_name").value = "";
  document.getElementById("task_date").value = "";
  document.getElementById("task_timing").value = "";
  document.getElementById("task_description").value = "";
});

// Plus(+) Button
const plus = document.getElementById("plus");
plus.addEventListener("click", function (e) {
  const task_name = document.getElementById("task_name").value;
  const task_date = document.getElementById("task_date").value;
  const task_timing = document.getElementById("task_timing").value;
  const task_description = document.getElementById("task_description").value;

  const task_table = document.querySelector("#task_table");

  if (task_name && task_date && task_timing && task_description) {
    document.getElementById("error").style.display = "none";

    const tr = document.createElement("tr");

    task_table.appendChild(tr);
    tr.id = task_name;

    let td = document.createElement("td");
    td.innerText = task_name;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = task_date;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = task_timing;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = task_description;
    tr.appendChild(td);

    tr.style.height = "2rem";
    tr.style.backgroundColor = "white";

    const done = document.createElement("td");
    done.innerText = "✅";
    tr.appendChild(done);
    done.style.cursor = "pointer";

    const remove = document.createElement("td");
    remove.innerText = "❌";
    tr.appendChild(remove);
    remove.style.cursor = "pointer";

    // Task Done------------------------------------------------------------------------
    done.addEventListener("click", function () {
      task_done.push({ task_name, task_date, task_timing, task_description });
      done_flag = "new_done";
      tr.remove();
    });

    // Task Remove------------------------------------------------------------------------
    remove.addEventListener("click", function () {
      task_removed.push({
        task_name,
        task_date,
        task_timing,
        task_description,
      });
      removed_flag = "new_remove";
      tr.remove();
    });

    document.querySelector("#add").style.display = "block";
    document.querySelector("#input").style.display = "none";

    // Show Done Tasks------------------------------------------------------------------------
    document.getElementById("done_task").addEventListener("click", function () {
      document.getElementById("removed_task").style.display = "none";
      document.getElementById("done_task").style.display = "none";

      const done_table = document.getElementById("done_table");
      done_table.style.display = "block";

      if (done_flag === "new_done")
        for (let i = 0; i < task_done.length; i++) {
          let row = document.createElement("tr");
          row.style.backgroundColor = "white";
          done_table.appendChild(row);

          let data = document.createElement("td");
          data.innerText = task_done[i].task_name;
          row.appendChild(data);

          data = document.createElement("td");
          row.appendChild(data);
          data.innerText = task_done[i].task_date;

          data = document.createElement("td");
          row.appendChild(data);
          data.innerText = task_done[i].task_timing;

          data = document.createElement("td");
          row.appendChild(data);
          data.innerText = task_done[i].task_description;
        }
      done_flag = "no_new_done";

      document.getElementById("show_less").style.display = "block";
    });

    // Show Removed Tasks------------------------------------------------------------------------
    document
      .getElementById("removed_task")
      .addEventListener("click", function () {
        document.getElementById("removed_task").style.display = "none";
        document.getElementById("done_task").style.display = "none";

        const removed_table = document.getElementById("removed_table");
        removed_table.style.display = "block";

        if (removed_flag === "new_remove")
          for (let i = 0; i < task_removed.length; i++) {
            let row = document.createElement("tr");
            row.style.backgroundColor = "white";
            removed_table.appendChild(row);

            let data = document.createElement("td");
            data.innerText = task_removed[i].task_name;
            row.appendChild(data);

            data = document.createElement("td");
            row.appendChild(data);
            data.innerText = task_removed[i].task_date;

            data = document.createElement("td");
            row.appendChild(data);
            data.innerText = task_removed[i].task_timing;

            data = document.createElement("td");
            row.appendChild(data);
            data.innerText = task_removed[i].task_description;
          }
        removed_flag = "no_new_remove";

        document.getElementById("show_less").style.display = "block";
      });

      // Show less------------------------------------------------------------------------
      document
        .getElementById("show_less")
        .addEventListener("click", function () {
          document.getElementById("removed_task").style.display = "block";
          document.getElementById("done_task").style.display = "block";
          document.getElementById("show_less").style.display = "none";
          document.getElementById("done_table").style.display = "none";
        });
  } else {
    document.getElementById('error').style.display='block'
  }
});
