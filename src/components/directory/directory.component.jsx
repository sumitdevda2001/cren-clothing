import React from "react";
import DirectoryItem from "../../components/directory-item/directory-item.component"

import {categoryItems} from "../../data"
import { DirectoryContainer } from "./directory.style";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categoryItems.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;