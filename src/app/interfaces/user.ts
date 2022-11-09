export interface User {
    id?: number 
    username: string,
    password: string,
    userType: UserType
}

export enum UserType {
    MENTOR = 'MENTOR',
    STUDENT = 'STUDENT',
  }