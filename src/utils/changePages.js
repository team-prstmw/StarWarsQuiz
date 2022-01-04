export const removeElement = (containerDeletedClass) => {
  if (document.querySelector(containerDeletedClass)) {
    const containerDeleted = document.querySelector(containerDeletedClass);
    containerDeleted.parentNode.removeChild(containerDeleted);
  }
};

export const addElement = (parentContainer, ElementToCreate, classOfElementToCreate) => {
  const container = document.querySelector(parentContainer);
  if (container.querySelector(classOfElementToCreate)) return;
  const newElement = new ElementToCreate();
  const newElementRendered = newElement.render();
  container.appendChild(newElementRendered);
};

export const changePages = (containerDeletedClass, parentContainer, ElementToCreate, classOfElementToCreate) => {
  removeElement(containerDeletedClass);
  addElement(parentContainer, ElementToCreate, classOfElementToCreate);
};

export default changePages;
