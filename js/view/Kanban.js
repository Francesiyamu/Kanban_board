import Column from "./Column.js";


export default class Kanban {
  //this is where the html code will be generated uisng the root html
  constructor(root) {
		this.root = root;

		Kanban.columns().forEach(column => {
      
      //create an instance  of column class
			const columnView = new Column(column.id, column.title);

			this.root.appendChild(columnView.elements.root);
		});
	}

	static columns() {
		return [
			{
				id: 1,
				title: "Backlog"
			},
			{
				id: 2,
				title: "To-Do"
			},
			{
				id: 3,
				title: "Doing"
			},
      {
				id: 4,
				title: "Design"
			},
      {
				id: 5,
				title: "Testing"
			},
      {
				id: 6,
				title: "Done"
			},
      
		];
	}
}