import { DataTypes, Model } from "sequelize"; // Pastikan 'Optional' diimpor
import type { Optional } from "sequelize";
import db from "../config/dbConfig.js";

// Define the attributes for the Kelas model
interface KelasAttributes {
  id_kelas: number;
  nama_kelas: string;
}

// Define a type for creation attributes, where id_kelas is optional because it will be auto-incremented
interface KelasCreationAttributes extends Optional<KelasAttributes, "id_kelas"> {}

// Extend Sequelize's Model class
class Kelas
  extends Model<KelasAttributes, KelasCreationAttributes>
  implements KelasAttributes
{
  public id_kelas!: number; // Non-null assertion for required fields
  public nama_kelas!: string;

  // Declare additional methods if needed
}

// Initialize the model
Kelas.init(
  {
    id_kelas: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_kelas: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "kelas",
    timestamps: false,
  }
);

export default Kelas;
