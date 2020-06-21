export interface UpdateAccessRepository {
  update (id: string, token: string): Promise<void>
}
