export interface AuthenticationModel {
  email: string
  password: TemplateStringsArray
}

export interface Authentication {
  auth (authentication: AuthenticationModel): Promise<string>
}
