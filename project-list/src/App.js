import "./App.css";
import { useState } from "react";
import projects from "./data/projects"; //importing the projects data into this module

//imports for components
import Card from "./components/card/card.component";
import Search from "./components/search/search.conponent";

export default function App() {
  const [searchedWord, setSearchedWord] = useState("");
  const [list, setList] = useState(projects);

  function handleChange(e) {
    setSearchedWord(e.target.value);
  }

  //removing the item from the list
  function onRemove(id) {
    setList((list) => list.filter((item) => item.id !== id));
  }

  function getList() {
 /*    if (!searchedWord) {
      return list;
    } */
    
    const query = searchedWord.toLocaleLowerCase();
    return list.filter(
      (project) =>
        project.title.toLocaleLowerCase().includes(query) ||
        project.description.toLocaleLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLocaleLowerCase().includes(query))
    );
  }

  return (
    <div className="App">
      <h1>Project List</h1>

      <div className="padding-1"></div>

      <Search
        placeholder="Enter Keyword to filter"
        handleChange={handleChange}
      />

      {getList().map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          tags={project.tags}
          onRemove={() => onRemove(project.id)}
        />
      ))}
    </div>
  );
}
