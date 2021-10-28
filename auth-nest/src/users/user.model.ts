export class User {
  id: string;
  username: string;
  password: any;
  constructor(id: string, username: string, password: any) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
//shortcut offered by TS below - more concise
// export class User {
//   constructor(
//     public id: string,
//     public username: string,
//     public password: any,
//   ) {}
// }
