export class Cat {

  public id: string;
  public pictureUrl: string;
  public width: number;
  public height: number;
  // this is optional when you search with categories
  public name: string;
  public categorie: number;
  public categorieName: string;

  // basic blueprints..

  constructor(id: string, url: string, width: number, height: number, name?: string, categorie?: number, categorieName?: string) {
    this.id = id;
    this.pictureUrl = url;
    this.width = width;
    this.height = height;
  }

}
