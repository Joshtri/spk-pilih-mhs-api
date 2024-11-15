import { Model, DataTypes } from 'sequelize';
import type { Optional } from 'sequelize';
import db from '../config/dbConfig';

interface SiswaAttributes {
  id_siswa: number;
  nama_siswa: string;
  kelasId: number; // Mengganti id_kelas dengan kelasId
}

type SiswaCreationAttributes = Optional<SiswaAttributes, 'id_siswa'>;

class Siswa extends Model<SiswaAttributes, SiswaCreationAttributes> implements SiswaAttributes {
  public id_siswa!: number;
  public nama_siswa!: string;
  public kelasId!: number;
}

Siswa.init(
  {
    id_siswa: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_siswa: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    kelasId: { // Nama kolom foreign key diubah menjadi kelasId
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'kelas',
        key: 'id_kelas',
      },
    },
  },
  {
    sequelize: db,
    tableName: 'siswa',
    timestamps: false,
  }
);

export default Siswa;
