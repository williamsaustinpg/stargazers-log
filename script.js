fetch("events.json")
  .then((response) => response.json())
  .then((events) => {
    const list = document.querySelector("#starred");
    events.forEach((event) => {
      const item = document.createElement("li");
      const name = document.createElement("span");
      const date = document.createElement("time");

      name.className = "repo-name";
      name.textContent = event.name;
      date.className = "starred-date";
      date.dateTime = event.starred;
      date.textContent = `Starred ${event.starred}`;

      item.append(name, date);
      list.append(item);
    });
  });