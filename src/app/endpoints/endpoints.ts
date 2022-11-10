import { environment } from "src/environments/environment";
import { SweetPath } from "sweet-path";

export const loginEndpoint = new SweetPath(environment.apiUrl + '/api/auth/login/');
export const getStudentsEndpoint = new SweetPath(environment.apiUrl + '/api/users/students/');
export const getCodeBlocksEndpoint = new SweetPath(environment.apiUrl + '/api/code-blocks/');
export const generateSessionLinkEndpoint = new SweetPath(environment.apiUrl + '/api/sessions/')
export const getCodeEndpoint = new SweetPath<'codeBlockId'>(environment.apiUrl + '/api/code-blocks/:codeBlockId/')