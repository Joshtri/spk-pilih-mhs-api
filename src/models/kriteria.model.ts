import { Model, DataTypes, Optional } from 'sequelize';
import db from '../config/dbConfig.js';

interface KriteriaAttributes {
  id_kriteria: number;
  nama_kriteria: string;
  bobot: number;
}

type KriteriaCreationAttributes = Optional<KriteriaAttributes, 'id_kriteria'>;

class Kriteria extends Model<KriteriaAttributes, KriteriaCreationAttributes> implements KriteriaAttributes {
  public id_kriteria!: number;
  public nama_kriteria!: string;
  public bobot!: number;
}

Kriteria.init(
  {
    id_kriteria: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_kriteria: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    bobot: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'kriteria',
    timestamps: false,
  }
);

export default Kriteria;
