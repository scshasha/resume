/** // Project blueprint. */

export class Project {
  public name: string;
  public desc: string;
  public imgPath: string;
  public appUrl: string;
  public category: string;

  categories: any = ['All', 'Drupal', 'WordPress', 'Angular'];

  constructor(
    name: string,
    desc: string,
    imgPath: string,
    appUrl: string,
    category: number
  ) {
    this.category = this.getCategory(category);
    this.name = name;
    this.desc = desc;
    this.imgPath = imgPath;
    this.appUrl = appUrl;
  }

  getCategory(id: number) {
    return this.categories[id];
  }
}
