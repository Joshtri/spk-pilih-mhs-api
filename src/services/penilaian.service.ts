import { PenilaianRepository } from "../repositories/penilaian.repository";

export class PenilaianService {
  private repository: PenilaianRepository;

  constructor() {
    this.repository = new PenilaianRepository();
  }

  async getAllPenilaian() {
    return await this.repository.getAllPenilaian();
  }

  async getPenilaianById(id: number) {
    const penilaian = await this.repository.getPenilaianById(id);
    if (!penilaian) {
      throw new Error(`Penilaian with ID ${id} not found`);
    }
    return penilaian;
  }

  async createPenilaian(
    siswaId: number,
    kriteriaId: number,
    nilai_kriteria: number
  ) {
    return await this.repository.createPenilaian(siswaId, kriteriaId, nilai_kriteria);
  }

  async updatePenilaian(
    id: number,
    siswaId: number,
    kriteriaId: number,
    nilai_kriteria: number
  ) {
    const penilaian = await this.repository.getPenilaianById(id);
    if (!penilaian) {
      throw new Error(`Penilaian with ID ${id} not found`);
    }
    return await this.repository.updatePenilaian(
      id,
      siswaId,
      kriteriaId,
      nilai_kriteria
    );
  }

  async deletePenilaian(id: number) {
    const penilaian = await this.repository.getPenilaianById(id);
    if (!penilaian) {
      throw new Error(`Penilaian with ID ${id} not found`);
    }
    return await this.repository.deletePenilaian(id);
  }
}
