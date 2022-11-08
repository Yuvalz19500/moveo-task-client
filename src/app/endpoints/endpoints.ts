import { environment } from "src/environments/environment";
import { SweetPath } from "sweet-path";

export const login = new SweetPath(environment.apiUrl + '/auth/login');