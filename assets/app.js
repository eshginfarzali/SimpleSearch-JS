

const languages = [
    {name: "Python"},
    {name: "C++"},
    {name: "Java"},
    {name: "C"},
    {name: "JavaScript"},
    {name: "PHP"},
    {name: "Perl"},
    {name: "Ruby"},
    {name: "Go"},
    {name: "CSS"},
    {name: "LeSS"},
    {name: "HTML5"}
  ];

 
 


 
  function searchNames() {
    const inpt = document.getElementById("input");
    const langList = document.getElementById("list");
  
    const filterLang =languages.filter(name => {
      return name.name.toLowerCase().includes(inpt.value.toLowerCase());
    });
  
    langList.innerHTML = "";
    filterLang.forEach(name => {
      const li = document.createElement("li");
      li.classList.add("languages");
      li.textContent = name.name;
      langList.appendChild(li);
    });
  }