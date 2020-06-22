export interface UpdateAccessRepository {
  updateAccessToken (id: string, token: string): Promise<void>
}
