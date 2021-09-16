import React, { useState } from "react";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";
import Title from "../components/Title";
import projectsdata from "../components/allProjectsData";
const allCategories = [
  "All",
  ...new Set(projectsdata.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(projectsdata);
  const filter = (category) => {
    if (category === "All") {
      setMenuItems(projectsdata);
      return;
    }
    const filteredData = projectsdata.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };
  return (
    <div className="ProjectsPage">
      <div className="project--title">
        <Title title={"Projects"} span={"Projects"} />
      </div>
      <div className="Projects--data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Projects;
