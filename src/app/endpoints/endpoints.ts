import { environment } from "src/environments/environment";
import { SweetPath } from "sweet-path";

export const loginEndpoint = new SweetPath(environment.apiUrl + '/auth/login/');
export const getStudentsEndpoint = new SweetPath(environment.apiUrl + '/users/students/');
export const getCodeBlocksEndpoint = new SweetPath(environment.apiUrl + '/code-blocks/');
export const generateSessionLinkEndpoint = new SweetPath(environment.apiUrl + '/sessions/')
export const getCodeEndpoint = new SweetPath<'codeBlockId'>(environment.apiUrl + '/code-blocks/:codeBlockId/')